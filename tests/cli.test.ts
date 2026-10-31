import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import * as path from 'node:path';
import * as fs from 'node:fs/promises';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import { scaffoldProject, generateFrootKitTemplate } from '../dist/index.js';

const execAsync = promisify(exec);

describe('⚡ create-frootkit Scaffolder', () => {
  it('generates complete template file map for Next.js alternative with API routes', () => {
    const files = generateFrootKitTemplate('test-app');
    assert.ok(files['package.json']);
    assert.ok(files['src/app/layout.tsx']);
    assert.ok(files['src/app/page.tsx']);
    assert.ok(files['src/app/api/health/route.ts'], 'Must generate health API route');
    assert.ok(files['src/app/docs/layout.tsx']);
    assert.ok(files['src/app/docs/page.tsx']);
    assert.ok(files['src/app/docs/[slug]/page.tsx']);
    assert.ok(files['src/styles.css']);
    assert.ok(files['content/docs/overview.md']);
    assert.ok(files['content/docs/quickstart.md']);

    // Check package.json scripts
    const pkg = JSON.parse(files['package.json']!);
    assert.equal(pkg.scripts.dev, 'frootkit dev');
    assert.equal(pkg.scripts.build, 'frootkit build');
    assert.equal(pkg.scripts.start, 'frootkit start');
    assert.ok(pkg.dependencies['froot-kit'] || pkg.dependencies['frootkit']);
    assert.ok(pkg.dependencies['preact']);
    assert.ok(pkg.devDependencies['tailwindcss']);
    assert.ok(pkg.devDependencies['tsx']);
  });

  it('scaffolds project to disk cleanly with API routes', async () => {
    const tempDir = path.resolve(import.meta.dirname, '../.temp-test-project');
    try {
      await fs.rm(tempDir, { recursive: true, force: true });
    } catch {}

    const result = await scaffoldProject({
      targetDir: tempDir,
      projectName: 'test-app',
      pkgManager: 'pnpm',
      db: 'drizzle',
      linter: 'biome',
      agent: true,
      gitInit: false,
      installDeps: false,
    });

    assert.ok(result.fileCount >= 14);

    const hasLayout = await fs.stat(path.join(tempDir, 'src/app/layout.tsx'));
    assert.ok(hasLayout.isFile());

    const hasApiRoute = await fs.stat(path.join(tempDir, 'src/app/api/health/route.ts'));
    assert.ok(hasApiRoute.isFile());

    const hasDrizzleConfig = await fs.stat(path.join(tempDir, 'drizzle.config.ts'));
    assert.ok(hasDrizzleConfig.isFile());

    const hasBiome = await fs.stat(path.join(tempDir, 'biome.json'));
    assert.ok(hasBiome.isFile());

    const hasAgent = await fs.stat(path.join(tempDir, 'AGENT.md'));
    assert.ok(hasAgent.isFile());

    // Clean up
    await fs.rm(tempDir, { recursive: true, force: true });
  });

  it('scaffolds Prisma ORM addon correctly', async () => {
    const tempDir = path.resolve(import.meta.dirname, '../.temp-test-prisma');
    try {
      await fs.rm(tempDir, { recursive: true, force: true });
    } catch {}

    await scaffoldProject({
      targetDir: tempDir,
      projectName: 'test-prisma',
      db: 'prisma',
      gitInit: false,
      installDeps: false,
    });

    const hasPrisma = await fs.stat(path.join(tempDir, 'prisma/schema.prisma'));
    assert.ok(hasPrisma.isFile());

    await fs.rm(tempDir, { recursive: true, force: true });
  });

  it('outputs valid JSON schema when called with --schema', async () => {
    const { stdout } = await execAsync('node dist/index.js --schema', {
      cwd: path.resolve(import.meta.dirname, '..'),
    });
    const schema = JSON.parse(stdout);

    assert.equal(schema.name, 'create-frootkit');
    assert.ok(schema.options.packageManager);
    assert.ok(schema.options.database);
    assert.ok(schema.options.linter);
  });
});
