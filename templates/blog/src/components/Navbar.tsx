export function Navbar() {
  return (
    <header class="sticky top-0 z-40 border-b border-[#e6ebf1] bg-white/90 backdrop-blur">
      <div class="mx-auto max-w-6xl px-6 flex items-center gap-6 py-3">
        <a href="/" class="text-[22px] font-semibold tracking-tight text-[#635bff]">
          dispatch
        </a>

        <nav class="hidden gap-6 text-[14px] font-medium md:flex">
          <a href="/#articles" class="text-[#425466] hover:text-[#635bff] transition-colors">Engineering</a>
          <a href="/#articles" class="text-[#425466] hover:text-[#635bff] transition-colors">Product</a>
          <a href="/#articles" class="text-[#425466] hover:text-[#635bff] transition-colors">Finance</a>
          <a href="/#articles" class="text-[#425466] hover:text-[#635bff] transition-colors">Company</a>
        </nav>

        <div class="relative ml-auto w-44 sm:w-64">
          <svg class="absolute left-3 top-2.5 h-4 w-4 text-[#425466]/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3-3" />
          </svg>
          <input class="inp pl-9 py-1.5 text-xs" placeholder="Search articles" aria-label="Search articles" />
        </div>

        <a href="#subscribe" class="btn btn-p hidden rounded-full sm:inline-flex text-xs py-1.5 px-4">
          Subscribe
        </a>
      </div>
    </header>
  );
}
