export function Newsletter() {
  return (
    <section id="subscribe" class="scroll-mt-20 pb-16">
      <div class="grid items-center gap-6 rounded-lg bg-[#f6f9fc] p-8 md:p-12 border border-[#e6ebf1]">
        <div>
          <h2 class="text-[28px] font-light tracking-tight text-[#0a2540]">
            Get new posts in your inbox
          </h2>
          <p class="mt-1 text-sm text-[#425466]">One email every other Thursday. No spam.</p>
        </div>
        <form class="flex gap-2">
          <input class="inp" type="email" placeholder="you@company.com" aria-label="Email" />
          <button type="button" class="btn btn-p shrink-0">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
