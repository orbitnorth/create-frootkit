import { Navbar } from '../components/Navbar.js';

export const metadata = {
  title: 'FrootSaaS — Next Generation Cloud Infrastructure',
  description: 'Deploy lightning fast web services with enterprise grade observability.',
};

export default function SaaSMarketingPage() {
  return (
    <div class="min-h-screen flex flex-col justify-between">
      <Navbar />

      <main class="max-w-6xl mx-auto px-6 py-20 flex-1 flex flex-col justify-center">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-semibold text-emerald-400 mb-8 shadow-sm">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Fullstack Authentication & Dashboard
          </div>

          <h1 class="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            The Complete Platform for{' '}
            <span class="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Modern SaaS
            </span>
          </h1>

          <p class="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Real Web Crypto password hashing, secure session cookies, protected routes, and an administrative dashboard layout ready out of the box.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/signup"
              class="px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25 hover:-translate-y-0.5"
            >
              Start Free Trial &rarr;
            </a>
            <a
              href="/dashboard"
              class="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold hover:bg-slate-800 transition-all hover:-translate-y-0.5"
            >
              View Live Dashboard
            </a>
          </div>
        </div>
      </main>

      <footer class="border-t border-slate-900 bg-slate-950/60 py-8 text-center text-xs text-slate-500">
        <div class="max-w-6xl mx-auto px-6 flex justify-between">
          <div>FrootSaaS &copy; {new Date().getFullYear()} OrbitNorth LLC</div>
          <div class="flex gap-4">
            <a href="/login" class="hover:text-slate-400">Sign In</a>
            <a href="/signup" class="hover:text-slate-400">Sign Up</a>
            <a href="/dashboard" class="hover:text-slate-400">Dashboard</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
