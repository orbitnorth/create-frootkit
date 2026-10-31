import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import { generateFrootKitTemplate } from './template.js';
import { applyDatabaseAddon, type DatabaseOption } from './addons/database.js';
import { applyLinterAddon, type LinterOption } from './addons/linter.js';
import { applyAgentAddon } from './addons/agent.js';
import { applyDockerAddon } from './addons/docker.js';
import { Spinner } from './ui.js';

const execAsync = promisify(exec);

export interface ScaffoldOptions {
  targetDir: string;
  projectName: string;
  template?: string;
  pkgManager?: 'pnpm' | 'npm' | 'yarn' | 'bun';
  db?: DatabaseOption;
  linter?: LinterOption;
  docker?: boolean;
  agent?: boolean;
  gitInit?: boolean;
  installDeps?: boolean;
}

export interface ScaffoldResult {
  fileCount: number;
  gitInitialized: boolean;
  depsInstalled: boolean;
}

export async function scaffoldProject(options: ScaffoldOptions): Promise<ScaffoldResult> {
  const {
    targetDir,
    projectName,
    template = 'starter',
    pkgManager = 'npm',
    db = 'none',
    linter = 'none',
    docker = false,
    agent = true,
    gitInit = false,
    installDeps = false,
  } = options;

  await fs.mkdir(targetDir, { recursive: true });

  const writeSpinner = new Spinner('Scaffolding FrootKit application').start();
  const files = generateFrootKitTemplate(projectName, template);

  // Apply Add-ons
  if (db !== 'none') {
    applyDatabaseAddon(files, db, template);
  }
  if (linter !== 'none') {
    applyLinterAddon(files, linter);
  }
  if (docker) {
    applyDockerAddon(files, pkgManager);
  }
  if (agent) {
    applyAgentAddon(files, projectName);
  }

  const filePaths = Object.keys(files);

  for (const relPath of filePaths) {
    const fullPath = path.join(targetDir, relPath);
    await fs.mkdir(path.dirname(fullPath), { recursive: true });
    await fs.writeFile(fullPath, files[relPath]!, 'utf8');
  }

  writeSpinner.stop(`Created ${filePaths.length} project files`);

  let gitInitialized = false;
  if (gitInit) {
    const gitSpinner = new Spinner('Initializing Git repository').start();
    try {
      await execAsync('git init', { cwd: targetDir });
      gitInitialized = true;
      gitSpinner.stop('Initialized Git repository');
    } catch {
      gitSpinner.fail('Could not initialize Git repository');
    }
  }

  let depsInstalled = false;
  if (installDeps) {
    const depSpinner = new Spinner(`Installing dependencies with ${pkgManager}`, true).start();
    try {
      const isWin = process.platform === 'win32';
      const cmd = isWin && pkgManager !== 'bun' ? `${pkgManager}.cmd` : pkgManager;
      await execAsync(`${cmd} install`, { cwd: targetDir });
      depsInstalled = true;
      depSpinner.stop(`Installed dependencies with ${pkgManager}`);
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : String(err);
      depSpinner.fail(`Dependency install skipped: ${errMsg}`);
    }
  }

  return { fileCount: filePaths.length, gitInitialized, depsInstalled };
}
