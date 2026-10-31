import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import { generateFrootKitTemplate } from './template.js';
import { applyDatabaseAddon, type DatabaseOption } from './addons/database.js';
import { applyLinterAddon, type LinterOption } from './addons/linter.js';
import { applyAgentAddon } from './addons/agent.js';
import { applyDockerAddon } from './addons/docker.js';

const execAsync = promisify(exec);

export interface ScaffoldOptions {
  targetDir: string;
  projectName: string;
  pkgManager?: 'pnpm' | 'npm' | 'yarn' | 'bun';
  db?: DatabaseOption;
  linter?: LinterOption;
  docker?: boolean;
  agent?: boolean;
  gitInit?: boolean;
  installDeps?: boolean;
}

export async function scaffoldProject(options: ScaffoldOptions): Promise<{ fileCount: number }> {
  const {
    targetDir,
    projectName,
    pkgManager = 'npm',
    db = 'none',
    linter = 'none',
    docker = false,
    agent = true,
    gitInit = false,
    installDeps = false,
  } = options;

  await fs.mkdir(targetDir, { recursive: true });

  const files = generateFrootKitTemplate(projectName);

  // Apply Add-ons
  if (db !== 'none') {
    applyDatabaseAddon(files, db);
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

  if (gitInit) {
    try {
      await execAsync('git init', { cwd: targetDir });
    } catch {
      // ignore git init errors
    }
  }

  if (installDeps) {
    try {
      const isWin = process.platform === 'win32';
      const cmd = isWin && pkgManager !== 'bun' ? `${pkgManager}.cmd` : pkgManager;
      await execAsync(`${cmd} install`, { cwd: targetDir });
    } catch {
      // ignore install errors
    }
  }

  return { fileCount: filePaths.length };
}
