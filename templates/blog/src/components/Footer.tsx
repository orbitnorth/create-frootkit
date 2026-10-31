export function Footer() {
  return (
    <footer class="border-t border-slate-900 bg-slate-950/60 py-8 text-center text-xs text-slate-500">
      <div class="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          FrootBlog &copy; {new Date().getFullYear()} OrbitNorth LLC. MIT Licensed.
        </div>
        <div class="flex items-center gap-6">
          <a href="https://github.com/orbitnorth/frootkit" class="hover:text-slate-400 transition-colors">GitHub</a>
          <a href="https://frootjs.org" class="hover:text-slate-400 transition-colors">Documentation</a>
          <a href="/api/posts" class="hover:text-slate-400 transition-colors">Posts API</a>
        </div>
      </div>
    </footer>
  );
}
