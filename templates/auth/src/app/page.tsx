import { Navbar } from '../components/Navbar.js';

export const metadata = {
  title: 'FrootAuth — Web Crypto Authentication & Dashboard',
  description: 'Pure Web Crypto PBKDF2 password hashing and secure session management for FrootKit.',
};

export default function SaaSMarketingPage() {
  return (
    <div class="min-h-screen bg-[#06090f] text-slate-100 flex flex-col justify-between">
      <Navbar />

      <main class="max-w-6xl mx-auto px-6 py-16 flex-1 flex flex-col justify-center">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (7 cols) */}
          <div class="lg:col-span-7">
            <div class="text-xs font-mono font-medium text-emerald-400 mb-3 uppercase tracking-wide">
              Security Architecture &bull; Pure Web Crypto
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Fullstack Authentication & Administration.
            </h1>

            <p class="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              Zero external C++ dependencies. Real PBKDF2 password hashing (100,000 iterations), cryptographically random session tokens, protected layout routes, and administrative dashboard metrics.
            </p>

            <div class="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="/signup"
                class="px-5 py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition-colors text-sm"
              >
                Create Account &rarr;
              </a>
              <a
                href="/dashboard"
                class="px-5 py-2.5 rounded-lg bg-[#0a0f18] border border-[#1a2333] text-slate-200 font-semibold hover:border-slate-700 hover:text-white transition-colors text-sm"
              >
                View Dashboard
              </a>
            </div>

            <div class="text-xs font-mono text-slate-400 flex items-center gap-2">
              <span class="text-emerald-400 font-bold">&check;</span>
              <span>Demo Account ready: admin@frootkit.dev / password123</span>
            </div>
          </div>

          {/* Right Column: Mini Dashboard Card (5 cols) */}
          <div class="lg:col-span-5">
            <div class="rounded-xl border border-[#1a2333] bg-[#0a0f18] p-6 shadow-xl space-y-4">
              <div class="flex items-center justify-between pb-3 border-b border-[#1a2333]">
                <span class="text-xs font-mono text-slate-400">Security Telemetry</span>
                <span class="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  PBKDF2-SHA256
                </span>
              </div>

              <div class="space-y-3 font-mono text-xs">
                <div class="flex justify-between">
                  <span class="text-slate-400">Iterations:</span>
                  <span class="text-white font-bold">100,000</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Salt Length:</span>
                  <span class="text-white font-bold">128-bit (16 bytes)</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Key Derivation:</span>
                  <span class="text-white font-bold">256-bit SubtleCrypto</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Cookie Security:</span>
                  <span class="text-emerald-400 font-bold">HttpOnly; SameSite=Lax</span>
                </div>
              </div>

              <div class="pt-3 border-t border-[#1a2333] flex justify-between items-center text-xs">
                <span class="text-slate-400">Endpoint:</span>
                <code class="text-emerald-400 font-mono">/api/auth?action=login</code>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer class="border-t border-[#1a2333] bg-[#06090f] py-8 text-xs text-slate-400 font-mono">
        <div class="max-w-6xl mx-auto px-6 flex justify-between">
          <div>FrootAuth &copy; {new Date().getFullYear()} OrbitNorth LLC</div>
          <div class="flex gap-4">
            <a href="/login" class="hover:text-white transition-colors">Sign In</a>
            <a href="/signup" class="hover:text-white transition-colors">Sign Up</a>
            <a href="/dashboard" class="hover:text-white transition-colors">Dashboard</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
