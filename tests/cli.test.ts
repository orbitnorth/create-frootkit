import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import * as path from 'node:path';
import * as fs from 'node:fs/promises';
import { scaffoldProject, generateFrootKitTemplate } from '../dist/index.js';

describe('⚡ create-frootkit Scaffolder', () => {
  it('generates complete template file map for Next.js alternative', () => {
    const files = generateFrootKitTemplate('test-app');
    assert.ok(files['package.json']);
    assert.ok(files['src/app/layout.tsx']);
    assert.ok(files['src/app/page.tsx']);
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
  });

  it('scaffolds project to disk cleanly', async () => {
    const tempDir = path.resolve(import.meta.dirname, '../.temp-test-project');
    try {
      await fs.rm(tempDir, { recursive: true, force: true });
    } catch {}

    const result = await scaffoldProject({
      targetDir: tempDir,
      projectName: 'test-app',
      pkgManager: 'npm',
      gitInit: false,
      installDeps: false,
    });

    assert.ok(result.fileCount >= 10);

    const hasLayout = await fs.stat(path.join(tempDir, 'src/app/layout.tsx'));
    assert.ok(hasLayout.isFile());

    const hasStyles = await fs.stat(path.join(tempDir, 'src/styles.css'));
    assert.ok(hasStyles.isFile());

    // Clean up
    await fs.rm(tempDir, { recursive: true, force: true });
  });
});

