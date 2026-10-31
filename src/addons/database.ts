/**
 * Database & ORM Add-on for create-frootkit
 * Injects Drizzle ORM or Prisma into generated FrootKit projects with
 * template-tailored models and seeding (zero C++ dependencies via @libsql/client).
 */

export type DatabaseOption = 'none' | 'drizzle' | 'prisma';

export interface PackageJsonLike {
  scripts?: Record<string, string>;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  [key: string]: unknown;
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

    // Initialize the visible SQLite database file inside the project root
    files['sqlite.db'] = '';

    if (templateId === 'blog') {
      files['src/db/schema.ts'] = `import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

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
  content: text('content').notNull(), // JSON string or markdown
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
  console.log('Seeding blog database...');

  const authorId = 'auth_alex';
  await db.insert(authors).values({
    id: authorId,
    name: 'Alex Rivera',
    role: 'Staff Systems Architect',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    bio: 'Pioneering sub-millisecond server rendering and edge runtimes.',
  }).onConflictDoNothing();

  await db.insert(posts).values([
    {
      id: 'post_1',
      slug: 'welcome-to-frootkit',
      title: 'Introducing FrootKit: High-Performance Next.js Alternative',
      summary: 'Why we combined Preact SSR, native Tailwind CSS v4, and the Froot runtime for maximum velocity.',
      content: JSON.stringify([
        'Modern web frameworks have grown increasingly heavy.',
        'FrootKit provides sub-millisecond server rendering with zero configuration.',
      ]),
      category: 'Architecture',
      authorId,
      readTime: '4 min read',
    },
    {
      id: 'post_2',
      slug: 'tailwind-v4-without-configs',
      title: 'Zero Configuration Tailwind CSS v4 in Practice',
      summary: 'Explore how native CSS @theme variables simplify fullstack design tokens.',
      content: JSON.stringify([
        'Tailwind CSS v4 redefines utility styling directly inside CSS without js config files.',
      ]),
      category: 'Styling',
      authorId,
      readTime: '3 min read',
    },
  ]).onConflictDoNothing();

  console.log('✓ Seeding complete!');
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
import { products } from './schema.js';

async function seed() {
  console.log('Seeding e-commerce store database...');

  await db.insert(products).values([
    {
      id: 'nordic-mechanical-keyboard',
      name: 'Nordic Minimal Mechanical Keyboard',
      price: 149.0,
      category: 'Keyboards',
      rating: 4.9,
      reviewsCount: 128,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=450&fit=crop',
      description: 'Aircraft-grade anodized aluminum body with custom hot-swappable linear switches.',
      features: JSON.stringify(['Hot-swappable switches', 'Bluetooth 5.3', 'CNC Aluminum Chassis']),
      inStock: true,
    },
    {
      id: 'studio-monitor-headphones',
      name: 'Studio Master Pro Headphones',
      price: 289.0,
      category: 'Audio',
      rating: 4.8,
      reviewsCount: 94,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=450&fit=crop',
      description: 'Precision 50mm dynamic drivers engineered for ultra-flat frequency response.',
      features: JSON.stringify(['Planar Magnetic Sound', 'Memory Foam Cushions', 'Detachable Silver Cable']),
      inStock: true,
    },
  ]).onConflictDoNothing();

  console.log('✓ Seeding complete!');
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

export type User = typeof users.$inferSelect;
export type Session = typeof sessions.$inferSelect;
`;

      files['src/db/seed.ts'] = `import { db } from './index.js';
import { users, workspaces } from './schema.js';
import { hashPassword } from '../lib/auth.js';

async function seed() {
  console.log('Seeding SaaS database with demo user...');

  const passwordHash = await hashPassword('password123');
  const adminId = 'usr_admin_demo';

  await db.insert(users).values({
    id: adminId,
    email: 'admin@frootkit.dev',
    passwordHash,
    name: 'Sarah Connor',
    role: 'admin',
  }).onConflictDoNothing();

  await db.insert(workspaces).values({
    id: 'ws_demo_01',
    name: "Sarah's Production Workspace",
    ownerId: adminId,
    plan: 'enterprise',
  }).onConflictDoNothing();

  console.log('✓ Seeding complete! Demo account created: admin@frootkit.dev / password123');
}

seed().catch(console.error);
`;
    } else {
      // Starter / default
      files['src/db/schema.ts'] = `import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  role: text('role').notNull().default('user'),
  createdAt: text('created_at').notNull().$defaultFn(() => new Date().toISOString()),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
`;

      files['src/db/seed.ts'] = `import { db } from './index.js';
import { users } from './schema.js';

async function seed() {
  console.log('Seeding database...');
  await db.insert(users).values({
    id: 'usr_starter_1',
    name: 'Developer',
    email: 'developer@frootkit.dev',
    role: 'admin',
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

    // Initialize the visible Prisma SQLite database file inside prisma/ directory
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
  id        String   @id @default(uuid())
  name      String
  role      String
  avatar    String
  bio       String?
  posts     Post[]
  createdAt DateTime @default(now())
}

model Post {
  id          String   @id @default(uuid())
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
  id   String @id @default(uuid())
  name String @unique
  slug String @unique
}
`;

      files['src/db/seed.ts'] = `import { prisma } from './index.js';

async function seed() {
  console.log('Seeding blog database with Prisma...');
  const author = await prisma.author.upsert({
    where: { id: 'auth_alex' },
    update: {},
    create: {
      id: 'auth_alex',
      name: 'Alex Rivera',
      role: 'Staff Systems Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
      bio: 'Pioneering sub-millisecond server rendering.',
    },
  });

  await prisma.post.upsert({
    where: { slug: 'welcome-to-frootkit' },
    update: {},
    create: {
      slug: 'welcome-to-frootkit',
      title: 'Introducing FrootKit: High-Performance Next.js Alternative',
      summary: 'Why we combined Preact SSR and Tailwind CSS v4.',
      content: 'FrootKit provides sub-millisecond server rendering.',
      authorId: author.id,
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
  await prisma.product.upsert({
    where: { id: 'nordic-mechanical-keyboard' },
    update: {},
    create: {
      id: 'nordic-mechanical-keyboard',
      name: 'Nordic Minimal Mechanical Keyboard',
      price: 149.0,
      category: 'Keyboards',
      rating: 4.9,
      reviewsCount: 128,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=450&fit=crop',
      description: 'Aircraft-grade anodized aluminum body with custom hot-swappable linear switches.',
      features: '["Hot-swappable switches", "Bluetooth 5.3", "CNC Aluminum Chassis"]',
      inStock: true,
    },
  });
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
import { hashPassword } from '../lib/auth.js';

async function seed() {
  console.log('Seeding auth database with Prisma...');
  const passwordHash = await hashPassword('password123');

  await prisma.user.upsert({
    where: { email: 'admin@frootkit.dev' },
    update: {},
    create: {
      email: 'admin@frootkit.dev',
      passwordHash,
      name: 'Sarah Connor',
      role: 'admin',
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

model User {
  id        String   @id @default(uuid())
  email     String   @unique
  name      String
  role      String   @default("user")
  createdAt DateTime @default(now())
}
`;

      files['src/db/seed.ts'] = `import { prisma } from './index.js';

async function seed() {
  console.log('Seeding starter database with Prisma...');
  await prisma.user.upsert({
    where: { email: 'developer@frootkit.dev' },
    update: {},
    create: {
      email: 'developer@frootkit.dev',
      name: 'Developer',
      role: 'admin',
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
