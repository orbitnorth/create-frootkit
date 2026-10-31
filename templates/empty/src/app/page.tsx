export const metadata = {
  title: 'Blank Canvas — FrootKit',
  description: 'Minimal blank project with Preact and Tailwind CSS v4.',
};

export default function HomePage() {
  return (
    <main class="min-h-screen bg-[#06090f] text-slate-100 flex items-center justify-center p-6">
      <div class="max-w-md w-full text-center border border-[#1a2333] bg-[#0a0f18] rounded-xl p-8">
        <div class="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 text-emerald-400 font-bold text-lg font-mono">
          F
        </div>
        <h1 class="text-2xl font-bold text-white mb-2">Blank Canvas</h1>
        <p class="text-slate-400 text-sm mb-6 leading-relaxed">
          Start building by editing <code class="font-mono text-emerald-400 bg-[#06090f] border border-[#1a2333] px-1.5 py-0.5 rounded">src/app/page.tsx</code>.
        </p>
        <div class="flex justify-center gap-3 text-xs font-medium">
          <a
            href="https://frootjs.org"
            target="_blank"
            rel="noreferrer"
            class="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition-colors"
          >
            Documentation
          </a>
          <a
            href="https://github.com/orbitnorth/frootkit"
            target="_blank"
            rel="noreferrer"
            class="px-4 py-2 rounded-lg bg-[#06090f] border border-[#1a2333] text-slate-300 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
