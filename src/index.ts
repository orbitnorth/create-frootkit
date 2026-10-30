#!/usr/bin/env node
/**
 * create-frootkit CLI
 * The official project scaffolder for FrootKit (Next.js Alternative).
 */

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import * as path from 'node:path';
import { scaffoldProject } from './scaffold.js';

export * from './template.js';
export * from './scaffold.js';

async function main(): Promise<void> {
  const args = process.argv.slice(2);

  if (args.includes('-h') || args.includes('--help')) {
    console.log(`
  ▲ create-frootkit — The Next.js Alternative Project Scaffolder

  Usage:
    npm create frootkit [project-directory] [options]
    npx create-frootkit [project-directory] [options]

  Options:
    -y, --yes          Accept all defaults non-interactively
    --pm <manager>     Package manager: pnpm | npm | yarn | bun
    --git / --no-git   Initialize git repository
    --install          Install dependencies automatically
    -h, --help         Show help message
`);
    process.exit(0);
  }

  let projectDir = args.find((a: string) => !a.startsWith('-')) || '';
  const isNonInteractive = args.includes('-y') || args.includes('--yes');

  if (!projectDir && isNonInteractive) {
    projectDir = 'my-frootkit-app';
  }

  let pkgManager: 'pnpm' | 'npm' | 'yarn' | 'bun' = 'npm';
  const pmArg = args.indexOf('--pm');
  if (pmArg !== -1 && args[pmArg + 1]) {
    pkgManager = args[pmArg + 1] as any;
  } else if (process.env.npm_config_user_agent?.includes('pnpm')) {
    pkgManager = 'pnpm';
  } else if (process.env.npm_config_user_agent?.includes('bun')) {
    pkgManager = 'bun';
  }

  let gitInit = args.includes('--git');
  let installDeps = args.includes('--install');

  if (!isNonInteractive) {
    const rl = readline.createInterface({ input, output });

    console.log(`
  ▲ FrootKit — Next.js Alternative Scaffolder
  ──────────────────────────────────────────
`);

    if (!projectDir) {
      projectDir = (await rl.question('  Project directory: (my-frootkit-app) ')).trim() || 'my-frootkit-app';
    }

    const gitAnswer = (await rl.question('  Initialize git repository? (Y/n) ')).trim().toLowerCase();
    gitInit = gitAnswer === '' || gitAnswer === 'y' || gitAnswer === 'yes';

    const installAnswer = (await rl.question(`  Install dependencies with ${pkgManager}? (y/N) `)).trim().toLowerCase();
    installDeps = installAnswer === 'y' || installAnswer === 'yes';

    rl.close();
  }

  const targetDir = path.resolve(process.cwd(), projectDir);
  const projectName = path.basename(targetDir);

  console.log(`\n  Creating FrootKit application in ${targetDir}...`);
  const result = await scaffoldProject({
    targetDir,
    projectName,
    pkgManager,
    gitInit,
    installDeps,
  });

  console.log(`
  ✓ Created ${result.fileCount} files
  ${gitInit ? '✓ Initialized git repository\n' : ''}
  Success! Next steps:
    $ cd ${projectDir}
    $ ${pkgManager} install
    $ ${pkgManager} run dev

  Server starts on http://localhost:3000
`);
}

import { fileURLToPath } from 'node:url';

// Only execute when invoked directly as CLI
const thisFile = fileURLToPath(import.meta.url);
const invokedFile = process.argv[1] ? path.resolve(process.argv[1]) : '';
const isDirectCli =
  invokedFile === thisFile ||
  invokedFile.endsWith('create-frootkit') ||
  invokedFile.endsWith('create-frootkit\\dist\\index.js') ||
  invokedFile.endsWith('create-frootkit/dist/index.js') ||
  invokedFile.endsWith('create-froot-fullstack') ||
  invokedFile.endsWith('create-froot-fullstack\\dist\\index.js') ||
  invokedFile.endsWith('create-froot-fullstack/dist/index.js');

if (isDirectCli && !process.env['NODE_TEST_CONTEXT']) {
  main().catch((err) => {
    console.error('Fatal CLI error:', err);
    process.exit(1);
  });
}
