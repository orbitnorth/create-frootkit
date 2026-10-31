export function Newsletter() {
  return (
    <div class="rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-emerald-950/20 to-slate-900/40 p-8 sm:p-12 text-center my-16 backdrop-blur-sm">
      <div class="max-w-xl mx-auto">
        <h3 class="text-2xl sm:text-3xl font-bold text-white mb-3">
          Subscribe to the FrootKit Dispatch
        </h3>
        <p class="text-slate-400 text-sm mb-8">
          Weekly deep-dives into modern web architectures, performance optimization, and fullstack TypeScript.
        </p>
        <form
          action="/api/posts"
          method="GET"
          class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="colleague@company.com"
            required
            class="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500"
          />
          <button
            type="submit"
            class="px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors text-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
