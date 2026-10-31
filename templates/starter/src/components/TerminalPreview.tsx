export function TerminalPreview() {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full mb-16">
      <div class="rounded-2xl border border-slate-800 bg-[#070b14] p-6 shadow-xl relative overflow-hidden group">
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-rose-500/80" />
            <span class="w-3 h-3 rounded-full bg-amber-500/80" />
            <span class="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span class="ml-2 text-xs font-mono text-slate-400">src/app/page.tsx</span>
          </div>
          <span class="text-[11px] font-mono text-emerald-400/90 font-medium bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
            Preact SSR
          </span>
        </div>
        <div class="font-mono text-xs sm:text-sm text-slate-300 space-y-2 select-all leading-relaxed">
          <p><span class="text-purple-400 font-semibold">export default function</span> <span class="text-blue-400">HomePage</span>() &#123;</p>
          <p class="pl-4"><span class="text-purple-400 font-semibold">return</span> (</p>
          <p class="pl-8 text-emerald-300">&lt;<span class="text-blue-300 font-semibold">main</span> <span class="text-teal-400">class</span>=<span class="text-amber-300">"min-h-screen p-8"</span>&gt;</p>
          <p class="pl-12 text-slate-100">&lt;<span class="text-blue-300 font-semibold">h1</span>&gt;Hello FrootKit!&lt;/<span class="text-blue-300 font-semibold">h1</span>&gt;</p>
          <p class="pl-8 text-emerald-300">&lt;/<span class="text-blue-300 font-semibold">main</span>&gt;</p>
          <p class="pl-4">);</p>
          <p>&#125;</p>
        </div>
      </div>

      <div class="rounded-2xl border border-slate-800 bg-[#070b14] p-6 shadow-xl relative overflow-hidden group">
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-rose-500/80" />
            <span class="w-3 h-3 rounded-full bg-amber-500/80" />
            <span class="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span class="ml-2 text-xs font-mono text-slate-400">terminal</span>
          </div>
          <span class="text-[11px] font-mono text-cyan-400/90 font-medium bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
            CLI
          </span>
        </div>
        <div class="font-mono text-xs sm:text-sm text-slate-300 space-y-2.5 leading-relaxed">
          <p class="text-slate-500"># Start lightning-fast dev server</p>
          <p class="text-emerald-400 font-semibold flex items-center gap-2">
            <span class="text-slate-500 select-none">$</span> frootkit dev
          </p>
          <p class="text-slate-500 pt-1"># Build production static export + API routes</p>
          <p class="text-cyan-400 font-semibold flex items-center gap-2">
            <span class="text-slate-500 select-none">$</span> frootkit build
          </p>
          <p class="text-slate-500 pt-1"># Test the API endpoint</p>
          <p class="text-amber-400 font-semibold flex items-center gap-2">
            <span class="text-slate-500 select-none">$</span> curl http://localhost:3000/api/health
          </p>
        </div>
      </div>
    </div>
  );
}
