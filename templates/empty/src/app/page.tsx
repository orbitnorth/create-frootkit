export const metadata = {
  title: 'Blank Canvas — FrootKit',
  description: 'Minimal blank project with Preact and Tailwind CSS v4.',
};

export default function HomePage() {
  return (
    <main class="min-h-screen bg-[#08090a] text-zinc-100 flex items-center justify-center p-6 selection:bg-indigo-500/20 selection:text-indigo-300">
      <div class="max-w-md w-full text-center border border-white/[0.08] bg-[#0f1117] rounded-xl p-8 shadow-2xl shadow-black/40 relative overflow-hidden">
        <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        <div class="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center mx-auto mb-4 text-indigo-400 font-medium text-sm">
          F
        </div>
        <h1 class="text-xl font-semibold text-white tracking-tight mb-2">Blank Canvas</h1>
        <p class="text-zinc-400 text-xs mb-6 leading-relaxed">
          Start building by editing <code class="font-mono text-indigo-400 bg-white/[0.04] border border-white/[0.08] px-1.5 py-0.5 rounded">src/app/page.tsx</code>.
        </p>
        <div class="flex justify-center gap-2.5 text-xs font-medium">
          <a
            href="https://frootjs.org"
            target="_blank"
            rel="noreferrer"
            class="px-3.5 py-1.5 rounded-lg bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-all shadow-sm"
          >
            Documentation
          </a>
          <a
            href="https://github.com/orbitnorth/frootkit"
            target="_blank"
            rel="noreferrer"
            class="px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-all"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
