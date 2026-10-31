/**
 * Template Registry for create-frootkit
 * Provides templates for Starter, Empty/Minimal, Blog, E-Commerce, and SaaS & Auth.
 */

import type { TemplateDefinition, TemplateId } from './types.js';
import { starterTemplate } from './starter.js';
import { emptyTemplate } from './empty.js';
import { blogTemplate } from './blog.js';
import { ecommerceTemplate } from './ecommerce.js';
import { authTemplate } from './auth.js';

export * from './types.js';
export { starterTemplate, emptyTemplate, blogTemplate, ecommerceTemplate, authTemplate };

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
  return TEMPLATES[key] || (key === 'minimal' as any ? emptyTemplate : undefined);
}
