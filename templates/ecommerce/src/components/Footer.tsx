export function Footer() {
  return (
    <footer class="border-t border-[#e6ebf1] py-10 text-[14px] bg-white">
      <div class="mx-auto max-w-6xl px-6 flex flex-wrap justify-between gap-4 text-xs text-[#425466]">
        <span>
          <b class="text-[#635bff] font-semibold text-sm">parcel</b> · Built with FrootKit & Preact SSR.
        </span>
        <div class="flex items-center gap-4">
          <a href="/#shop" class="hover:text-[#0a2540]">Shipping</a>
          <span>·</span>
          <a href="/#shop" class="hover:text-[#0a2540]">Returns</a>
          <span>·</span>
          <a href="/api/products" class="font-mono hover:text-[#0a2540]">/api/products</a>
        </div>
      </div>
    </footer>
  );
}
