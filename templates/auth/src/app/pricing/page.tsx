import { Navbar } from '@/components/Navbar.js';

export const metadata = {
  title: 'Pricing & Plans — FrootAuth',
  description: 'Predictable volume pricing for billing and authentication infrastructure.',
};

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: 'forever free',
      desc: 'Ideal for prototyping, side projects, and first 100 customers.',
      badge: null,
      popular: false,
      features: [
        'Up to $10,000 in monthly volume',
        '2.9% + 30¢ per payment',
        'Pure Web Crypto PBKDF2 authentication',
        'Community Discord support',
        '1 production cluster',
      ],
      cta: 'Start Free',
      ctaClass: 'btn-o',
    },
    {
      name: 'Growth',
      price: '$49',
      period: 'per month',
      desc: 'For growing software companies scaling active revenue.',
      badge: 'Most Popular',
      popular: true,
      features: [
        'Up to $1,000,000 in monthly volume',
        '2.4% + 30¢ per payment',
        'Smart automated payment retries & dunning',
        'Usage-based billing & meters',
        '5,000,000 API invocations / mo',
        '10 team seats with granular RBAC',
        'Priority email support (4h SLA)',
      ],
      cta: 'Choose Growth',
      ctaClass: 'btn-p',
    },
    {
      name: 'Scale',
      price: '$199',
      period: 'per month',
      desc: 'For high-volume fintech and global SaaS platforms.',
      badge: 'Enterprise Grade',
      popular: false,
      features: [
        'Unlimited processing volume',
        'Custom negotiated interchange rates',
        'Multi-region global low-latency replication',
        '99.99% uptime SLA with financial backing',
        'SAML SSO & Okta directory sync',
        'Dedicated Slack channel & solution architect',
      ],
      cta: 'Contact Sales',
      ctaClass: 'btn-o',
    },
  ];

  const comparison = [
    { feature: 'Included Monthly Volume', starter: '$10k', growth: '$1M', scale: 'Unlimited' },
    { feature: 'Web Crypto PBKDF2 Auth', starter: '✓', growth: '✓', scale: '✓' },
    { feature: 'Role-Based Access Control', starter: 'Basic', growth: '10 Seats', scale: 'Unlimited' },
    { feature: 'Smart Automated Retries', starter: '—', growth: '✓', scale: '✓' },
    { feature: 'Usage-Based Invoicing', starter: '—', growth: '✓', scale: '✓' },
    { feature: 'SAML / Enterprise SSO', starter: '—', growth: '—', scale: '✓' },
    { feature: 'Guaranteed SLA', starter: 'Best effort', growth: '99.9%', scale: '99.99%' },
  ];

  return (
    <div class="min-h-screen bg-white text-[#425466] flex flex-col justify-between font-sans">
      <Navbar />

      <main class="pt-28 pb-20">
        {/* Hero Title */}
        <section class="max-w-6xl mx-auto px-6 text-center">
          <span class="bd bg-[#635bff]/10 text-[#635bff] mb-3">Transparent Infrastructure Pricing</span>
          <h1 class="text-4xl md:text-5xl font-light text-[#0a2540] tracking-tight max-w-2xl mx-auto mt-2">
            Pricing that keeps pace with your growth
          </h1>
          <p class="mt-4 max-w-lg mx-auto text-[#425466] text-base">
            No hidden setup fees. Pay only for volume and active scale. Free forever up to $10k monthly volume.
          </p>
        </section>

        {/* Pricing Cards Grid */}
        <section class="max-w-6xl mx-auto px-6 mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              class={`rounded-lg bg-white p-8 flex flex-col justify-between ${
                p.popular
                  ? 'border-2 border-[#635bff] shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.3)]'
                  : 'border border-[#e6ebf1] shadow-[0_2px_5px_-1px_rgba(50,50,93,0.25),0_1px_3px_-1px_rgba(0,0,0,0.3)]'
              }`}
            >
              <div>
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-lg font-semibold text-[#0a2540]">{p.name}</h3>
                  {p.badge && (
                    <span class="bd bg-[#635bff]/10 text-[#635bff]">
                      {p.badge}
                    </span>
                  )}
                </div>
                <p class="text-xs text-[#425466] mb-5">{p.desc}</p>
                <div class="mb-6 pb-6 border-b border-[#e6ebf1]">
                  <span class="text-4xl font-light text-[#0a2540]">{p.price}</span>
                  <span class="text-xs text-[#425466] ml-1">/ {p.period}</span>
                </div>

                <ul class="space-y-3 text-xs text-[#425466] mb-8">
                  {p.features.map((f) => (
                    <li key={f} class="flex items-center gap-2.5">
                      <svg class="h-3.5 w-3.5 text-[#24b47e] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="/signup" class={`btn ${p.ctaClass} w-full py-2.5 text-xs font-medium`}>
                {p.cta}
              </a>
            </div>
          ))}
        </section>

        {/* Feature Comparison Matrix */}
        <section class="max-w-5xl mx-auto px-6 mt-24">
          <div class="text-center mb-10">
            <h2 class="text-2xl font-light text-[#0a2540] tracking-tight">Detailed Feature Breakdown</h2>
            <p class="text-xs text-[#425466] mt-1">Side-by-side technical capabilities across each tier.</p>
          </div>

          <div class="rounded-lg border border-[#e6ebf1] bg-white overflow-hidden shadow-2xs">
            <table class="w-full text-left border-collapse text-xs">
              <thead>
                <tr class="border-b border-[#e6ebf1] bg-[#f6f9fc] text-[#425466] font-medium">
                  <th class="py-3 px-4">CAPABILITY</th>
                  <th class="py-3 px-4">STARTER</th>
                  <th class="py-3 px-4 text-[#635bff] font-semibold">GROWTH</th>
                  <th class="py-3 px-4">SCALE</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#e6ebf1]">
                {comparison.map((c) => (
                  <tr key={c.feature} class="hover:bg-[#f6f9fc]/50">
                    <td class="py-3 px-4 font-medium text-[#0a2540]">{c.feature}</td>
                    <td class="py-3 px-4 text-[#425466]">{c.starter}</td>
                    <td class="py-3 px-4 text-[#635bff] font-medium">{c.growth}</td>
                    <td class="py-3 px-4 text-[#425466]">{c.scale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Section */}
        <section class="max-w-4xl mx-auto px-6 mt-24">
          <div class="text-center mb-10">
            <h2 class="text-2xl font-light text-[#0a2540] tracking-tight">Frequently Asked Questions</h2>
            <p class="text-xs text-[#425466] mt-1">Everything you need to know about billing, security, and migration.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-5 rounded-lg border border-[#e6ebf1] bg-white shadow-2xs">
              <h4 class="text-sm font-semibold text-[#0a2540] mb-1.5">How does the 10k free tier work?</h4>
              <p class="text-xs text-[#425466] leading-relaxed">
                You pay zero subscription fees until your monthly processed revenue reaches $10,000. You still get access to full Web Crypto PBKDF2 authentication and the dashboard.
              </p>
            </div>
            <div class="p-5 rounded-lg border border-[#e6ebf1] bg-white shadow-2xs">
              <h4 class="text-sm font-semibold text-[#0a2540] mb-1.5">Can I upgrade or downgrade at any time?</h4>
              <p class="text-xs text-[#425466] leading-relaxed">
                Yes! Plan changes take effect immediately with prorated billing calculated down to the second on your next monthly statement.
              </p>
            </div>
            <div class="p-5 rounded-lg border border-[#e6ebf1] bg-white shadow-2xs">
              <h4 class="text-sm font-semibold text-[#0a2540] mb-1.5">Is my password hashing secure?</h4>
              <p class="text-xs text-[#425466] leading-relaxed">
                Yes. We run PBKDF2 with SHA-256 and 100,000 iterations using native W3C Web Cryptography API (`crypto.subtle`), without external binary C++ dependencies.
              </p>
            </div>
            <div class="p-5 rounded-lg border border-[#e6ebf1] bg-white shadow-2xs">
              <h4 class="text-sm font-semibold text-[#0a2540] mb-1.5">What happens if card payments fail?</h4>
              <p class="text-xs text-[#425466] leading-relaxed">
                Smart retries automatically re-attempt the charge at optimal card network windows and deliver hosted payment update links directly to customers.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer class="border-t border-[#e6ebf1] bg-[#f6f9fc] py-10 text-xs text-[#425466]">
        <div class="max-w-6xl mx-auto px-6 flex flex-wrap justify-between gap-4">
          <span><b>FrootAuth</b> · Billing &amp; Authentication Infrastructure</span>
          <div class="flex gap-4">
            <a href="/" class="hover:text-[#635bff]">Home</a>
            <a href="/pricing" class="hover:text-[#635bff]">Pricing</a>
            <a href="/features" class="hover:text-[#635bff]">Features</a>
            <a href="/dashboard" class="hover:text-[#635bff]">Dashboard</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
