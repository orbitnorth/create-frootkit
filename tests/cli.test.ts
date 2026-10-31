import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import * as path from 'node:path';
import * as fs from 'node:fs/promises';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import { scaffoldProject, generateFrootKitTemplate, TEMPLATE_LIST } from '../dist/index.js';

const execAsync = promisify(exec);

describe('⚡ create-frootkit Scaffolder', () => {
  it('registers all 5 official starter templates', () => {
    assert.equal(TEMPLATE_LIST.length, 5);
    const ids = TEMPLATE_LIST.map((t) => t.id);
    assert.ok(ids.includes('starter'));
    assert.ok(ids.includes('empty'));
    assert.ok(ids.includes('blog'));
    assert.ok(ids.includes('ecommerce'));
    assert.ok(ids.includes('auth'));
  });

  it('generates complete starter template file map for Next.js alternative with API routes', () => {
    const files = generateFrootKitTemplate('test-app', 'starter');
    assert.ok(files['package.json']);
    assert.ok(files['src/app/layout.tsx']);
    assert.ok(files['src/app/page.tsx']);
    assert.ok(files['src/app/api/health/route.ts'], 'Must generate health API route');
    assert.ok(files['src/components/Header.tsx']);
    assert.ok(files['src/components/FeatureCard.tsx']);
    assert.ok(files['src/styles.css']);
    assert.ok(files['README.md']);

    // Ensure NO unnecessary JSX pragma on line 1
    assert.ok(!files['src/app/page.tsx']!.includes('@jsxImportSource'), 'page.tsx must not have @jsxImportSource pragma');
    assert.ok(!files['src/app/layout.tsx']!.includes('@jsxImportSource'), 'layout.tsx must not have @jsxImportSource pragma');

    // Ensure docs and content directories are removed by default
    assert.equal(files['src/app/docs/page.tsx'], undefined, 'Docs directory must be removed');
    assert.equal(files['content/docs/overview.md'], undefined, 'Content directory must be removed');

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

  it('scaffolds blog template with dynamic [slug] route, components, and Drizzle models', async () => {
    const tempDir = path.resolve(import.meta.dirname, '../.temp-test-blog');
    try {
      await fs.rm(tempDir, { recursive: true, force: true });
    } catch {}

    const result = await scaffoldProject({
      targetDir: tempDir,
      projectName: 'my-blog',
      template: 'blog',
      db: 'drizzle',
      gitInit: false,
      installDeps: false,
    });

    assert.ok(result.fileCount >= 10);

    const hasSlugPage = await fs.stat(path.join(tempDir, 'src/app/blog/[slug]/page.tsx'));
    assert.ok(hasSlugPage.isFile());

    const hasPostsApi = await fs.stat(path.join(tempDir, 'src/app/api/posts/route.ts'));
    assert.ok(hasPostsApi.isFile());

    const hasPostCard = await fs.stat(path.join(tempDir, 'src/components/PostCard.tsx'));
    assert.ok(hasPostCard.isFile());

    const schemaContent = await fs.readFile(path.join(tempDir, 'src/db/schema.ts'), 'utf8');
    assert.ok(schemaContent.includes('authors'), 'Blog schema must define authors table');
    assert.ok(schemaContent.includes('posts'), 'Blog schema must define posts table');

    const seedContent = await fs.readFile(path.join(tempDir, 'src/db/seed.ts'), 'utf8');
    assert.ok(seedContent.includes('Seeding blog database'), 'Must have blog seed script');

    await fs.rm(tempDir, { recursive: true, force: true });
  });

  it('scaffolds ecommerce template with [id] detail page, cart, and Drizzle models', async () => {
    const tempDir = path.resolve(import.meta.dirname, '../.temp-test-ecommerce');
    try {
      await fs.rm(tempDir, { recursive: true, force: true });
    } catch {}

    const result = await scaffoldProject({
      targetDir: tempDir,
      projectName: 'my-store',
      template: 'ecommerce',
      db: 'drizzle',
      gitInit: false,
      installDeps: false,
    });

    assert.ok(result.fileCount >= 12);

    const hasProductPage = await fs.stat(path.join(tempDir, 'src/app/products/[id]/page.tsx'));
    assert.ok(hasProductPage.isFile());

    const hasCartPage = await fs.stat(path.join(tempDir, 'src/app/cart/page.tsx'));
    assert.ok(hasCartPage.isFile());

    const hasCheckoutApi = await fs.stat(path.join(tempDir, 'src/app/api/checkout/route.ts'));
    assert.ok(hasCheckoutApi.isFile());

    const schemaContent = await fs.readFile(path.join(tempDir, 'src/db/schema.ts'), 'utf8');
    assert.ok(schemaContent.includes('products'), 'Store schema must define products table');
    assert.ok(schemaContent.includes('orders'), 'Store schema must define orders table');

    await fs.rm(tempDir, { recursive: true, force: true });
  });

  it('scaffolds SaaS & auth template with real Web Crypto hashing, session API, and dashboard', async () => {
    const tempDir = path.resolve(import.meta.dirname, '../.temp-test-auth');
    try {
      await fs.rm(tempDir, { recursive: true, force: true });
    } catch {}

    const result = await scaffoldProject({
      targetDir: tempDir,
      projectName: 'my-saas',
      template: 'auth',
      db: 'drizzle',
      gitInit: false,
      installDeps: false,
    });

    assert.ok(result.fileCount >= 12);

    const hasAuthLib = await fs.stat(path.join(tempDir, 'src/lib/auth.ts'));
    assert.ok(hasAuthLib.isFile());

    const authLibContent = await fs.readFile(path.join(tempDir, 'src/lib/auth.ts'), 'utf8');
    assert.ok(authLibContent.includes('hashPassword'), 'Must provide hashPassword function');
    assert.ok(authLibContent.includes('verifyPassword'), 'Must provide verifyPassword function');
    assert.ok(authLibContent.includes('PBKDF2'), 'Must use Web Crypto PBKDF2 hashing');

    const hasLoginPage = await fs.stat(path.join(tempDir, 'src/app/login/page.tsx'));
    assert.ok(hasLoginPage.isFile());

    const hasDashboardLayout = await fs.stat(path.join(tempDir, 'src/app/dashboard/layout.tsx'));
    assert.ok(hasDashboardLayout.isFile());

    const hasAuthApi = await fs.stat(path.join(tempDir, 'src/app/api/auth/route.ts'));
    assert.ok(hasAuthApi.isFile());

    const schemaContent = await fs.readFile(path.join(tempDir, 'src/db/schema.ts'), 'utf8');
    assert.ok(schemaContent.includes('passwordHash') || schemaContent.includes('password_hash'), 'Auth schema must store password hash');
    assert.ok(schemaContent.includes('sessions'), 'Auth schema must define sessions table');

    await fs.rm(tempDir, { recursive: true, force: true });
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

    assert.ok(result.fileCount >= 8);

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

  it('scaffolds Prisma ORM addon correctly with template models', async () => {
    const tempDir = path.resolve(import.meta.dirname, '../.temp-test-prisma');
    try {
      await fs.rm(tempDir, { recursive: true, force: true });
    } catch {}

    await scaffoldProject({
      targetDir: tempDir,
      projectName: 'test-prisma-blog',
      template: 'blog',
      db: 'prisma',
      gitInit: false,
      installDeps: false,
    });

    const hasPrisma = await fs.stat(path.join(tempDir, 'prisma/schema.prisma'));
    assert.ok(hasPrisma.isFile());

    const prismaContent = await fs.readFile(path.join(tempDir, 'prisma/schema.prisma'), 'utf8');
    assert.ok(prismaContent.includes('model Author'), 'Must include Author model for blog');
    assert.ok(prismaContent.includes('model Post'), 'Must include Post model for blog');

    await fs.rm(tempDir, { recursive: true, force: true });
  });

  it('outputs valid JSON schema when called with --schema', async () => {
    const { stdout } = await execAsync('node dist/index.js --schema', {
      cwd: path.resolve(import.meta.dirname, '..'),
    });
    const schema = JSON.parse(stdout);

    assert.equal(schema.name, 'create-frootkit');
    assert.ok(schema.options.template);
    assert.equal(schema.options.template.choices.length, 5);
    assert.ok(schema.options.packageManager);
    assert.ok(schema.options.database);
    assert.ok(schema.options.linter);
  });
});
