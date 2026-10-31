export function Header() {
  return (
    <header class="absolute inset-x-0 top-0 z-30">
      <nav class="mx-auto max-w-6xl px-6 flex items-center justify-between py-5 text-white">
        <a href="/" class="text-[22px] font-semibold tracking-tight flex items-center gap-2">
          <span>froot<span class="opacity-90">kit</span></span>
        </a>

        <div class="hidden items-center gap-8 text-[15px] font-medium md:flex">
          <a href="#features" class="opacity-90 hover:opacity-100 transition-opacity">Features</a>
          <a href="#code" class="opacity-90 hover:opacity-100 transition-opacity">Architecture</a>
          <a href="/api/health" class="opacity-90 hover:opacity-100 transition-opacity font-mono text-xs">/api/health</a>
        </div>

        <div class="flex items-center gap-4 text-[15px] font-medium">
          <a
            href="https://frootjs.org"
            class="rounded-full bg-white px-4 py-1.5 text-[14px] text-[#635bff] font-medium shadow-[0_2px_5px_-1px_rgba(50,50,93,0.25),0_1px_3px_-1px_rgba(0,0,0,0.3)] hover:bg-[#f6f9fc] transition-colors"
          >
            Documentation
          </a>
        </div>
      </nav>
    </header>
  );
}
