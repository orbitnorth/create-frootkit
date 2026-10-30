# create-frootkit

> Official dedicated scaffolder CLI for [FrootKit](https://github.com/orbitnorth/frootkit) — The Zero-Overhead Next.js Alternative.

[![npm version](https://img.shields.io/npm/v/create-frootkit.svg)](https://www.npmjs.com/package/create-frootkit)
[![license](https://img.shields.io/npm/l/create-frootkit.svg)](https://github.com/orbitnorth/create-frootkit/blob/main/LICENSE)

---

## ⚡ Usage

Scaffold a production-ready FrootKit application in seconds:

```bash
# Using npm
npm create frootkit@latest my-app

# Using pnpm
pnpm create frootkit my-app

# Using bun
bun create frootkit my-app
```

### Options

| Flag | Description | Default |
| :--- | :--- | :--- |
| `<directory>` | Target project directory | `.` |
| `--name <name>` | Project package name | Directory name |
| `--pm <manager>` | Package manager (`npm`, `pnpm`, `bun`, `yarn`) | Auto-detected |
| `--git` / `--no-git` | Initialize git repository | `--git` |
| `--install` / `--no-install` | Auto-install dependencies | Prompt |
| `-y`, `--yes` | Skip prompts and use defaults | `false` |

---

## 📄 License

MIT © [OrbitNorth LLC](https://github.com/orbitnorth)

