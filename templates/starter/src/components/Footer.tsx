export function Footer() {
  return (
    <footer class="border-t border-[#e6ebf1] py-10 text-[14px] bg-white">
      <div class="mx-auto max-w-6xl px-6 flex flex-wrap justify-between gap-4 text-xs text-[#425466]">
        <span>
          <b class="text-[#635bff] font-semibold text-sm">frootkit</b> · High-performance Preact fullstack web framework.
        </span>
        <div class="flex items-center gap-4">
          <a href="https://frootjs.org" class="hover:text-[#0a2540]">Docs</a>
          <span>·</span>
          <a href="https://github.com/orbitnorth/frootkit" class="hover:text-[#0a2540]">GitHub</a>
          <span>·</span>
          <a href="/api/health" class="font-mono hover:text-[#0a2540]">/api/health</a>
        </div>
      </div>
    </footer>
  );
}
