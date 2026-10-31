import { webcrypto } from 'node:crypto';

const crypto = globalThis.crypto || webcrypto;

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  createdAt: string;
}

export interface Session {
  id: string;
  token: string;
  userId: string;
  expiresAt: string;
}

// In-memory fallback stores (used when no database is attached)
const USERS_STORE = new Map<string, { user: User; passwordHash: string }>();
const SESSIONS_STORE = new Map<string, Session>();

/**
 * Derives a PBKDF2 HMAC-SHA256 password hash using the standard Web Crypto API.
 * Format: pbkdf2:sha256:100000:<saltHex>:<hashHex>
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits']
  );

  const iterations = 100000;
  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt,
      iterations,
      hash: 'SHA-256',
    },
    keyMaterial,
    256
  );

  const saltHex = Buffer.from(salt).toString('hex');
  const hashHex = Buffer.from(derivedBits).toString('hex');

  return `pbkdf2:sha256:${iterations}:${saltHex}:${hashHex}`;
}

/**
 * Verifies a plain text password against a stored PBKDF2 hash.
 */
export async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
  const parts = storedHash.split(':');
  if (parts.length !== 5 || parts[0] !== 'pbkdf2' || parts[1] !== 'sha256') {
    return false;
  }

  const iterations = parseInt(parts[2]!, 10);
  const salt = Buffer.from(parts[3]!, 'hex');
  const expectedHashHex = parts[4]!;

  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits']
  );

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt,
      iterations,
      hash: 'SHA-256',
    },
    keyMaterial,
    256
  );

  const derivedHashHex = Buffer.from(derivedBits).toString('hex');
  return derivedHashHex === expectedHashHex;
}

/**
 * Creates a new cryptographically secure session token.
 */
export function createSessionToken(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  return Buffer.from(bytes).toString('hex');
}

/**
 * Parses cookies from an incoming request header string.
 */
export function parseCookies(header?: string | null): Record<string, string> {
  if (!header) return {};
  const cookies: Record<string, string> = {};
  const pairs = header.split(';');
  for (const pair of pairs) {
    const [key, val] = pair.trim().split('=');
    if (key && val) {
      cookies[key.trim()] = decodeURIComponent(val.trim());
    }
  }
  return cookies;
}

/**
 * Creates a Set-Cookie header for a session.
 */
export function createSessionCookie(token: string, maxAgeSeconds: number = 86400 * 7): string {
  return `froot_session=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAgeSeconds}`;
}

/**
 * Clears the session cookie.
 */
export function clearSessionCookie(): string {
  return 'froot_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0';
}

// Pre-populate demo user: admin@frootkit.dev / password123
(async () => {
  const demoHash = await hashPassword('password123');
  const demoUser: User = {
    id: 'usr_demo_admin',
    email: 'admin@frootkit.dev',
    name: 'Sarah Connor',
    role: 'admin',
    createdAt: new Date().toISOString(),
  };
  USERS_STORE.set(demoUser.email, { user: demoUser, passwordHash: demoHash });
})();

export { USERS_STORE, SESSIONS_STORE };
