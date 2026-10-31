/**
 * Template Definition for FrootKit (Next.js Alternative).
 * Loads project templates from real template folders on disk (with fallback to code definitions).
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { getTemplate, starterTemplate, type TemplateFileMap } from './templates/index.js';

export * from './templates/index.js';

/**
 * Attempts to load template files directly from the physical template directory on disk.
 */
function loadTemplateFromDisk(templateId: string, projectName: string): Record<string, string> | null {
  const candidateDirs = [
    path.resolve(import.meta.dirname, '../templates', templateId),
    path.resolve(import.meta.dirname, '../../templates', templateId),
    path.resolve(process.cwd(), 'templates', templateId),
    path.resolve(process.cwd(), 'create-frootkit/templates', templateId),
  ];

  for (const dir of candidateDirs) {
    if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
      const files: Record<string, string> = {};
      const walk = (currentDir: string, base: string = '') => {
        const entries = fs.readdirSync(currentDir, { withFileTypes: true });
        for (const entry of entries) {
          const rel = base ? `${base}/${entry.name}` : entry.name;
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
      return files;
    }
  }
  return null;
}

export function generateFrootKitTemplate(
  projectName: string,
  templateId: string = 'starter'
): Record<string, string> {
  // 1. Try physical folder on disk first
  const diskFiles = loadTemplateFromDisk(templateId, projectName);
  if (diskFiles && Object.keys(diskFiles).length > 0) {
    return diskFiles;
  }

  // 2. Fall back to compiled template generator
  const tpl = getTemplate(templateId) || starterTemplate;
  return tpl.generate(projectName);
}

export const generateFullstackTemplate = generateFrootKitTemplate;
