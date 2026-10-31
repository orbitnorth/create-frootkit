/**
 * Template Definition for FrootKit (Next.js Alternative).
 * Loads project templates directly from physical template folders on disk.
 */

import { getTemplate, starterTemplate, type TemplateFileMap } from './templates/index.js';

export * from './templates/index.js';

export function generateFrootKitTemplate(
  projectName: string,
  templateId: string = 'starter'
): TemplateFileMap {
  const tpl = getTemplate(templateId) || starterTemplate;
  return tpl.generate(projectName);
}

export const generateFullstackTemplate = generateFrootKitTemplate;
