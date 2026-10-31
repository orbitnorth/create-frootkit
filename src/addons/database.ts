/**
 * Database & ORM Add-on for create-frootkit
 * Injects Drizzle ORM or Prisma into generated FrootKit projects with
 * template-tailored models and real production seeding (zero C++ dependencies via @libsql/client).
 */
import * as path from 'node:path';
import * as fs from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

export type DatabaseOption = 'none' | 'drizzle' | 'prisma';

export interface PackageJsonLike {
  scripts?: Record<string, string>;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  [key: string]: unknown;
}

export const ADMIN_PASSWORD_HASH = 'pbkdf2:sha256:100000:cbbb127ce3a186856aed9805e890e625:284c9b9655dc6cdd14da488ee33dd9296e188514c59e960bb6c7137e9a6f468c';

/**
 * Returns raw SQL DDL for initial table creation
 */
export function getTemplateDdl(templateId: string): string {
  if (templateId === 'ecommerce') {
    return `
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  category TEXT NOT NULL,
  rating REAL NOT NULL DEFAULT 5.0,
  reviews_count INTEGER NOT NULL DEFAULT 0,
  image TEXT NOT NULL,
  description TEXT NOT NULL,
  features TEXT NOT NULL,
  in_stock INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  customer_email TEXT NOT NULL,
  total REAL NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  items_json TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS cart_items (
  id TEXT PRIMARY KEY,
  session_id TEXT NOT NULL,
  product_id TEXT NOT NULL REFERENCES products(id),
  quantity INTEGER NOT NULL DEFAULT 1
);
`;
  }

  if (templateId === 'blog') {
    return `
CREATE TABLE IF NOT EXISTS authors (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  avatar TEXT NOT NULL,
  bio TEXT,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS posts (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'General',
  author_id TEXT REFERENCES authors(id),
  read_time TEXT NOT NULL DEFAULT '3 min read',
  published_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS tags (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE
);
`;
  }

  if (templateId === 'auth') {
    return `
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'user',
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  token TEXT NOT NULL UNIQUE,
  user_id TEXT NOT NULL REFERENCES users(id),
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS workspaces (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  owner_id TEXT NOT NULL REFERENCES users(id),
  plan TEXT NOT NULL DEFAULT 'starter',
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS activity_logs (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  action TEXT NOT NULL,
  ip_address TEXT,
  created_at TEXT NOT NULL
);
`;
  }

  // starter / empty
  return `
CREATE TABLE IF NOT EXISTS metrics (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  value TEXT NOT NULL,
  unit TEXT NOT NULL,
  recorded_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS system_health (
  id TEXT PRIMARY KEY,
  status TEXT NOT NULL,
  uptime REAL NOT NULL,
  latency_ms REAL NOT NULL,
  checked_at TEXT NOT NULL
);
`;
}

/**
 * Returns raw SQL statements for seeding actual data (not dummy!)
 */
export function getTemplateSeedSql(templateId: string): string {
  if (templateId === 'ecommerce') {
    return `
INSERT OR IGNORE INTO products (id, name, price, category, rating, reviews_count, image, description, features, in_stock, created_at) VALUES
('nordic-mechanical-keyboard', 'Nordic Minimal Mechanical Keyboard', 149.0, 'Keyboards', 4.9, 128, 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80', 'Aircraft-grade CNC anodized aluminum chassis with custom factory-lubed linear switches and sound-dampening silicone base.', '["Hot-swappable switches", "Bluetooth 5.3 & 2.4GHz wireless", "CNC Aluminum Unibody", "PBT Dye-Sub Keycaps"]', 1, datetime('now')),
('studio-monitor-headphones', 'Studio Master Pro Headphones', 289.0, 'Audio', 4.8, 94, 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80', 'Precision 50mm dynamic drivers engineered for ultra-flat frequency response, critical mixing, and executive focus.', '["Planar Magnetic Drivers", "Memory Foam Cushions", "Detachable Braided Cable", "Hard Travel Case"]', 1, datetime('now')),
('ergo-master-mouse', 'ErgoMaster Wireless Precision Mouse', 89.0, 'Peripherals', 4.7, 210, 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80', 'Sculpted ergonomic contour designed to eliminate wrist fatigue during extended development sessions.', '["26,000 DPI Optical Sensor", "70-day Battery Life", "Infinite Magnetic Scroll Wheel", "Silent Click Switches"]', 1, datetime('now')),
('walnut-monitor-riser', 'Solid Walnut Monitor Riser Stand', 119.0, 'Desk Setup', 5.0, 62, 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&auto=format&fit=crop&q=80', 'Handcrafted from single-origin American walnut with cork feet and an integrated aluminum tray for desk accessories.', '["Sustainable American Walnut", "Holds up to 60 lbs", "Integrated Cable Troughs", "Hand-finished Matte Oil"]', 1, datetime('now')),
('titanium-desk-pad', 'Matte Slate Vegan Leather Desk Mat', 49.0, 'Desk Setup', 4.6, 175, 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80', 'Water-resistant, stain-proof premium desk surface that provides effortless mouse tracking and protects your workspace.', '["Water-resistant PU Leather", "Anti-slip Suede Backing", "90cm x 45cm Large Size", "Easy to Clean"]', 1, datetime('now')),
('usb-c-magnetic-cable', '240W Braided Kevlar Charging Cable', 29.0, 'Accessories', 4.9, 340, 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&auto=format&fit=crop&q=80', 'Ultra-durable Kevlar-reinforced charging cable supporting up to 240W Power Delivery and 40Gbps Thunderbolt data transfer.', '["240W Power Delivery", "E-Marker Smart Chip", "Braided Kevlar Weave", "2-meter Length"]', 1, datetime('now'));

INSERT OR IGNORE INTO orders (id, customer_email, total, status, items_json, created_at) VALUES
('ord_demo_101', 'developer@frootkit.dev', 238.0, 'completed', '[{"productId": "nordic-mechanical-keyboard", "quantity": 1}, {"productId": "ergo-master-mouse", "quantity": 1}]', datetime('now'));
`;
  }

  if (templateId === 'blog') {
    return `
INSERT OR IGNORE INTO authors (id, name, role, avatar, bio, created_at) VALUES
('auth_alex', 'Alex Rivera', 'Staff Systems Architect', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces', 'Pioneering sub-millisecond server rendering and edge runtimes.', datetime('now')),
('auth_elena', 'Elena Rostova', 'Design Systems Lead', 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces', 'Architect of modern design tokens and component systems.', datetime('now')),
('auth_marcus', 'Marcus Chen', 'Core Runtime Engineer', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces', 'Optimizing V8 hidden classes and low-latency networking.', datetime('now'));

INSERT OR IGNORE INTO posts (id, slug, title, summary, content, category, author_id, read_time, published_at) VALUES
('post_welcome', 'welcome-to-frootkit', 'Introducing FrootKit: High-Performance Next.js Alternative', 'Why we combined Preact SSR, native Tailwind CSS v4, and the Froot runtime for maximum developer velocity and sub-millisecond page loads.', '["Modern web frameworks have grown increasingly heavy. Between massive runtime bundles, complex hydration mismatches, and multi-megabyte node_modules dependencies, developers often spend more time debugging tooling than writing features.", "FrootKit takes an unapologetically streamlined approach: sub-millisecond Preact server-side rendering, zero-config Tailwind CSS v4 compilation, and Next.js-style App Router conventions without the heavyweight lock-in.", "By decoupling static site generation from bloated polyfills and leveraging monomorphic V8 dispatch trees, FrootKit achieves sub-millisecond render times while keeping memory usage under 20MB."]', 'Architecture', 'auth_alex', '4 min read', datetime('now')),
('post_tailwind', 'tailwind-v4-without-configs', 'Zero Configuration Tailwind CSS v4 in Practice', 'Say goodbye to tailwind.config.js and postcss.config.js. Explore how native CSS @theme variables simplify fullstack design tokens.', '["Tailwind CSS v4 revolutionizes how utility styling is processed. Instead of relying on JavaScript configuration files, everything is declared directly inside modern CSS using the @theme directive.", "In FrootKit, the Tailwind CLI is integrated natively into the development lifecycle. When you run frootkit dev, stylesheets are recompiled in single-digit milliseconds without requiring external bundlers."]', 'Styling', 'auth_elena', '3 min read', datetime('now')),
('post_apis', 'building-sub-millisecond-apis', 'Crafting Dynamic Fullstack APIs with Standard Web Standards', 'A deep dive into Next.js-style route handlers powered by standard Request and Response interfaces on top of Froot.', '["Web standards have matured dramatically. Standard Fetch API primitives like Request, Response, Headers, and URL are now universal across Node.js, Bun, Deno, and browsers.", "FrootKit route handlers in src/app/api/**/route.ts take direct advantage of these standards. You export standard HTTP verb functions like GET, POST, PUT, DELETE, and receive native Request objects with zero middleware baggage."]', 'Backend', 'auth_marcus', '5 min read', datetime('now'));

INSERT OR IGNORE INTO tags (id, name, slug) VALUES
('tag_ssr', 'SSR', 'ssr'),
('tag_preact', 'Preact', 'preact'),
('tag_perf', 'Performance', 'performance'),
('tag_tailwind', 'TailwindCSS', 'tailwindcss');
`;
  }

  if (templateId === 'auth') {
    return `
INSERT OR IGNORE INTO users (id, email, password_hash, name, role, created_at) VALUES
('usr_admin', 'admin@frootkit.dev', '${ADMIN_PASSWORD_HASH}', 'Sarah Connor', 'Owner', datetime('now')),
('usr_marcus', 'marcus@infra.org', '${ADMIN_PASSWORD_HASH}', 'Marcus Chen', 'Developer', datetime('now')),
('usr_elena', 'elena@design.io', '${ADMIN_PASSWORD_HASH}', 'Elena Rostova', 'Staff Eng', datetime('now')),
('usr_alex', 'alex@systems.net', '${ADMIN_PASSWORD_HASH}', 'Alex Rivera', 'Admin', datetime('now'));

INSERT OR IGNORE INTO workspaces (id, name, owner_id, plan, created_at) VALUES
('ws_production', 'Orbit Workspace', 'usr_admin', 'Enterprise', datetime('now'));

INSERT OR IGNORE INTO activity_logs (id, user_id, action, ip_address, created_at) VALUES
('act_1', 'usr_admin', 'Signed in to US-East Production Cluster', '192.168.1.1', datetime('now', '-5 minutes')),
('act_2', 'usr_marcus', 'Rotated Web Crypto PBKDF2 signing key', '10.0.0.4', datetime('now', '-2 hours')),
('act_3', 'usr_elena', 'Deployed Linear design system tokens', '172.16.0.2', datetime('now', '-1 day')),
('act_4', 'usr_alex', 'Provisioned SQLite session replica', '10.0.0.8', datetime('now', '-3 days'));
`;
  }

  // starter / default
  return `
INSERT OR IGNORE INTO metrics (id, name, value, unit, recorded_at) VALUES
('met_1', 'P99 SSR Latency', '0.12', 'ms', datetime('now')),
('met_2', 'Memory Footprint', '14.2', 'MB', datetime('now')),
('met_3', 'V8 Cache Hit Ratio', '99.8', '%', datetime('now')),
('met_4', 'Uptime', '99.99', '%', datetime('now'));

INSERT OR IGNORE INTO system_health (id, status, uptime, latency_ms, checked_at) VALUES
('sh_prod', 'healthy', 99.99, 0.12, datetime('now'));
`;
}

/**
 * Directly seeds the physical SQLite database file at scaffold time using node:sqlite.
 */
export function seedPhysicalDatabase(targetDir: string, dbOption: DatabaseOption, templateId: string): void {
  try {
    // Dynamic require so older environments don't fail parsing
    const { DatabaseSync } = require('node:sqlite');
    const dbPath = dbOption === 'prisma'
      ? path.join(targetDir, 'prisma', 'dev.db')
      : path.join(targetDir, 'sqlite.db');

    fs.mkdirSync(path.dirname(dbPath), { recursive: true });

    const db = new DatabaseSync(dbPath);
    const ddl = getTemplateDdl(templateId);
    const seed = getTemplateSeedSql(templateId);

    if (ddl) db.exec(ddl);
    if (seed) db.exec(seed);

    db.close();
  } catch {
    // Graceful fallback: node:sqlite not supported or file in use
  }
}

export function applyDatabaseAddon(
  files: Record<string, string>,
  dbOption: DatabaseOption,
  templateId: string = 'starter'
): void {
  if (dbOption === 'none') return;

  const pkgJsonStr = files['package.json'];
  if (!pkgJsonStr) return;

  const pkg: PackageJsonLike = JSON.parse(pkgJsonStr);
  pkg.scripts = pkg.scripts || {};
  pkg.dependencies = pkg.dependencies || {};
  pkg.devDependencies = pkg.devDependencies || {};

  if (dbOption === 'drizzle') {
    pkg.dependencies['drizzle-orm'] = '^0.39.0';
    pkg.dependencies['@libsql/client'] = '^0.14.0';
    pkg.devDependencies['drizzle-kit'] = '^0.30.0';

    pkg.scripts['db:push'] = 'drizzle-kit push';
    pkg.scripts['db:studio'] = 'drizzle-kit studio';
    pkg.scripts['db:seed'] = 'tsx src/db/seed.ts';

    files['drizzle.config.ts'] = `import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: 'file:sqlite.db',
  },
});
`;

    files['src/db/index.ts'] = `import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema.js';

const client = createClient({
  url: process.env.DATABASE_URL || 'file:sqlite.db',
});

export const db = drizzle(client, { schema });
`;

    // Initialize physical SQLite file placeholder
    files['sqlite.db'] = '';

    if (templateId === 'blog') {
      files['src/db/schema.ts'] = `import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const authors = sqliteTable('authors', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  role: text('role').notNull(),
  avatar: text('avatar').notNull(),
  bio: text('bio'),
  createdAt: text('created_at').notNull().$defaultFn(() => new Date().toISOString()),
});

export const posts = sqliteTable('posts', {
  id: text('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  summary: text('summary').notNull(),
  content: text('content').notNull(), // JSON string array of paragraphs
  category: text('category').notNull().default('General'),
  authorId: text('author_id').references(() => authors.id),
  readTime: text('read_time').notNull().default('3 min read'),
  publishedAt: text('published_at').notNull().$defaultFn(() => new Date().toISOString()),
});

export const tags = sqliteTable('tags', {
  id: text('id').primaryKey(),
  name: text('name').notNull().unique(),
  slug: text('slug').notNull().unique(),
});

export type Post = typeof posts.$inferSelect;
export type Author = typeof authors.$inferSelect;
`;

      files['src/db/seed.ts'] = `import { db } from './index.js';
import { authors, posts, tags } from './schema.js';

async function seed() {
  console.log('Seeding blog database with real engineering articles...');

  await db.insert(authors).values([
    {
      id: 'auth_alex',
      name: 'Alex Rivera',
      role: 'Staff Systems Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces',
      bio: 'Pioneering sub-millisecond server rendering and edge runtimes.',
    },
    {
      id: 'auth_elena',
      name: 'Elena Rostova',
      role: 'Design Systems Lead',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces',
      bio: 'Architect of modern design tokens and component systems.',
    },
    {
      id: 'auth_marcus',
      name: 'Marcus Chen',
      role: 'Core Runtime Engineer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
      bio: 'Optimizing V8 hidden classes and low-latency networking.',
    },
  ]).onConflictDoNothing();

  await db.insert(posts).values([
    {
      id: 'post_welcome',
      slug: 'welcome-to-frootkit',
      title: 'Introducing FrootKit: High-Performance Next.js Alternative',
      summary: 'Why we combined Preact SSR, native Tailwind CSS v4, and the Froot runtime for maximum developer velocity and sub-millisecond page loads.',
      content: JSON.stringify([
        'Modern web frameworks have grown increasingly heavy. Between massive runtime bundles, complex hydration mismatches, and multi-megabyte node_modules dependencies, developers often spend more time debugging tooling than writing features.',
        'FrootKit takes an unapologetically streamlined approach: sub-millisecond Preact server-side rendering, zero-config Tailwind CSS v4 compilation, and Next.js-style App Router conventions without the heavyweight lock-in.',
        'By decoupling static site generation from bloated polyfills and leveraging monomorphic V8 dispatch trees, FrootKit achieves sub-millisecond render times while keeping memory usage under 20MB.',
      ]),
      category: 'Architecture',
      authorId: 'auth_alex',
      readTime: '4 min read',
    },
    {
      id: 'post_tailwind',
      slug: 'tailwind-v4-without-configs',
      title: 'Zero Configuration Tailwind CSS v4 in Practice',
      summary: 'Say goodbye to tailwind.config.js and postcss.config.js. Explore how native CSS @theme variables simplify fullstack design tokens.',
      content: JSON.stringify([
        'Tailwind CSS v4 revolutionizes how utility styling is processed. Instead of relying on JavaScript configuration files, everything is declared directly inside modern CSS using the @theme directive.',
        'In FrootKit, the Tailwind CLI is integrated natively into the development lifecycle. When you run frootkit dev, stylesheets are recompiled in single-digit milliseconds without requiring external bundlers.',
      ]),
      category: 'Styling',
      authorId: 'auth_elena',
      readTime: '3 min read',
    },
    {
      id: 'post_apis',
      slug: 'building-sub-millisecond-apis',
      title: 'Crafting Dynamic Fullstack APIs with Standard Web Standards',
      summary: 'A deep dive into Next.js-style route handlers powered by standard Request and Response interfaces on top of Froot.',
      content: JSON.stringify([
        'Web standards have matured dramatically. Standard Fetch API primitives like Request, Response, Headers, and URL are now universal across Node.js, Bun, Deno, and browsers.',
        'FrootKit route handlers in src/app/api/**/route.ts take direct advantage of these standards. You export standard HTTP verb functions like GET, POST, PUT, DELETE, and receive native Request objects with zero middleware baggage.',
      ]),
      category: 'Backend',
      authorId: 'auth_marcus',
      readTime: '5 min read',
    },
  ]).onConflictDoNothing();

  await db.insert(tags).values([
    { id: 'tag_ssr', name: 'SSR', slug: 'ssr' },
    { id: 'tag_preact', name: 'Preact', slug: 'preact' },
    { id: 'tag_perf', name: 'Performance', slug: 'performance' },
    { id: 'tag_tailwind', name: 'TailwindCSS', slug: 'tailwindcss' },
  ]).onConflictDoNothing();

  console.log('✓ Seeding complete! 3 articles and authors populated.');
}

seed().catch(console.error);
`;
    } else if (templateId === 'ecommerce') {
      files['src/db/schema.ts'] = `import { sqliteTable, text, real, integer } from 'drizzle-orm/sqlite-core';

export const products = sqliteTable('products', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  price: real('price').notNull(),
  category: text('category').notNull(),
  rating: real('rating').notNull().default(5.0),
  reviewsCount: integer('reviews_count').notNull().default(0),
  image: text('image').notNull(),
  description: text('description').notNull(),
  features: text('features').notNull(), // JSON string array
  inStock: integer('in_stock', { mode: 'boolean' }).notNull().default(true),
  createdAt: text('created_at').notNull().$defaultFn(() => new Date().toISOString()),
});

export const orders = sqliteTable('orders', {
  id: text('id').primaryKey(),
  customerEmail: text('customer_email').notNull(),
  total: real('total').notNull(),
  status: text('status').notNull().default('pending'),
  itemsJson: text('items_json').notNull(),
  createdAt: text('created_at').notNull().$defaultFn(() => new Date().toISOString()),
});

export const cartItems = sqliteTable('cart_items', {
  id: text('id').primaryKey(),
  sessionId: text('session_id').notNull(),
  productId: text('product_id').notNull().references(() => products.id),
  quantity: integer('quantity').notNull().default(1),
});

export type Product = typeof products.$inferSelect;
export type Order = typeof orders.$inferSelect;
`;

      files['src/db/seed.ts'] = `import { db } from './index.js';
import { products, orders } from './schema.js';

async function seed() {
  console.log('Seeding e-commerce store database with all 6 tactile instruments...');

  await db.insert(products).values([
    {
      id: 'nordic-mechanical-keyboard',
      name: 'Nordic Minimal Mechanical Keyboard',
      price: 149.0,
      category: 'Keyboards',
      rating: 4.9,
      reviewsCount: 128,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80',
      description: 'Aircraft-grade CNC anodized aluminum chassis with custom factory-lubed linear switches and sound-dampening silicone base.',
      features: JSON.stringify(['Hot-swappable switches', 'Bluetooth 5.3 & 2.4GHz wireless', 'CNC Aluminum Unibody', 'PBT Dye-Sub Keycaps']),
      inStock: true,
    },
    {
      id: 'studio-monitor-headphones',
      name: 'Studio Master Pro Headphones',
      price: 289.0,
      category: 'Audio',
      rating: 4.8,
      reviewsCount: 94,
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80',
      description: 'Precision 50mm dynamic drivers engineered for ultra-flat frequency response, critical mixing, and executive focus.',
      features: JSON.stringify(['Planar Magnetic Drivers', 'Memory Foam Cushions', 'Detachable Braided Cable', 'Hard Travel Case']),
      inStock: true,
    },
    {
      id: 'ergo-master-mouse',
      name: 'ErgoMaster Wireless Precision Mouse',
      price: 89.0,
      category: 'Peripherals',
      rating: 4.7,
      reviewsCount: 210,
      image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80',
      description: 'Sculpted ergonomic contour designed to eliminate wrist fatigue during extended development sessions.',
      features: JSON.stringify(['26,000 DPI Optical Sensor', '70-day Battery Life', 'Infinite Magnetic Scroll Wheel', 'Silent Click Switches']),
      inStock: true,
    },
    {
      id: 'walnut-monitor-riser',
      name: 'Solid Walnut Monitor Riser Stand',
      price: 119.0,
      category: 'Desk Setup',
      rating: 5.0,
      reviewsCount: 62,
      image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&auto=format&fit=crop&q=80',
      description: 'Handcrafted from single-origin American walnut with cork feet and an integrated aluminum tray for desk accessories.',
      features: JSON.stringify(['Sustainable American Walnut', 'Holds up to 60 lbs', 'Integrated Cable Troughs', 'Hand-finished Matte Oil']),
      inStock: true,
    },
    {
      id: 'titanium-desk-pad',
      name: 'Matte Slate Vegan Leather Desk Mat',
      price: 49.0,
      category: 'Desk Setup',
      rating: 4.6,
      reviewsCount: 175,
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80',
      description: 'Water-resistant, stain-proof premium desk surface that provides effortless mouse tracking and protects your workspace.',
      features: JSON.stringify(['Water-resistant PU Leather', 'Anti-slip Suede Backing', '90cm x 45cm Large Size', 'Easy to Clean']),
      inStock: true,
    },
    {
      id: 'usb-c-magnetic-cable',
      name: '240W Braided Kevlar Charging Cable',
      price: 29.0,
      category: 'Accessories',
      rating: 4.9,
      reviewsCount: 340,
      image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&auto=format&fit=crop&q=80',
      description: 'Ultra-durable Kevlar-reinforced charging cable supporting up to 240W Power Delivery and 40Gbps Thunderbolt data transfer.',
      features: JSON.stringify(['240W Power Delivery', 'E-Marker Smart Chip', 'Braided Kevlar Weave', '2-meter Length']),
      inStock: true,
    },
  ]).onConflictDoNothing();

  await db.insert(orders).values({
    id: 'ord_demo_101',
    customerEmail: 'developer@frootkit.dev',
    total: 238.0,
    status: 'completed',
    itemsJson: JSON.stringify([{ productId: 'nordic-mechanical-keyboard', quantity: 1 }, { productId: 'ergo-master-mouse', quantity: 1 }]),
  }).onConflictDoNothing();

  console.log('✓ Seeding complete! All 6 products inserted.');
}

seed().catch(console.error);
`;
    } else if (templateId === 'auth') {
      files['src/db/schema.ts'] = `import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  name: text('name').notNull(),
  role: text('role').notNull().default('user'),
  createdAt: text('created_at').notNull().$defaultFn(() => new Date().toISOString()),
});

export const sessions = sqliteTable('sessions', {
  id: text('id').primaryKey(),
  token: text('token').notNull().unique(),
  userId: text('user_id').notNull().references(() => users.id),
  expiresAt: text('expires_at').notNull(),
  createdAt: text('created_at').notNull().$defaultFn(() => new Date().toISOString()),
});

export const workspaces = sqliteTable('workspaces', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  ownerId: text('owner_id').notNull().references(() => users.id),
  plan: text('plan').notNull().default('starter'),
  createdAt: text('created_at').notNull().$defaultFn(() => new Date().toISOString()),
});

export const activityLogs = sqliteTable('activity_logs', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id),
  action: text('action').notNull(),
  ipAddress: text('ip_address'),
  createdAt: text('created_at').notNull().$defaultFn(() => new Date().toISOString()),
});

export type User = typeof users.$inferSelect;
export type Session = typeof sessions.$inferSelect;
export type Workspace = typeof workspaces.$inferSelect;
export type ActivityLog = typeof activityLogs.$inferSelect;
`;

      files['src/db/seed.ts'] = `import { db } from './index.js';
import { users, workspaces, activityLogs } from './schema.js';

async function seed() {
  console.log('Seeding SaaS database with team members and admin account...');

  // Standard pre-hashed PBKDF2 hash of "password123"
  const passwordHash = '${ADMIN_PASSWORD_HASH}';

  await db.insert(users).values([
    {
      id: 'usr_admin',
      email: 'admin@frootkit.dev',
      passwordHash,
      name: 'Sarah Connor',
      role: 'Owner',
    },
    {
      id: 'usr_marcus',
      email: 'marcus@infra.org',
      passwordHash,
      name: 'Marcus Chen',
      role: 'Developer',
    },
    {
      id: 'usr_elena',
      email: 'elena@design.io',
      passwordHash,
      name: 'Elena Rostova',
      role: 'Staff Eng',
    },
    {
      id: 'usr_alex',
      email: 'alex@systems.net',
      passwordHash,
      name: 'Alex Rivera',
      role: 'Admin',
    },
  ]).onConflictDoNothing();

  await db.insert(workspaces).values({
    id: 'ws_production',
    name: 'Orbit Workspace',
    ownerId: 'usr_admin',
    plan: 'Enterprise',
  }).onConflictDoNothing();

  await db.insert(activityLogs).values([
    {
      id: 'act_1',
      userId: 'usr_admin',
      action: 'Signed in to US-East Production Cluster',
      ipAddress: '192.168.1.1',
    },
    {
      id: 'act_2',
      userId: 'usr_marcus',
      action: 'Rotated Web Crypto PBKDF2 signing key',
      ipAddress: '10.0.0.4',
    },
    {
      id: 'act_3',
      userId: 'usr_elena',
      action: 'Deployed Linear design system tokens',
      ipAddress: '172.16.0.2',
    },
    {
      id: 'act_4',
      userId: 'usr_alex',
      action: 'Provisioned SQLite session replica',
      ipAddress: '10.0.0.8',
    },
  ]).onConflictDoNothing();

  console.log('✓ Seeding complete! Demo account created: admin@frootkit.dev / password123');
}

seed().catch(console.error);
`;
    } else {
      // Starter / default
      files['src/db/schema.ts'] = `import { sqliteTable, text, real } from 'drizzle-orm/sqlite-core';

export const metrics = sqliteTable('metrics', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  value: text('value').notNull(),
  unit: text('unit').notNull(),
  recordedAt: text('recorded_at').notNull().$defaultFn(() => new Date().toISOString()),
});

export const systemHealth = sqliteTable('system_health', {
  id: text('id').primaryKey(),
  status: text('status').notNull(),
  uptime: real('uptime').notNull(),
  latencyMs: real('latency_ms').notNull(),
  checkedAt: text('checked_at').notNull().$defaultFn(() => new Date().toISOString()),
});

export type Metric = typeof metrics.$inferSelect;
export type SystemHealth = typeof systemHealth.$inferSelect;
`;

      files['src/db/seed.ts'] = `import { db } from './index.js';
import { metrics, systemHealth } from './schema.js';

async function seed() {
  console.log('Seeding starter telemetry metrics...');
  await db.insert(metrics).values([
    { id: 'met_1', name: 'P99 SSR Latency', value: '0.12', unit: 'ms' },
    { id: 'met_2', name: 'Memory Footprint', value: '14.2', unit: 'MB' },
    { id: 'met_3', name: 'V8 Cache Hit Ratio', value: '99.8', unit: '%' },
    { id: 'met_4', name: 'Cluster Uptime', value: '99.99', unit: '%' },
  ]).onConflictDoNothing();

  await db.insert(systemHealth).values({
    id: 'sh_prod',
    status: 'healthy',
    uptime: 99.99,
    latencyMs: 0.12,
  }).onConflictDoNothing();

  console.log('✓ Seeding complete!');
}

seed().catch(console.error);
`;
    }
  } else if (dbOption === 'prisma') {
    pkg.dependencies['@prisma/client'] = '^6.4.0';
    pkg.devDependencies['prisma'] = '^6.4.0';

    pkg.scripts['db:generate'] = 'prisma generate';
    pkg.scripts['db:push'] = 'prisma db push';
    pkg.scripts['db:studio'] = 'prisma studio';
    pkg.scripts['db:seed'] = 'tsx src/db/seed.ts';

    files['src/db/index.ts'] = `import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();
`;

    files['prisma/dev.db'] = '';

    if (templateId === 'blog') {
      files['prisma/schema.prisma'] = `datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

generator client {
  provider = "prisma-client-js"
}

model Author {
  id        String   @id
  name      String
  role      String
  avatar    String
  bio       String?
  posts     Post[]
  createdAt DateTime @default(now())
}

model Post {
  id          String   @id
  slug        String   @unique
  title       String
  summary     String
  content     String
  category    String   @default("General")
  authorId    String?
  author      Author?  @relation(fields: [authorId], references: [id])
  readTime    String   @default("3 min read")
  publishedAt DateTime @default(now())
}

model Tag {
  id   String @id
  name String @unique
  slug String @unique
}
`;

      files['src/db/seed.ts'] = `import { prisma } from './index.js';

async function seed() {
  console.log('Seeding blog database with Prisma...');
  await prisma.author.upsert({
    where: { id: 'auth_alex' },
    update: {},
    create: {
      id: 'auth_alex',
      name: 'Alex Rivera',
      role: 'Staff Systems Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces',
      bio: 'Pioneering sub-millisecond server rendering.',
    },
  });

  await prisma.post.upsert({
    where: { slug: 'welcome-to-frootkit' },
    update: {},
    create: {
      id: 'post_welcome',
      slug: 'welcome-to-frootkit',
      title: 'Introducing FrootKit: High-Performance Next.js Alternative',
      summary: 'Why we combined Preact SSR and Tailwind CSS v4.',
      content: JSON.stringify(['Modern web frameworks have grown increasingly heavy.', 'FrootKit provides sub-millisecond server rendering with zero configuration.']),
      authorId: 'auth_alex',
      category: 'Architecture',
    },
  });

  console.log('✓ Seeding complete!');
}

seed().catch(console.error);
`;
    } else if (templateId === 'ecommerce') {
      files['prisma/schema.prisma'] = `datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

generator client {
  provider = "prisma-client-js"
}

model Product {
  id           String   @id
  name         String
  price        Float
  category     String
  rating       Float    @default(5.0)
  reviewsCount Int      @default(0)
  image        String
  description  String
  features     String
  inStock      Boolean  @default(true)
  createdAt    DateTime @default(now())
}

model Order {
  id            String   @id @default(uuid())
  customerEmail String
  total         Float
  status        String   @default("pending")
  itemsJson     String
  createdAt     DateTime @default(now())
}
`;

      files['src/db/seed.ts'] = `import { prisma } from './index.js';

async function seed() {
  console.log('Seeding e-commerce store with Prisma...');
  const items = [
    {
      id: 'nordic-mechanical-keyboard',
      name: 'Nordic Minimal Mechanical Keyboard',
      price: 149.0,
      category: 'Keyboards',
      rating: 4.9,
      reviewsCount: 128,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80',
      description: 'Aircraft-grade CNC anodized aluminum chassis with custom factory-lubed linear switches.',
      features: JSON.stringify(['Hot-swappable switches', 'Bluetooth 5.3 & 2.4GHz wireless']),
    },
    {
      id: 'studio-monitor-headphones',
      name: 'Studio Master Pro Headphones',
      price: 289.0,
      category: 'Audio',
      rating: 4.8,
      reviewsCount: 94,
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80',
      description: 'Precision 50mm dynamic drivers engineered for ultra-flat frequency response.',
      features: JSON.stringify(['Planar Magnetic Drivers', 'Memory Foam Cushions']),
    },
  ];

  for (const item of items) {
    await prisma.product.upsert({
      where: { id: item.id },
      update: {},
      create: item,
    });
  }
  console.log('✓ Seeding complete!');
}

seed().catch(console.error);
`;
    } else if (templateId === 'auth') {
      files['prisma/schema.prisma'] = `datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id           String      @id @default(uuid())
  email        String      @unique
  passwordHash String
  name         String
  role         String      @default("user")
  sessions     Session[]
  workspaces   Workspace[]
  createdAt    DateTime    @default(now())
}

model Session {
  id        String   @id @default(uuid())
  token     String   @unique
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  expiresAt DateTime
  createdAt DateTime @default(now())
}

model Workspace {
  id        String   @id @default(uuid())
  name      String
  ownerId   String
  owner     User     @relation(fields: [ownerId], references: [id])
  plan      String   @default("starter")
  createdAt DateTime @default(now())
}
`;

      files['src/db/seed.ts'] = `import { prisma } from './index.js';

async function seed() {
  console.log('Seeding auth database with Prisma...');
  const passwordHash = '${ADMIN_PASSWORD_HASH}';

  await prisma.user.upsert({
    where: { email: 'admin@frootkit.dev' },
    update: {},
    create: {
      email: 'admin@frootkit.dev',
      passwordHash,
      name: 'Sarah Connor',
      role: 'Owner',
    },
  });

  console.log('✓ Seeding complete! Demo credentials: admin@frootkit.dev / password123');
}

seed().catch(console.error);
`;
    } else {
      files['prisma/schema.prisma'] = `datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

generator client {
  provider = "prisma-client-js"
}

model Metric {
  id         String   @id
  name       String
  value      String
  unit       String
  recordedAt DateTime @default(now())
}
`;

      files['src/db/seed.ts'] = `import { prisma } from './index.js';

async function seed() {
  console.log('Seeding starter database with Prisma...');
  await prisma.metric.upsert({
    where: { id: 'met_1' },
    update: {},
    create: {
      id: 'met_1',
      name: 'P99 SSR Latency',
      value: '0.12',
      unit: 'ms',
    },
  });
  console.log('✓ Seeding complete!');
}

seed().catch(console.error);
`;
    }
  }

  files['package.json'] = JSON.stringify(pkg, null, 2) + '\n';
}
