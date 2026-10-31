#!/usr/bin/env node
/**
 * create-frootkit CLI
 * The official project generator for FrootKit (Next.js Alternative).
 */

import * as path from 'node:path';
import * as fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import {
  printBanner,
  printStep,
  printSuccess,
  printError,
  printNextSteps,
  promptSelect,
  promptText,
  promptConfirm,
  c,
} from './ui.js';
import { scaffoldProject, type ScaffoldOptions } from './scaffold.js';
import type { DatabaseOption } from './addons/database.js';
import type { LinterOption } from './addons/linter.js';

export * from './template.js';
export * from './scaffold.js';
export * from './ui.js';

const VERSION = '1.2.3';

interface ParsedArgs {
  targetDir?: string;
  template?: string;
  pkgManager?: 'pnpm' | 'npm' | 'yarn' | 'bun';
  db?: DatabaseOption;
  linter?: LinterOption;
  docker?: boolean;
  agent?: boolean;
  git?: boolean;
  install?: boolean;
  yes?: boolean;
  help?: boolean;
  version?: boolean;
  schema?: boolean;
}

function parseCliArgs(argv: string[]): ParsedArgs {
  const raw = argv.slice(2);
  const args: ParsedArgs = {};

  for (let i = 0; i < raw.length; i++) {
    const item = raw[i]!;

    if (item === '--help' || item === '-h') {
      args.help = true;
    } else if (item === '--version' || item === '-v') {
      args.version = true;
    } else if (item === '--schema' || item === '--json-schema') {
      args.schema = true;
    } else if (item === '--yes' || item === '-y') {
      args.yes = true;
    } else if (item === '--git') {
      args.git = true;
    } else if (item === '--no-git') {
      args.git = false;
    } else if (item === '--install') {
      args.install = true;
    } else if (item === '--no-install') {
      args.install = false;
    } else if (item === '--docker') {
      args.docker = true;
    } else if (item === '--no-docker') {
      args.docker = false;
    } else if (item === '--agent' || item === '--ai') {
      args.agent = true;
    } else if (item === '--no-agent' || item === '--no-ai') {
      args.agent = false;
    } else if (item === '--biome') {
      args.linter = 'biome';
    } else if (item === '--eslint') {
      args.linter = 'eslint';
    } else if (item === '--linter') {
      args.linter = raw[++i] as LinterOption;
    } else if (item.startsWith('--linter=')) {
      args.linter = item.split('=')[1] as LinterOption;
    } else if (item === '--drizzle') {
      args.db = 'drizzle';
    } else if (item === '--prisma') {
      args.db = 'prisma';
    } else if (item === '--db' || item === '--database') {
      args.db = raw[++i] as DatabaseOption;
    } else if (item.startsWith('--db=')) {
      args.db = item.split('=')[1] as DatabaseOption;
    } else if (item === '--pm') {
      args.pkgManager = raw[++i] as any;
    } else if (item.startsWith('--pm=')) {
      args.pkgManager = item.split('=')[1] as any;
    } else if (item === '--template' || item === '-t') {
      args.template = raw[++i];
    } else if (item.startsWith('--template=')) {
      args.template = item.split('=')[1];
    } else if (item === '--starter') {
      args.template = 'starter';
    } else if (item === '--empty') {
      args.template = 'empty';
    } else if (item === '--blog') {
      args.template = 'blog';
    } else if (item === '--ecommerce' || item === '--store') {
      args.template = 'ecommerce';
    } else if (item === '--auth' || item === '--saas') {
      args.template = 'auth';
    } else if (!item.startsWith('-') && !args.targetDir) {
      args.targetDir = item;
    }
  }

  return args;
}

function printUsage(): void {
  console.log(`
  ${c.bold}Usage:${c.reset}
    npm create frootkit [project-directory] [options]
    pnpm create frootkit [project-directory] [options]
    bun create frootkit [project-directory] [options]
    npx create-frootkit [project-directory] [options]

  ${c.bold}Options:${c.reset}
    -t, --template <name>    Starter template: starter | blog | ecommerce | auth | empty
    --pm <manager>           Package manager: pnpm | npm | yarn | bun
    --db <orm>               Database ORM: none | drizzle | prisma
    --linter <tool>          Linter & formatter: none | biome | eslint
    --docker / --no-docker   Generate Dockerfile and docker-compose.yml
    --agent / --no-agent     Generate AGENT.md & .cursorrules for AI coding assistants
    --git / --no-git         Initialize git repository (default: true)
    --install / --no-install Automatically install dependencies
    --schema                 Output machine-readable JSON schema for AI agents
    -y, --yes                Accept all defaults non-interactively
    -v, --version            Display version
    -h, --help               Display help information
`);
}

function printAgentSchema(): void {
  const schema = {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    name: 'create-frootkit',
    version: VERSION,
    description: 'CLI generator for scaffolding high-performance FrootKit (Next.js alternative) web applications',
    usage: 'npm create frootkit [project-directory] [options]',
    nonInteractiveFlag: '-y or --yes',
    options: {
      template: {
        flag: '--template <name>',
        choices: ['starter', 'blog', 'ecommerce', 'auth', 'empty'],
        default: 'starter',
        description: 'Starter template with polished layout, components, and real models',
      },
      packageManager: {
        flag: '--pm <manager>',
        choices: ['pnpm', 'npm', 'yarn', 'bun'],
        default: 'auto-detected',
        description: 'Package manager for dependency installation',
      },
      database: {
        flag: '--db <orm>',
        choices: ['none', 'drizzle', 'prisma'],
        default: 'none',
        description: 'Database ORM integration with template-tailored models and SQLite seed',
      },
      linter: {
        flag: '--linter <tool>',
        choices: ['none', 'biome', 'eslint'],
        default: 'none',
        description: 'Linter and code quality formatter',
      },
      docker: {
        flag: '--docker / --no-docker',
        type: 'boolean',
        default: false,
        description: 'Generate multi-stage Docker container setup',
      },
      agentRules: {
        flag: '--agent / --no-agent',
        type: 'boolean',
        default: true,
        description: 'Generate AGENT.md and .cursorrules for AI assistants',
      },
      git: {
        flag: '--git / --no-git',
        type: 'boolean',
        default: true,
        description: 'Initialize a Git repository',
      },
      install: {
        flag: '--install / --no-install',
        type: 'boolean',
        default: false,
        description: 'Automatically install dependencies',
      },
    },
  };
  console.log(JSON.stringify(schema, null, 2));
}

async function main(): Promise<void> {
  const args = parseCliArgs(process.argv);

  if (args.schema) {
    printAgentSchema();
    return;
  }

  if (args.version) {
    console.log(`create-frootkit v${VERSION}`);
    return;
  }

  if (args.help) {
    printBanner(VERSION);
    printUsage();
    return;
  }

  printBanner(VERSION);

  // 1. Target Directory & Project Name
  let targetDir = args.targetDir;
  if (!targetDir) {
    if (args.yes) {
      targetDir = 'my-frootkit-app';
    } else {
      printStep(1, 8, 'Project Directory');
      targetDir = await promptText('Directory name:', 'my-frootkit-app', (input) => {
        if (!input.trim()) return 'Project name cannot be empty';
        return true;
      });
      console.log();
    }
  }

  const resolvedTarget = path.resolve(process.cwd(), targetDir);
  const projectName = path.basename(resolvedTarget);

  if (fs.existsSync(resolvedTarget)) {
    const existing = fs.readdirSync(resolvedTarget);
    if (existing.length > 0 && !args.yes) {
      const proceed = await promptConfirm(
        `Directory "${targetDir}" is not empty. Continue anyway?`,
        false
      );
      if (!proceed) {
        printError('Aborted by user.');
        process.exit(1);
      }
      console.log();
    }
  }

  // 2. Starter Template Selection
  let template = args.template;
  if (!template) {
    if (args.yes) {
      template = 'starter';
    } else {
      printStep(2, 8, 'Starter Template');
      template = await promptSelect<string>(
        'Choose a project template:',
        [
          {
            value: 'starter',
            label: 'Starter (Recommended)',
            hint: 'Developer showcase with hero, Tailwind v4, and health API',
          },
          {
            value: 'blog',
            label: 'Blog & Content',
            hint: 'Engineering articles, dynamic [slug] routes, and search API',
          },
          {
            value: 'ecommerce',
            label: 'E-Commerce Store',
            hint: 'Product catalog, [id] details, cart & checkout API',
          },
          {
            value: 'auth',
            label: 'SaaS & Authentication',
            hint: 'Web Crypto PBKDF2 hashing, sessions, login, signup & dashboard',
          },
          {
            value: 'empty',
            label: 'Minimal Canvas',
            hint: 'Blank slate with Preact SSR and Tailwind CSS',
          },
        ],
        0
      );
      console.log();
    }
  }

  // 3. Package Manager Selection (do not detect, always ask the user)
  let pkgManager = args.pkgManager;
  if (!pkgManager) {
    if (args.yes) {
      pkgManager = 'pnpm';
    } else {
      printStep(3, 8, 'Package Manager');
      pkgManager = await promptSelect<'pnpm' | 'npm' | 'yarn' | 'bun'>(
        'Choose your package manager:',
        [
          { value: 'pnpm', label: 'pnpm', hint: 'Fast, disk space efficient (recommended)' },
          { value: 'npm', label: 'npm', hint: 'Standard Node.js package manager' },
          { value: 'bun', label: 'bun', hint: 'All-in-one JavaScript runtime & toolkit' },
          { value: 'yarn', label: 'yarn', hint: 'Classic package manager' },
        ],
        0
      );
      console.log();
    }
  }

  // 4. Database ORM Selection
  let db = args.db;
  if (!db) {
    if (args.yes) {
      db = 'none';
    } else {
      printStep(4, 8, 'Database / ORM');
      db = await promptSelect<DatabaseOption>(
        'Include a database integration?',
        [
          { value: 'none', label: 'None', hint: 'No database / mock data & in-memory state' },
          {
            value: 'drizzle',
            label: 'Drizzle ORM',
            hint: 'TypeScript ORM with template-tailored schema, @libsql client & studio',
          },
          {
            value: 'prisma',
            label: 'Prisma',
            hint: 'Next-gen ORM with template-tailored schema & SQLite generator',
          },
        ],
        0
      );
      console.log();
    }
  }

  // 5. Linter & Formatter Selection
  let linter = args.linter;
  if (!linter) {
    if (args.yes) {
      linter = 'none';
    } else {
      printStep(5, 8, 'Linter & Formatter');
      linter = await promptSelect<LinterOption>(
        'Include code quality and linting tools?',
        [
          { value: 'none', label: 'None', hint: 'Standard TypeScript compiler only' },
          { value: 'biome', label: 'Biome', hint: 'Ultra-fast Rust-based linter and formatter' },
          { value: 'eslint', label: 'ESLint + Prettier', hint: 'Classic ecosystem standard' },
        ],
        0
      );
      console.log();
    }
  }

  // 6. AI Coding Guidelines
  let agent = args.agent;
  if (agent === undefined) {
    if (args.yes) {
      agent = true;
    } else {
      printStep(6, 8, 'AI Coding Guidelines');
      agent = await promptConfirm('Include AI guidelines (AGENT.md & .cursorrules)?', true);
      console.log();
    }
  }

  // 7. Docker Container
  let docker = args.docker;
  if (docker === undefined) {
    if (args.yes) {
      docker = false;
    } else {
      printStep(7, 8, 'Docker Container');
      docker = await promptConfirm('Include Docker container setup (Dockerfile & compose)?', false);
      console.log();
    }
  }

  // 8. Git & Dependencies
  let gitInit = args.git;
  if (gitInit === undefined) {
    if (args.yes) {
      gitInit = true;
    } else {
      printStep(8, 8, 'Git & Dependencies');
      gitInit = await promptConfirm('Initialize a new Git repository?', true);
      console.log();
    }
  }

  let installDeps = args.install;
  if (installDeps === undefined) {
    if (args.yes) {
      installDeps = false;
    } else {
      installDeps = await promptConfirm(`Install dependencies now with ${pkgManager}?`, true);
      console.log();
    }
  }

  console.log(`  Creating FrootKit application in ${c.cyan}${resolvedTarget}${c.reset}...\n`);
  const scaffoldResult = await scaffoldProject({
    targetDir: resolvedTarget,
    projectName,
    template,
    pkgManager,
    db,
    linter,
    docker,
    agent,
    gitInit,
    installDeps,
  });

  printNextSteps(targetDir, pkgManager, scaffoldResult.depsInstalled);
}

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

if (isDirectCli) {
  main().catch((err) => {
    printError(`Fatal error: ${err.message || err}`);
    process.exit(1);
  });
}
