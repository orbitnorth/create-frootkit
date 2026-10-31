export function Footer() {
  return (
    <footer class="border-t border-[#1a2333] bg-[#06090f] py-8 text-xs text-slate-400">
      <div class="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
        <div>
          FrootStore &copy; {new Date().getFullYear()} OrbitNorth LLC. MIT Licensed.
        </div>
        <div class="flex items-center gap-6">
          <a href="https://github.com/orbitnorth/frootkit" class="hover:text-white transition-colors">GitHub</a>
          <a href="https://frootjs.org" class="hover:text-white transition-colors">Documentation</a>
          <a href="/api/products" class="hover:text-white transition-colors">Products API</a>
        </div>
      </div>
    </footer>
  );
}
