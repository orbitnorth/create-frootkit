export function TerminalPreview() {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto w-full mb-16">
      <div class="rounded-xl border border-white/[0.08] bg-[#0f1117] overflow-hidden shadow-xl shadow-black/40">
        <div class="flex items-center justify-between px-4 py-2.5 bg-white/[0.02] border-b border-white/[0.06]">
          <div class="flex items-center gap-1.5">
            <span class="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
            <span class="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
            <span class="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
            <span class="ml-2 text-xs font-mono text-zinc-400">src/app/page.tsx</span>
          </div>
          <span class="text-[10px] font-medium text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
            Preact SSR
          </span>
        </div>
        <div class="p-5 font-mono text-xs text-zinc-300 space-y-1.5 select-all leading-relaxed">
          <p><span class="text-indigo-400">export default function</span> <span class="text-white font-medium">HomePage</span>() &#123;</p>
          <p class="pl-4"><span class="text-indigo-400">return</span> (</p>
          <p class="pl-8 text-zinc-400">&lt;<span class="text-zinc-200">main</span> <span class="text-indigo-300">class</span>=<span class="text-emerald-300">"min-h-screen p-8"</span>&gt;</p>
          <p class="pl-12 text-zinc-100">&lt;<span class="text-zinc-200">h1</span>&gt;Production FrootKit Application&lt;/<span class="text-zinc-200">h1</span>&gt;</p>
          <p class="pl-8 text-zinc-400">&lt;/<span class="text-zinc-200">main</span>&gt;</p>
          <p class="pl-4">);</p>
          <p>&#125;</p>
        </div>
      </div>

      <div class="rounded-xl border border-white/[0.08] bg-[#0f1117] overflow-hidden shadow-xl shadow-black/40">
        <div class="flex items-center justify-between px-4 py-2.5 bg-white/[0.02] border-b border-white/[0.06]">
          <div class="flex items-center gap-1.5">
            <span class="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
            <span class="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
            <span class="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
            <span class="ml-2 text-xs font-mono text-zinc-400">terminal</span>
          </div>
          <span class="text-[10px] font-medium text-zinc-300 bg-white/[0.05] px-2 py-0.5 rounded-full border border-white/[0.08]">
            CLI
          </span>
        </div>
        <div class="p-5 font-mono text-xs text-zinc-300 space-y-3 leading-relaxed">
          <div>
            <span class="text-zinc-500 block text-[11px]"># Run dev server with instant Tailwind compilation</span>
            <span class="text-indigo-400 font-semibold">$ frootkit dev</span>
          </div>
          <div>
            <span class="text-zinc-500 block text-[11px]"># Build static export and API manifest</span>
            <span class="text-zinc-200 font-semibold">$ frootkit build</span>
          </div>
          <div>
            <span class="text-zinc-500 block text-[11px]"># Test dynamic route handler</span>
            <span class="text-emerald-400 font-semibold">$ curl http://localhost:3000/api/health</span>
          </div>
        </div>
      </div>
    </div>
  );
}
