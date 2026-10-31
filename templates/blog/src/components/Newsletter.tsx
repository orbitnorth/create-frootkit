export function Newsletter() {
  return (
    <div id="newsletter" class="rounded-xl border border-white/[0.08] bg-[#0f1117] p-8 sm:p-10 my-16 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] relative overflow-hidden">
      <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div class="max-w-xl">
        <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[11px] font-medium mb-3">
          <span class="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          <span>Engineering Dispatch</span>
        </div>
        <h3 class="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
          Subscribe for Technical Deep Dives
        </h3>
        <p class="text-zinc-400 text-xs sm:text-sm mb-6 leading-relaxed">
          Bi-weekly write-ups on sub-millisecond server rendering, zero-hydration architectures, and high-performance TypeScript runtime optimizations.
        </p>

        <form
          action="/api/posts"
          method="GET"
          class="flex flex-col sm:flex-row gap-2.5 max-w-md"
        >
          <label class="sr-only" for="newsletter-email">Work Email</label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="developer@company.com"
            required
            class="flex-1 px-3.5 py-2 rounded-lg bg-[#08090a] border border-white/[0.08] text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
          />
          <button
            type="submit"
            class="px-4 py-2 rounded-lg bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-all text-xs shadow-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
