import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import { generateFrootKitTemplate } from './template.js';

const execAsync = promisify(exec);

export interface ScaffoldOptions {
  targetDir: string;
  projectName: string;
  pkgManager?: 'pnpm' | 'npm' | 'yarn' | 'bun';
  gitInit?: boolean;
  installDeps?: boolean;
}

export async function scaffoldProject(options: ScaffoldOptions): Promise<{ fileCount: number }> {
  const {
    targetDir,
    projectName,
    pkgManager = 'npm',
    gitInit = false,
    installDeps = false,
  } = options;

  await fs.mkdir(targetDir, { recursive: true });

  const files = generateFrootKitTemplate(projectName);
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
      await execAsync(`${pkgManager} install`, { cwd: targetDir });
    } catch {
      // ignore install errors
    }
  }

  return { fileCount: filePaths.length };
}

