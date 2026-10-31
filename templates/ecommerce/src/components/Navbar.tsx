export function Navbar() {
  return (
    <>
      {/* Top Banner */}
      <div class="bg-[#0a2540] py-2 text-center text-[13px] text-white">
        Free shipping on orders over $75 · 30-day returns
      </div>

      {/* Main Sticky Navbar */}
      <header class="sticky top-0 z-30 border-b border-[#e6ebf1] bg-white/90 backdrop-blur">
        <div class="mx-auto max-w-6xl px-6 flex items-center gap-4 py-3">
          <a href="/" class="text-[22px] font-semibold tracking-tight text-[#635bff]">
            parcel
          </a>

          <nav class="ml-4 hidden gap-6 text-[14px] font-medium md:flex">
            <a href="/#shop" class="text-[#0a2540] hover:text-[#635bff] transition-colors">Shop</a>
            <a href="/#shop" class="text-[#425466] hover:text-[#635bff] transition-colors">Home</a>
            <a href="/#shop" class="text-[#425466] hover:text-[#635bff] transition-colors">Office</a>
            <a href="/#shop" class="text-[#425466] hover:text-[#635bff] transition-colors">Tech</a>
          </nav>

          <div class="relative ml-auto hidden w-64 sm:block">
            <svg class="absolute left-3 top-2.5 h-4 w-4 text-[#425466]/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3-3" />
            </svg>
            <input class="inp pl-9" placeholder="Search products" aria-label="Search products" />
          </div>

          <a href="/cart" class="btn btn-s relative ml-auto sm:ml-0" aria-label="Open cart">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 7h14l-1.5 11h-11zM9 7a3 3 0 0 1 6 0" stroke-linejoin="round" />
            </svg>
            <span>Cart</span>
            <span class="bd bg-[#635bff] text-white">2</span>
          </a>
        </div>
      </header>
    </>
  );
}
