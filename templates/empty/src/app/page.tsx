export const metadata = {
  title: 'Blank Canvas — FrootKit',
  description: 'Minimal blank project with Preact and Tailwind CSS v4.',
};

export default function HomePage() {
  return (
    <main class="min-h-screen flex items-center justify-center p-6">
      <div class="max-w-md w-full text-center border border-slate-800 bg-slate-900/40 rounded-2xl p-8 backdrop-blur-sm">
        <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 text-emerald-400 font-bold text-xl">
          F
        </div>
        <h1 class="text-2xl font-bold text-white mb-2">Blank Slate</h1>
        <p class="text-slate-400 text-sm mb-6">
          Edit <code class="font-mono text-emerald-400 bg-slate-800/80 px-1.5 py-0.5 rounded">src/app/page.tsx</code> to get started.
        </p>
        <div class="flex justify-center gap-3 text-xs font-medium">
          <a
            href="https://frootjs.org"
            target="_blank"
            rel="noreferrer"
            class="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors"
          >
            Docs
          </a>
          <a
            href="https://github.com/orbitnorth/frootkit"
            target="_blank"
            rel="noreferrer"
            class="px-4 py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
