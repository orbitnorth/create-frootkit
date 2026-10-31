export function Footer() {
  return (
    <footer class="border-t border-[#e6ebf1] py-10 text-[14px] bg-white">
      <div class="mx-auto max-w-6xl px-6 flex flex-wrap justify-between gap-4 text-xs text-[#425466]">
        <span>
          <b class="text-[#635bff] font-semibold text-sm">dispatch</b> · Notes on building web systems with FrootKit.
        </span>
        <div class="flex items-center gap-4">
          <a href="/#articles" class="hover:text-[#0a2540]">RSS</a>
          <span>·</span>
          <a href="/#articles" class="hover:text-[#0a2540]">Privacy</a>
          <span>·</span>
          <a href="/api/posts" class="font-mono hover:text-[#0a2540]">/api/posts</a>
        </div>
      </div>
    </footer>
  );
}
