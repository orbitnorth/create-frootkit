# create-frootkit

> Official dedicated scaffolder CLI for [FrootKit](https://github.com/orbitnorth/frootkit) — The Zero-Overhead Next.js Alternative for Preact.

[![npm version](https://img.shields.io/npm/v/create-frootkit.svg)](https://www.npmjs.com/package/create-frootkit)
[![license](https://img.shields.io/npm/l/create-frootkit.svg)](https://github.com/orbitnorth/create-frootkit/blob/main/LICENSE)

---

## ⚡ Quick Start

Scaffold a production-ready FrootKit application interactively or via CLI flags:

```bash
# Using npm
npm create frootkit@latest

# Using pnpm (recommended)
pnpm create frootkit

# Using bun
bun create frootkit

# Using npx
npx create-frootkit my-app --template blog --db drizzle
```

---

## 🎨 Official Templates

`create-frootkit` comes with 5 production-ready templates organized in modular directories with polished component architecture and responsive Tailwind CSS v4 styling:

| Template | Flag | Description |
| :--- | :--- | :--- |
| **Starter** *(Recommended)* | `--template starter` | Full developer showcase with hero section, feature cards, and `/api/health` route. |
| **Blog & Content** | `--template blog` | High-performance engineering journal with dynamic `[slug]` pages, post cards, author bios, and `/api/posts` search API. |
| **E-Commerce Store** | `--template ecommerce` | Digital storefront with product catalog, dynamic `[id]` detail pages, shopping cart view, and `/api/checkout` API. |
| **SaaS & Authentication** | `--template auth` | Complete SaaS platform with Web Crypto PBKDF2 password hashing, secure session tokens, login/signup forms, and protected `/dashboard` layout. |
| **Minimal Canvas** | `--template empty` | Clean, blank slate with Preact SSR and Tailwind CSS for custom architectures. |

---

## 🗄️ Database & ORM Integrations

Choose your database layer with zero native compilation dependencies (`@libsql/client`):

- **Drizzle ORM (`--db drizzle`):** Tailored TypeScript schema (`posts`, `products`, `users`, `sessions`), migrations, Drizzle Studio, and seeding scripts (`pnpm db:seed`).
- **Prisma (`--db prisma`):** Declarative `prisma/schema.prisma` with matching models, client generation, and seeding.
- **None (`--db none`):** In-memory mock stores and zero setup required.

---

## ⚙️ CLI Options & Flags

| Flag | Shorthand | Description | Default |
| :--- | :--- | :--- | :--- |
| `--template <name>` | `-t <name>` | Template (`starter`, `blog`, `ecommerce`, `auth`, `empty`) | `starter` |
| `--pm <manager>` | | Package manager (`pnpm`, `npm`, `bun`, `yarn`) | Prompt |
| `--db <orm>` | | Database ORM (`none`, `drizzle`, `prisma`) | `none` |
| `--linter <tool>` | | Code quality tool (`none`, `biome`, `eslint`) | `none` |
| `--docker` / `--no-docker` | | Multi-stage Docker container setup | `false` |
| `--agent` / `--no-agent` | | AI coding guidelines (`AGENT.md` & `.cursorrules`) | `true` |
| `--git` / `--no-git` | | Initialize Git repository | `true` |
| `--install` / `--no-install` | | Automatically install dependencies | Prompt |
| `--schema` | | Output machine-readable JSON schema for AI agents | |
| `-y`, `--yes` | | Accept all defaults non-interactively | `false` |
| `-v`, `--version` | | Display version | |
| `-h`, `--help` | | Display help documentation | |

---

## 📄 License

MIT © [OrbitNorth LLC](https://github.com/orbitnorth)
