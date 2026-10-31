export function TerminalPreview() {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full mb-16">
      <div class="rounded-xl border border-[#1a2333] bg-[#0a0f18] overflow-hidden">
        <div class="flex items-center justify-between px-4 py-2.5 bg-[#0f1624] border-b border-[#1a2333]">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span class="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span class="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span class="ml-2 text-xs font-mono text-slate-400">src/app/page.tsx</span>
          </div>
          <span class="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            Preact SSR
          </span>
        </div>
        <div class="p-5 font-mono text-xs text-slate-300 space-y-2 select-all leading-relaxed">
          <p><span class="text-purple-400 font-semibold">export default function</span> <span class="text-blue-400">HomePage</span>() &#123;</p>
          <p class="pl-4"><span class="text-purple-400 font-semibold">return</span> (</p>
          <p class="pl-8 text-emerald-300">&lt;<span class="text-blue-300 font-semibold">main</span> <span class="text-teal-400">class</span>=<span class="text-amber-300">"min-h-screen p-8"</span>&gt;</p>
          <p class="pl-12 text-slate-100">&lt;<span class="text-blue-300 font-semibold">h1</span>&gt;Production FrootKit Application&lt;/<span class="text-blue-300 font-semibold">h1</span>&gt;</p>
          <p class="pl-8 text-emerald-300">&lt;/<span class="text-blue-300 font-semibold">main</span>&gt;</p>
          <p class="pl-4">);</p>
          <p>&#125;</p>
        </div>
      </div>

      <div class="rounded-xl border border-[#1a2333] bg-[#0a0f18] overflow-hidden">
        <div class="flex items-center justify-between px-4 py-2.5 bg-[#0f1624] border-b border-[#1a2333]">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span class="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span class="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span class="ml-2 text-xs font-mono text-slate-400">terminal</span>
          </div>
          <span class="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
            CLI
          </span>
        </div>
        <div class="p-5 font-mono text-xs text-slate-300 space-y-3 leading-relaxed">
          <div>
            <span class="text-slate-500 block text-[11px]"># Run dev server with Tailwind compiler</span>
            <span class="text-emerald-400 font-semibold">$ frootkit dev</span>
          </div>
          <div>
            <span class="text-slate-500 block text-[11px]"># Build static export and API manifest</span>
            <span class="text-cyan-400 font-semibold">$ frootkit build</span>
          </div>
          <div>
            <span class="text-slate-500 block text-[11px]"># Test dynamic route handler</span>
            <span class="text-amber-400 font-semibold">$ curl http://localhost:3000/api/health</span>
          </div>
        </div>
      </div>
    </div>
  );
}
