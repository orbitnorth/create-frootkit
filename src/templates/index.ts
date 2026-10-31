/**
 * Template Registry for create-frootkit
 * Dynamically loads templates from physical template folders on disk.
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import type { TemplateDefinition, TemplateId, TemplateFileMap } from './types.js';

export * from './types.js';

/**
 * Resolves the directory for a given template ID.
 */
export function getTemplateDir(templateId: TemplateId): string {
  const candidateDirs = [
    path.resolve(import.meta.dirname, '../../templates', templateId),
    path.resolve(import.meta.dirname, '../templates', templateId),
    path.resolve(process.cwd(), 'templates', templateId),
    path.resolve(process.cwd(), 'create-frootkit/templates', templateId),
  ];

  for (const dir of candidateDirs) {
    if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
      return dir;
    }
  }

  throw new Error(`Template directory not found for template "${templateId}".`);
}

export const DEFAULT_GITIGNORE = `# Dependencies
node_modules/
.pnpm-store/

# FrootKit build output
.froot/
dist/
.cache/

# Database Journals & Temporary files (keeps sqlite.db visible in project)
*.db-journal
*.db-wal
*.db-shm

# Environment
.env
.env.local
.env.production

# OS & Editor
.DS_Store
Thumbs.db
.vscode/
.idea/
*.log
`;

/**
 * Reads all files from the physical template directory recursively.
 */
export function readTemplateFiles(templateId: TemplateId, projectName: string): TemplateFileMap {
  const dir = getTemplateDir(templateId);
  const files: TemplateFileMap = {};

  const walk = (currentDir: string, base: string = '') => {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      // NPM automatically renames .gitignore to .npmignore on publish.
      // We map .npmignore and _gitignore to .gitignore so scaffolded projects always have .gitignore.
      let targetName = entry.name;
      if (targetName === '.npmignore' || targetName === '_gitignore' || targetName === 'gitignore') {
        targetName = '.gitignore';
      }

      const rel = base ? `${base}/${targetName}` : targetName;
      const full = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        walk(full, rel);
      } else if (entry.isFile()) {
        let content = fs.readFileSync(full, 'utf8');
        content = content.replaceAll('{{PROJECT_NAME}}', projectName);
        files[rel] = content;
      }
    }
  };

  walk(dir);

  // Guarantee .gitignore is always present in every scaffolded project
  if (!files['.gitignore']) {
    files['.gitignore'] = DEFAULT_GITIGNORE;
  }

  return files;
}

export const starterTemplate: TemplateDefinition = {
  id: 'starter',
  name: 'Starter (Recommended)',
  description: 'Full-featured developer showcase with hero, Tailwind v4, and health API',
  badge: 'Recommended',
  generate: (projectName: string) => readTemplateFiles('starter', projectName),
};

export const emptyTemplate: TemplateDefinition = {
  id: 'empty',
  name: 'Minimal Canvas',
  description: 'Clean blank slate with Preact SSR and Tailwind CSS',
  generate: (projectName: string) => readTemplateFiles('empty', projectName),
};

export const blogTemplate: TemplateDefinition = {
  id: 'blog',
  name: 'Blog & Content',
  description: 'Engineering articles, dynamic [slug] routes, and search API',
  generate: (projectName: string) => readTemplateFiles('blog', projectName),
};

export const ecommerceTemplate: TemplateDefinition = {
  id: 'ecommerce',
  name: 'E-Commerce Store',
  description: 'Product catalog, [id] details, cart & checkout API',
  generate: (projectName: string) => readTemplateFiles('ecommerce', projectName),
};

export const authTemplate: TemplateDefinition = {
  id: 'auth',
  name: 'SaaS & Authentication',
  description: 'Web Crypto PBKDF2 hashing, sessions, login, signup & dashboard',
  generate: (projectName: string) => readTemplateFiles('auth', projectName),
};

export const TEMPLATES: Record<TemplateId, TemplateDefinition> = {
  starter: starterTemplate,
  empty: emptyTemplate,
  blog: blogTemplate,
  ecommerce: ecommerceTemplate,
  auth: authTemplate,
};

export const TEMPLATE_LIST: TemplateDefinition[] = [
  starterTemplate,
  emptyTemplate,
  blogTemplate,
  ecommerceTemplate,
  authTemplate,
];

export function getTemplate(id?: string): TemplateDefinition | undefined {
  if (!id) return starterTemplate;
  const key = id.toLowerCase().trim() as TemplateId;
  return TEMPLATES[key] || (key === ('minimal' as any) ? emptyTemplate : undefined);
}
