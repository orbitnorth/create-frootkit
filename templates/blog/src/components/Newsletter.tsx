export function Newsletter() {
  return (
    <div class="rounded-xl border border-[#1a2333] bg-[#0a0f18] p-8 sm:p-10 my-16">
      <div class="max-w-xl">
        <div class="text-xs font-mono font-medium text-emerald-400 mb-2 uppercase tracking-wide">
          Engineering Dispatch
        </div>
        <h3 class="text-2xl font-bold text-white mb-2">
          Subscribe for Technical Deep Dives
        </h3>
        <p class="text-slate-400 text-sm mb-6 leading-relaxed">
          Bi-weekly write-ups on sub-millisecond server rendering, zero-hydration architectures, and high-performance TypeScript.
        </p>

        <form
          action="/api/posts"
          method="GET"
          class="flex flex-col sm:flex-row gap-3 max-w-md"
        >
          <label class="sr-only" for="newsletter-email">Work Email</label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="developer@company.com"
            required
            class="flex-1 px-4 py-2.5 rounded-lg bg-[#06090f] border border-[#1a2333] text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
          />
          <button
            type="submit"
            class="px-5 py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition-colors text-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
