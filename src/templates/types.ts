/**
 * Template Definition Types for create-frootkit
 */

export type TemplateId = 'starter' | 'empty' | 'blog' | 'ecommerce' | 'auth';

export type TemplateFileMap = Record<string, string>;

export interface TemplateDefinition {
  id: TemplateId;
  name: string;
  description: string;
  badge?: string;
  generate: (projectName: string) => TemplateFileMap;
}
