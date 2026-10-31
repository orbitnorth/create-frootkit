import { Navbar } from '../components/Navbar.js';

export const metadata = {
  title: 'FrootAuth — Web Crypto Authentication & Dashboard',
  description: 'Pure Web Crypto PBKDF2 password hashing and secure session management for FrootKit.',
};

export default function SaaSMarketingPage() {
  return (
    <div class="min-h-screen bg-[#08090a] text-zinc-100 flex flex-col justify-between selection:bg-indigo-500/20 selection:text-indigo-300">
      <Navbar />

      <main class="max-w-6xl mx-auto px-6 py-16 sm:py-24 flex-1 flex flex-col justify-center w-full">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (7 cols) */}
          <div class="lg:col-span-7">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-6">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span>Pure Web Crypto Architecture</span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-[-0.03em] leading-[1.1] mb-6">
              Fullstack Authentication & Administration.
            </h1>

            <p class="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8 max-w-xl">
              Zero external C++ dependencies. Real PBKDF2 password hashing (100,000 iterations), cryptographically random session tokens, protected layouts, and high-density telemetry.
            </p>

            <div class="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="/signup"
                class="px-4 py-2.5 rounded-lg bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-all text-sm shadow-sm flex items-center gap-2 group"
              >
                <span>Create Account</span>
                <span class="text-zinc-500 group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
              <a
                href="/dashboard"
                class="px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-300 font-medium hover:bg-white/[0.08] hover:text-white transition-all text-sm"
              >
                Open Dashboard
              </a>
            </div>

            <div class="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-xs text-zinc-400">
              <span class="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Demo Account ready:</span>
              <code class="text-zinc-200 font-mono text-[11px] bg-white/[0.04] px-1.5 py-0.5 rounded">admin@frootkit.dev</code>
              <span class="text-zinc-600">/</span>
              <code class="text-zinc-200 font-mono text-[11px] bg-white/[0.04] px-1.5 py-0.5 rounded">password123</code>
            </div>
          </div>

          {/* Right Column: Linear-Grade Security Inspector Card (5 cols) */}
          <div class="lg:col-span-5">
            <div class="rounded-xl border border-white/[0.08] bg-[#0f1117] p-6 shadow-2xl shadow-black/40 relative overflow-hidden">
              {/* Subtle top edge highlight */}
              <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

              <div class="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 rounded-full bg-emerald-400" />
                  <span class="text-xs font-medium text-zinc-300">Security Subsystem</span>
                </div>
                <span class="text-[11px] text-indigo-400 font-medium px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                  SubtleCrypto Active
                </span>
              </div>

              <div class="space-y-3.5 text-xs">
                <div class="flex justify-between items-center py-1">
                  <span class="text-zinc-400">Algorithm</span>
                  <span class="text-zinc-200 font-medium">PBKDF2-SHA256</span>
                </div>
                <div class="flex justify-between items-center py-1 border-t border-white/[0.04]">
                  <span class="text-zinc-400">Iterations</span>
                  <span class="text-zinc-200 font-medium tabular-nums">100,000 rounds</span>
                </div>
                <div class="flex justify-between items-center py-1 border-t border-white/[0.04]">
                  <span class="text-zinc-400">Salt Length</span>
                  <span class="text-zinc-200 font-medium tabular-nums">128-bit (16 bytes)</span>
                </div>
                <div class="flex justify-between items-center py-1 border-t border-white/[0.04]">
                  <span class="text-zinc-400">Key Derivation</span>
                  <span class="text-zinc-200 font-medium">256-bit SubtleCrypto</span>
                </div>
                <div class="flex justify-between items-center py-1 border-t border-white/[0.04]">
                  <span class="text-zinc-400">Cookie Security</span>
                  <span class="text-emerald-400 font-medium">HttpOnly; SameSite=Lax</span>
                </div>
              </div>

              <div class="mt-5 pt-4 border-t border-white/[0.06] flex justify-between items-center text-xs">
                <span class="text-zinc-500">Auth Route</span>
                <code class="text-indigo-400 font-mono text-[11px] bg-indigo-500/5 px-2 py-0.5 rounded border border-indigo-500/15">
                  /api/auth?action=login
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid Below */}
        <div class="mt-20 pt-12 border-t border-white/[0.06] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-5 rounded-lg border border-white/[0.06] bg-white/[0.02]">
            <div class="w-8 h-8 rounded-md bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3">
              <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 class="text-sm font-semibold text-zinc-100 mb-1">Standard Web Crypto</h3>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Native PBKDF2 key derivation using the Web Cryptography API. Zero C++ native rebuilds across any architecture.
            </p>
          </div>

          <div class="p-5 rounded-lg border border-white/[0.06] bg-white/[0.02]">
            <div class="w-8 h-8 rounded-md bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3">
              <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="9" y1="3" x2="9" y2="21" />
              </svg>
            </div>
            <h3 class="text-sm font-semibold text-zinc-100 mb-1">Protected Layouts</h3>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Deterministic server-side session checks in nested Preact layout trees with instant redirect fallbacks.
            </p>
          </div>

          <div class="p-5 rounded-lg border border-white/[0.06] bg-white/[0.02]">
            <div class="w-8 h-8 rounded-md bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3">
              <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            </div>
            <h3 class="text-sm font-semibold text-zinc-100 mb-1">SQLite Session Cache</h3>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Local persistent storage with sub-millisecond lookup latency, automatic expiry purging, and single-file portability.
            </p>
          </div>
        </div>
      </main>

      <footer class="border-t border-white/[0.06] bg-[#08090a] py-6 text-xs text-zinc-500">
        <div class="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>FrootAuth © {new Date().getFullYear()} OrbitNorth LLC. Built with FrootKit.</div>
          <div class="flex gap-5">
            <a href="/login" class="hover:text-zinc-300 transition-colors">Sign In</a>
            <a href="/signup" class="hover:text-zinc-300 transition-colors">Sign Up</a>
            <a href="/dashboard" class="hover:text-zinc-300 transition-colors">Dashboard</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
