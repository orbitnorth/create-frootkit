export const metadata = {
  title: 'Billing & Invoices — FrootAuth',
  description: 'Manage subscription tiers, payment methods, and invoice receipts.',
};

export default function BillingPage() {
  const invoices = [
    { id: 'INV-2026-004', date: 'Oct 1, 2026', amount: '$49.00', status: 'Paid', method: 'Visa •••• 4242' },
    { id: 'INV-2026-003', date: 'Sep 1, 2026', amount: '$49.00', status: 'Paid', method: 'Visa •••• 4242' },
    { id: 'INV-2026-002', date: 'Aug 1, 2026', amount: '$49.00', status: 'Paid', method: 'Visa •••• 4242' },
    { id: 'INV-2026-001', date: 'Jul 1, 2026', amount: '$49.00', status: 'Paid', method: 'Visa •••• 4242' },
  ];

  return (
    <div class="space-y-8 max-w-6xl">
      {/* Page Header */}
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 class="text-2xl font-light text-[#0a2540] tracking-tight">Billing & Subscriptions</h2>
          <p class="text-sm text-[#425466] mt-1">Manage active workspace plan, billing limits, payment methods, and receipts.</p>
        </div>
        <div class="flex items-center gap-2">
          <a href="/pricing" class="btn btn-s text-xs py-2 px-3.5">
            Compare All Plans
          </a>
        </div>
      </div>

      {/* Plan & Usage Grid */}
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current Plan Overview Card */}
        <div class="rounded-lg border-2 border-[#635bff] bg-white p-6 shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.3)] flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-semibold uppercase tracking-wider text-[#635bff]">Current Plan</span>
              <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#24b47e]/15 text-[#0e6245]">
                Active
              </span>
            </div>
            <h3 class="text-3xl font-light text-[#0a2540]">Growth</h3>
            <p class="text-xs text-[#425466] mt-1">For teams scaling production revenue.</p>

            <div class="mt-4 pt-4 border-t border-[#e6ebf1]">
              <span class="text-3xl font-light text-[#0a2540]">$49</span>
              <span class="text-xs text-[#425466]"> / month · renews Nov 1, 2026</span>
            </div>

            <ul class="mt-5 space-y-2 text-xs text-[#425466]">
              <li class="flex items-center gap-2">
                <svg class="h-3.5 w-3.5 text-[#24b47e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Up to 5,000,000 API calls / month</span>
              </li>
              <li class="flex items-center gap-2">
                <svg class="h-3.5 w-3.5 text-[#24b47e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Smart automated payment retries</span>
              </li>
              <li class="flex items-center gap-2">
                <svg class="h-3.5 w-3.5 text-[#24b47e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>10 workspace team seats</span>
              </li>
            </ul>
          </div>

          <div class="mt-6 pt-4 border-t border-[#e6ebf1]">
            <button
              onclick="alert('Upgrade flow simulated! Choose Growth or Scale.')"
              class="btn btn-p w-full text-xs py-2"
            >
              Change Subscription Plan
            </button>
          </div>
        </div>

        {/* Resource Meter Progress Bars (2 columns) */}
        <div class="lg:col-span-2 rounded-lg border border-[#e6ebf1] bg-white p-6 shadow-2xs space-y-6">
          <div>
            <h3 class="text-sm font-semibold text-[#0a2540]">Monthly Usage & Quotas</h3>
            <p class="text-xs text-[#425466] mt-0.5">Track your volume against monthly quota allowances. Resets on Nov 1.</p>
          </div>

          <div class="space-y-4">
            {/* Meter 1: API Calls */}
            <div>
              <div class="flex items-center justify-between text-xs mb-1.5">
                <span class="font-medium text-[#0a2540]">API Invocations</span>
                <span class="text-[#425466] font-mono">3,420,000 / 5,000,000 (68.4%)</span>
              </div>
              <div class="h-2 w-full rounded-full bg-[#f6f9fc] border border-[#e6ebf1] overflow-hidden">
                <div class="h-full bg-[#635bff] rounded-full" style={{ width: '68.4%' }} />
              </div>
            </div>

            {/* Meter 2: Processed Volume */}
            <div>
              <div class="flex items-center justify-between text-xs mb-1.5">
                <span class="font-medium text-[#0a2540]">Monthly Processed Volume</span>
                <span class="text-[#425466] font-mono">$482,190 / $1,000,000 (48.2%)</span>
              </div>
              <div class="h-2 w-full rounded-full bg-[#f6f9fc] border border-[#e6ebf1] overflow-hidden">
                <div class="h-full bg-[#24b47e] rounded-full" style={{ width: '48.2%' }} />
              </div>
            </div>

            {/* Meter 3: Team Seats */}
            <div>
              <div class="flex items-center justify-between text-xs mb-1.5">
                <span class="font-medium text-[#0a2540]">Team Seats</span>
                <span class="text-[#425466] font-mono">5 / 10 seats (50%)</span>
              </div>
              <div class="h-2 w-full rounded-full bg-[#f6f9fc] border border-[#e6ebf1] overflow-hidden">
                <div class="h-full bg-[#00d4ff] rounded-full" style={{ width: '50%' }} />
              </div>
            </div>

            {/* Meter 4: Storage */}
            <div>
              <div class="flex items-center justify-between text-xs mb-1.5">
                <span class="font-medium text-[#0a2540]">Edge Storage</span>
                <span class="text-[#425466] font-mono">14.2 GB / 50 GB (28.4%)</span>
              </div>
              <div class="h-2 w-full rounded-full bg-[#f6f9fc] border border-[#e6ebf1] overflow-hidden">
                <div class="h-full bg-[#0a2540] rounded-full" style={{ width: '28.4%' }} />
              </div>
            </div>
          </div>

          {/* Payment Method Details */}
          <div class="pt-4 border-t border-[#e6ebf1] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <div class="h-8 w-12 rounded bg-[#0a2540] text-white flex items-center justify-center font-bold text-[10px] tracking-wider">
                VISA
              </div>
              <div>
                <div class="text-xs font-medium text-[#0a2540]">Visa ending in 4242</div>
                <div class="text-[11px] text-[#425466]">Expires 12/2028 · Default method</div>
              </div>
            </div>
            <button
              onclick="alert('Payment method modal simulated!')"
              class="btn btn-s text-xs py-1.5 px-3"
            >
              Update Payment Method
            </button>
          </div>
        </div>
      </div>

      {/* Invoice History Table Card */}
      <div class="rounded-lg border border-[#e6ebf1] bg-white overflow-hidden shadow-[0_2px_5px_-1px_rgba(50,50,93,0.25),0_1px_3px_-1px_rgba(0,0,0,0.3)]">
        <div class="p-5 border-b border-[#e6ebf1] flex items-center justify-between">
          <div>
            <h3 class="text-base font-medium text-[#0a2540]">Invoices & Receipts</h3>
            <p class="text-xs text-[#425466] mt-0.5">Download official tax invoices and payment confirmations.</p>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="border-b border-[#e6ebf1] bg-[#f6f9fc] text-[#425466] font-medium">
                <th class="py-3 px-4">INVOICE ID</th>
                <th class="py-3 px-4">DATE</th>
                <th class="py-3 px-4">AMOUNT</th>
                <th class="py-3 px-4">PAYMENT METHOD</th>
                <th class="py-3 px-4">STATUS</th>
                <th class="py-3 px-4 text-right">RECEIPT</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#e6ebf1]">
              {invoices.map((inv) => (
                <tr key={inv.id} class="hover:bg-[#f6f9fc]/80 transition-colors">
                  <td class="py-3 px-4 font-mono font-semibold text-[#0a2540]">{inv.id}</td>
                  <td class="py-3 px-4 text-[#425466]">{inv.date}</td>
                  <td class="py-3 px-4 font-semibold text-[#0a2540]">{inv.amount}</td>
                  <td class="py-3 px-4 text-[#425466] font-mono">{inv.method}</td>
                  <td class="py-3 px-4">
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#24b47e]/15 text-[#0e6245]">
                      {inv.status}
                    </span>
                  </td>
                  <td class="py-3 px-4 text-right">
                    <a
                      href="#"
                      onclick="event.preventDefault(); alert('Downloading ' + this.getAttribute('data-id') + '.pdf');"
                      data-id={inv.id}
                      class="text-xs text-[#635bff] hover:underline font-medium inline-flex items-center gap-1"
                    >
                      <svg class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      <span>PDF</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

