import { MetricCard } from '../../components/MetricCard.js';

export const metadata = {
  title: 'Workspace Overview — FrootSaaS',
};

export default function DashboardOverviewPage() {
  const metrics = [
    { label: 'Monthly Recurring Revenue', value: '$42,850', change: '+14.2%', isPositive: true },
    { label: 'Active Subscribers', value: '1,280', change: '+8.1%', isPositive: true },
    { label: 'API Requests (24h)', value: '3.42M', change: '+22.4%', isPositive: true },
    { label: 'Average Latency', value: '0.42ms', change: '-12.0%', isPositive: true },
  ];

  const recentUsers = [
    { name: 'Sarah Connor', email: 'sarah@frootkit.dev', role: 'Owner', date: 'Just now' },
    { name: 'John Doe', email: 'john@acme.corp', role: 'Developer', date: '2 hours ago' },
    { name: 'Alex Wong', email: 'alex@startup.io', role: 'Designer', date: '1 day ago' },
    { name: 'Maria Garcia', email: 'maria@scale.dev', role: 'Admin', date: '3 days ago' },
  ];

  return (
    <div class="space-y-8">
      <div>
        <h2 class="text-2xl font-bold text-white mb-1">Metrics & Operations</h2>
        <p class="text-xs text-slate-400">Real-time performance and subscriber growth analytics.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      <div class="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-sm">
        <h3 class="text-sm font-bold text-white mb-4">Recent Workspace Activity</h3>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs">
            <thead>
              <tr class="border-b border-slate-800 text-slate-500 font-mono">
                <th class="pb-3 font-semibold">User</th>
                <th class="pb-3 font-semibold">Email</th>
                <th class="pb-3 font-semibold">Role</th>
                <th class="pb-3 font-semibold">Time</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/60">
              {recentUsers.map((u) => (
                <tr key={u.email} class="hover:bg-slate-900/60">
                  <td class="py-3 font-medium text-white">{u.name}</td>
                  <td class="py-3 text-slate-400 font-mono">{u.email}</td>
                  <td class="py-3">
                    <span class="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono text-[10px]">
                      {u.role}
                    </span>
                  </td>
                  <td class="py-3 text-slate-500">{u.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
