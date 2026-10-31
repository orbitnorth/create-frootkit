import { Navbar } from '@/components/Navbar.js';

export const metadata = {
  title: 'FrootAuth — Authentication & Revenue Infrastructure',
  description: 'Pure Web Crypto PBKDF2 authentication, subscription billing, and real-time dashboard telemetry.',
};

export default function SaaSMarketingPage() {
  const features = [
    {
      title: 'Subscriptions',
      desc: 'Flat, tiered or per-seat plans with trials, coupons and prorated upgrades.',
      icon: 'M4 12a8 8 0 0 1 14-5M20 12a8 8 0 0 1-14 5M18 3v4h-4M6 21v-4h4',
    },
    {
      title: 'Usage-based billing',
      desc: 'Meter API calls or compute cycles and bill exactly what customers used.',
      icon: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
    },
    {
      title: 'Smart retries',
      desc: 'Failed cards retry at the best time, and customers get a link to update them.',
      icon: 'M3 12a9 9 0 1 0 3-6.7M3 4v5h5',
    },
    {
      title: 'Invoicing',
      desc: 'Branded PDF invoices with payment links, reminders and automatic numbering.',
      icon: 'M6 3h9l4 4v14H6zM14 3v5h5M9 13h6M9 17h6',
    },
    {
      title: 'Tax and compliance',
      desc: 'Calculate sales tax and VAT at checkout and file reports in one click.',
      icon: 'M5 19 19 5M7 8h.01M17 16h.01',
    },
    {
      title: 'Reconciliation',
      desc: 'Match every payout to the payments inside it and export to your ledger.',
      icon: 'M4 7h16M4 12h16M4 17h10',
    },
  ];

  const plans = [
    {
      name: 'Starter',
      price: 0,
      desc: 'For side projects and first customers.',
      features: ['2.9% + 30¢ per payment', 'Up to $10k monthly volume', 'Email support'],
      popular: false,
    },
    {
      name: 'Growth',
      price: 49,
      desc: 'For teams with recurring revenue.',
      features: ['2.4% + 30¢ per payment', 'Smart retries and dunning', 'Usage-based billing', 'Tax calculation'],
      popular: true,
    },
    {
      name: 'Scale',
      price: 199,
      desc: 'For finance teams at volume.',
      features: ['Custom volume pricing', 'Revenue recognition', 'SSO and audit logs', 'Dedicated manager'],
      popular: false,
    },
  ];

  return (
    <div class="bg-white font-sans text-[#425466]">
      <Navbar />

      {/* HERO SECTION */}
      <section class="hero relative pb-44 pt-32 text-white md:pb-56">
        <div class="mx-auto max-w-6xl px-6 grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
          <div class="rise">
            <span class="bd bg-white/15 text-white">New: usage-based billing is live</span>
            <h1 class="mt-5 text-[42px] font-light leading-[1.08] tracking-tight md:text-[56px] md:leading-[64px]">
              Billing that keeps up with your revenue
            </h1>
            <p class="mt-6 max-w-md text-[18px] font-light leading-7 text-white/90">
              Charge for subscriptions, usage, and one-off invoices from one unified system. Failed payments retry on their own, and every dollar reconciles to your bank.
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <a href="/signup" class="btn btn-w">Start free</a>
              <a href="/dashboard" class="btn btn-gl">View Dashboard</a>
            </div>
            <p class="mt-4 text-[13px] text-white/75">
              No card needed. Free up to $10k in monthly volume. Demo: <code class="font-mono bg-white/10 px-1.5 py-0.5 rounded">admin@frootkit.dev</code>
            </p>
          </div>

          {/* Interactive Hero Dashboard Mock */}
          <div class="rise relative [animation-delay:.15s]">
            <div class="overflow-hidden rounded-lg bg-white text-[#425466] shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.3)]">
              <div class="flex items-center gap-1.5 border-b border-[#e6ebf1] bg-[#f6f9fc] px-4 py-2.5">
                <i class="h-2.5 w-2.5 rounded-full bg-[#e6ebf1]" />
                <i class="h-2.5 w-2.5 rounded-full bg-[#e6ebf1]" />
                <i class="h-2.5 w-2.5 rounded-full bg-[#e6ebf1]" />
                <span class="ml-3 font-mono text-[12px] text-[#425466]">dashboard.frootauth.com</span>
              </div>
              <div class="p-5">
                <div class="flex items-end justify-between">
                  <div>
                    <p class="text-[13px] text-[#425466]">Net volume · last 30 days</p>
                    <p class="font-mono text-[30px] font-light text-[#0a2540]">$482,190.40</p>
                  </div>
                  <span class="bd bg-[#24b47e]/15 text-[#0e6245]">+18.2%</span>
                </div>

                <svg viewBox="0 0 300 90" class="mt-3 h-24 w-full">
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stop-color="#635bff" stop-opacity=".25" />
                      <stop offset="1" stop-color="#635bff" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 70 C30 66 40 50 70 54 S120 30 150 36 S210 18 240 22 S285 8 300 6 V90 H0Z" fill="url(#g)" />
                  <path d="M0 70 C30 66 40 50 70 54 S120 30 150 36 S210 18 240 22 S285 8 300 6" fill="none" stroke="#635bff" stroke-width="2.5" stroke-linecap="round" />
                </svg>

                <div class="mt-3 divide-y divide-[#e6ebf1] text-[14px]">
                  <div class="flex items-center justify-between py-2">
                    <span class="font-medium text-[#0a2540]">Northwind Traders</span>
                    <span class="flex items-center gap-3">
                      <span class="font-mono">$1,240.00</span>
                      <span class="bd bg-[#24b47e]/15 text-[#0e6245]">Paid</span>
                    </span>
                  </div>
                  <div class="flex items-center justify-between py-2">
                    <span class="font-medium text-[#0a2540]">Kestrel Labs</span>
                    <span class="flex items-center gap-3">
                      <span class="font-mono">$89.50</span>
                      <span class="bd bg-[#cd3d64]/10 text-[#cd3d64]">Retrying</span>
                    </span>
                  </div>
                  <div class="flex items-center justify-between py-2">
                    <span class="font-medium text-[#0a2540]">Orbit Studio</span>
                    <span class="flex items-center gap-3">
                      <span class="font-mono">$2,150.00</span>
                      <span class="bd bg-[#24b47e]/15 text-[#0e6245]">Paid</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Recovery Notification */}
            <div class="absolute -bottom-10 -left-4 hidden w-60 rounded-lg bg-white p-4 text-[13px] shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.3)] sm:block md:-left-10 text-[#425466]">
              <p class="font-medium text-[#0a2540]">Payment recovered</p>
              <p>Kestrel Labs paid on retry 2 of 4. Recovered $89.50.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section class="bg-[#f6f9fc] py-14">
        <div class="mx-auto max-w-6xl px-6 grid gap-8 text-center sm:grid-cols-3">
          <div>
            <p class="font-mono text-[40px] font-light text-[#0a2540]">99.99%</p>
            <p class="text-[14px]">API uptime over the last 12 months</p>
          </div>
          <div>
            <p class="font-mono text-[40px] font-light text-[#0a2540]">+11%</p>
            <p class="text-[14px]">Average revenue recovered from failed payments</p>
          </div>
          <div>
            <p class="font-mono text-[40px] font-light text-[#0a2540]">0.42ms</p>
            <p class="text-[14px]">P99 server-side dispatch latency</p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" class="scroll-mt-16 py-24">
        <div class="mx-auto max-w-6xl px-6">
          <h2 class="text-[32px] font-light leading-[1.15] tracking-tight text-[#0a2540] md:text-[40px] max-w-2xl">
            One system for every way you get paid
          </h2>
          <p class="mt-4 max-w-xl text-[17px] leading-7">
            Start with simple subscriptions and add usage, invoicing, and tax as you grow, without changing your integration.
          </p>
          <div class="mt-12 grid gap-5 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                class="rounded-lg border border-[#e6ebf1] bg-white p-6 shadow-[0_2px_5px_-1px_rgba(50,50,93,0.25),0_1px_3px_-1px_rgba(0,0,0,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.3)]"
              >
                <span class="grid h-10 w-10 place-items-center rounded-md bg-[#635bff]/10 text-[#635bff]">
                  <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d={f.icon} />
                  </svg>
                </span>
                <h3 class="mt-4 text-[17px] font-medium text-[#0a2540]">{f.title}</h3>
                <p class="mt-1 text-[14px] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPERS SECTION */}
      <section id="developers" class="scroll-mt-16 bg-[#0a2540] py-24 text-white">
        <div class="mx-auto max-w-6xl px-6 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 class="text-[32px] font-light leading-[1.15] tracking-tight md:text-[40px]">
              Built for developers, readable by finance
            </h2>
            <p class="mt-4 max-w-xl text-[17px] leading-7 text-white/75">
              Create a customer, attach a plan, and bill them in a few lines. Every object has a test mode, so you can ship on day one.
            </p>
            <ul class="mt-6 space-y-2 text-[15px] text-white/90">
              <li>• Idempotent requests and signed webhooks</li>
              <li>• Pure Web Crypto PBKDF2 authentication</li>
              <li>• A full sandbox with simulated test clocks</li>
            </ul>
            <a href="/dashboard" class="btn btn-w mt-8">Explore Dashboard</a>
          </div>
          <div class="overflow-hidden rounded-lg bg-[#06182b] shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.3)]">
            <div class="flex gap-1 border-b border-white/10 px-3 pt-2">
              <span class="rounded-t-md px-3 py-1.5 text-[13px] font-medium bg-[#0a2540] text-white">TypeScript</span>
            </div>
            <pre class="overflow-x-auto p-5 font-mono text-[13px] leading-6 text-white/90">
              <code>{`// Zero external C++ dependencies
import { hashPassword, verifyPassword } from '@/lib/auth.js';

// PBKDF2-SHA256 with 100,000 iterations
const salt = crypto.getRandomValues(new Uint8Array(16));
const hash = await hashPassword('password123', salt);

// Verified in pure Web Crypto
const isValid = await verifyPassword('password123', salt, hash);`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" class="scroll-mt-16 py-24">
        <div class="mx-auto max-w-6xl px-6">
          <div class="text-center">
            <h2 class="text-[32px] font-light leading-[1.15] tracking-tight text-[#0a2540] md:text-[40px]">
              Pricing that scales with you
            </h2>
            <p class="mx-auto mt-4 max-w-md text-[17px]">
              Pay a percentage of volume you process. No setup fees, no monthly minimums.
            </p>
          </div>

          <div class="mt-12 grid items-stretch gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                class={`flex flex-col rounded-lg bg-white p-7 ${
                  p.popular
                    ? 'border-2 border-[#635bff] shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.3)]'
                    : 'border border-[#e6ebf1] shadow-[0_2px_5px_-1px_rgba(50,50,93,0.25),0_1px_3px_-1px_rgba(0,0,0,0.3)]'
                }`}
              >
                <div class="flex items-center justify-between">
                  <h3 class="text-[18px] font-medium text-[#0a2540]">{p.name}</h3>
                  {p.popular && <span class="bd bg-[#635bff]/10 text-[#635bff]">Most popular</span>}
                </div>
                <p class="mt-1 text-[14px]">{p.desc}</p>
                <p class="mt-5 text-[#0a2540]">
                  <span class="text-[44px] font-light">${p.price}</span>
                  <span class="text-[14px] text-[#425466]"> /month</span>
                </p>
                <ul class="my-6 flex-1 space-y-2.5 text-[14px]">
                  {p.features.map((feat) => (
                    <li key={feat} class="flex gap-2">
                      <svg class="mt-0.5 h-4 w-4 shrink-0 text-[#24b47e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <path d="m5 12 5 5 9-10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                <a href="/signup" class={`btn ${p.popular ? 'btn-p' : 'btn-o'} w-full`}>
                  {p.price ? `Choose ${p.name}` : 'Start free'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer class="border-t border-[#e6ebf1] bg-[#f6f9fc] py-14 text-[14px]">
        <div class="mx-auto max-w-6xl px-6 flex flex-wrap justify-between gap-6">
          <div>
            <p class="text-[20px] font-semibold tracking-tight text-[#635bff]">frootauth</p>
            <p class="mt-2 max-w-xs text-xs text-[#425466]">
              Stripe-inspired authentication and billing infrastructure powered by Preact & FrootKit.
            </p>
          </div>
          <div class="flex gap-12">
            <div>
              <p class="mb-3 font-medium text-[#0a2540]">Product</p>
              <ul class="space-y-2 text-xs">
                <li><a href="#features" class="hover:text-[#635bff]">Billing</a></li>
                <li><a href="#features" class="hover:text-[#635bff]">Invoicing</a></li>
                <li><a href="#pricing" class="hover:text-[#635bff]">Pricing</a></li>
              </ul>
            </div>
            <div>
              <p class="mb-3 font-medium text-[#0a2540]">Platform</p>
              <ul class="space-y-2 text-xs">
                <li><a href="/dashboard" class="hover:text-[#635bff]">Dashboard</a></li>
                <li><a href="/login" class="hover:text-[#635bff]">Sign In</a></li>
                <li><a href="/signup" class="hover:text-[#635bff]">Register</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
