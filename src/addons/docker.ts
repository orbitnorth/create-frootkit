/**
 * Docker Containerization Add-on for create-frootkit
 * Multi-stage Dockerfile and docker-compose setup for FrootKit applications.
 */

export function applyDockerAddon(
  files: Record<string, string>,
  pkgManager: 'pnpm' | 'npm' | 'yarn' | 'bun' = 'npm'
): void {
  const installCmd =
    pkgManager === 'pnpm'
      ? 'pnpm install --frozen-lockfile'
      : pkgManager === 'bun'
        ? 'bun install --frozen-lockfile'
        : pkgManager === 'yarn'
          ? 'yarn install --frozen-lockfile'
          : 'npm ci';

  files['Dockerfile'] = `# Multi-stage Dockerfile for FrootKit Application
FROM node:22-alpine AS builder
WORKDIR /app

COPY package*.json ./
${pkgManager === 'pnpm' ? 'RUN npm install -g pnpm && pnpm install --frozen-lockfile' : `RUN ${installCmd}`}

COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

COPY package*.json ./
${pkgManager === 'pnpm' ? 'RUN npm install -g pnpm && pnpm install --prod' : 'RUN npm ci --omit=dev'}
COPY --from=builder /app/.froot ./.froot
COPY --from=builder /app/dist ./dist 2>/dev/null || true
COPY --from=builder /app/src ./src

EXPOSE 3000
CMD ["npm", "run", "start"]
`;

  files['docker-compose.yml'] = `services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
    restart: unless-stopped
`;

  files['.dockerignore'] = `node_modules
.froot
dist
.git
*.log
`;
}

