export function Footer() {
  return (
    <footer class="border-t border-white/[0.08] bg-[#08090a] py-8 text-xs text-zinc-500">
      <div class="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          FrootBlog © {new Date().getFullYear()} OrbitNorth LLC. Written for systems engineers.
        </div>
        <div class="flex items-center gap-6">
          <a href="https://github.com/orbitnorth/frootkit" class="hover:text-zinc-300 transition-colors">GitHub</a>
          <a href="https://frootjs.org" class="hover:text-zinc-300 transition-colors">Documentation</a>
          <a href="/api/posts" class="hover:text-zinc-300 transition-colors font-mono text-[11px]">/api/posts</a>
        </div>
      </div>
    </footer>
  );
}
