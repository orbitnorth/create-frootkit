# {{PROJECT_NAME}} — SaaS & Authentication

Fullstack SaaS starter with real Web Crypto password hashing, session tokens, login, signup, and protected dashboard.

## 🚀 Features

- **Real Password Hashing:** PBKDF2 (100,000 rounds, HMAC-SHA256) via pure Web Crypto API (zero external C++ dependencies).
- **Session Authentication:** Cryptographically secure session tokens, cookie handling, and validation.
- **Next.js-style API Route:** `src/app/api/auth/route.ts` handling login, signup, logout, and session check.
- **Protected Dashboard Layout:** Nested `layout.tsx` and `page.tsx` in `src/app/dashboard/`.
- **Database Ready:** Seamless integration with Drizzle ORM (@libsql/client) or Prisma!
