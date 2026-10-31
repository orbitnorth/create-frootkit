import { MetricCard } from '@/components/MetricCard.js';

export const metadata = {
  title: 'Workspace Overview — FrootAuth',
};

export default function DashboardOverviewPage() {
  const metrics = [
    { label: 'Monthly Recurring Revenue', value: '$42,850', change: '+14.2%', isPositive: true },
    { label: 'Active Subscribers', value: '1,280', change: '+8.1%', isPositive: true },
    { label: 'API Invocations (24h)', value: '3.42M', change: '+22.4%', isPositive: true },
    { label: 'P99 Dispatch Latency', value: '0.42ms', change: '-12.0%', isPositive: true },
  ];

  const recentUsers = [
    { name: 'Sarah Connor', email: 'sarah@frootkit.dev', role: 'Owner', date: 'Just now', color: '#635bff' },
    { name: 'Marcus Chen', email: 'marcus@infra.org', role: 'Developer', date: '2 hours ago', color: '#0a2540' },
    { name: 'Elena Rostova', email: 'elena@design.io', role: 'Staff Eng', date: '1 day ago', color: '#00d4ff' },
    { name: 'Alex Rivera', email: 'alex@systems.net', role: 'Admin', date: '3 days ago', color: '#24b47e' },
  ];

  return (
    <div class="space-y-8 max-w-6xl">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 class="text-2xl font-light text-[#0a2540] tracking-tight">Metrics & Telemetry</h2>
          <p class="text-sm text-[#425466] mt-1">Real-time throughput and workspace subscriber analytics.</p>
        </div>
        <div class="flex items-center gap-2">
          <button class="btn btn-s text-xs py-1.5 px-3">
            <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Refresh</span>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <MetricCard
            key={m.label}
            label={m.label}
            value={m.value}
            change={m.change}
            isPositive={m.isPositive}
          />
        ))}
      </div>

      <div class="rounded-lg border border-[#e6ebf1] bg-white shadow-[0_2px_5px_-1px_rgba(50,50,93,0.25),0_1px_3px_-1px_rgba(0,0,0,0.3)] overflow-hidden">
        <div class="p-5 border-b border-[#e6ebf1] flex items-center justify-between">
          <div>
            <h3 class="text-base font-medium text-[#0a2540]">Recent Workspace Activity</h3>
            <p class="text-xs text-[#425466] mt-0.5">Active team member sessions and authentication audits</p>
          </div>
          <span class="bd bg-[#f6f9fc] text-[#425466] border border-[#e6ebf1]">
            {recentUsers.length} active sessions
          </span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs">
            <thead class="bg-[#f6f9fc] border-b border-[#e6ebf1] text-[#425466]">
              <tr>
                <th class="py-3 px-5 font-medium">User</th>
                <th class="py-3 px-5 font-medium">Email</th>
                <th class="py-3 px-5 font-medium">Role</th>
                <th class="py-3 px-5 font-medium text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#e6ebf1]">
              {recentUsers.map((u) => (
                <tr key={u.email} class="hover:bg-[#f6f9fc] transition-colors">
                  <td class="py-3.5 px-5">
                    <div class="flex items-center gap-2.5">
                      <div
                        class="w-7 h-7 rounded-full text-white flex items-center justify-center text-xs font-medium shrink-0"
                        style={`background-color: ${u.color}`}
                      >
                        {u.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <span class="font-medium text-[#0a2540]">{u.name}</span>
                    </div>
                  </td>
                  <td class="py-3.5 px-5 font-mono text-[#425466]">{u.email}</td>
                  <td class="py-3.5 px-5">
                    <span class={`bd ${
                      u.role === 'Owner'
                        ? 'bg-[#635bff]/10 text-[#635bff]'
                        : u.role === 'Admin'
                        ? 'bg-[#24b47e]/15 text-[#0e6245]'
                        : 'bg-[#f6f9fc] text-[#425466] border border-[#e6ebf1]'
                    }`}>
                      {u.role}
                    </span>
                  </td>
                  <td class="py-3.5 px-5 text-[#425466] text-right font-mono">{u.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
