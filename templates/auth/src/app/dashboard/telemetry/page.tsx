export const metadata = {
  title: 'Real-Time Telemetry — FrootAuth',
  description: 'Sub-millisecond Preact SSR throughput telemetry and system metrics.',
};

export default function TelemetryPage() {
  const regions = [
    { name: 'US-East (N. Virginia)', latency: '0.28ms', traffic: '48%', status: 'Optimal' },
    { name: 'EU-Central (Frankfurt)', latency: '0.41ms', traffic: '32%', status: 'Optimal' },
    { name: 'AP-Southeast (Singapore)', latency: '0.64ms', traffic: '20%', status: 'Optimal' },
  ];

  const recentLogs = [
    { id: 'req_8921a', method: 'GET', path: '/api/auth', status: 200, duration: '0.38ms', ip: '198.51.100.24', time: '1s ago' },
    { id: 'req_8920f', method: 'POST', path: '/api/auth?action=login', status: 200, duration: '14.2ms', ip: '203.0.113.195', time: '4s ago' },
    { id: 'req_8919c', method: 'GET', path: '/dashboard/telemetry', status: 200, duration: '0.45ms', ip: '198.51.100.24', time: '12s ago' },
    { id: 'req_8918e', method: 'GET', path: '/dashboard/members', status: 200, duration: '0.39ms', ip: '192.0.2.88', time: '28s ago' },
    { id: 'req_8917b', method: 'POST', path: '/api/auth?action=login', status: 401, duration: '12.8ms', ip: '198.51.100.12', time: '1m ago' },
    { id: 'req_8916d', method: 'GET', path: '/dashboard', status: 200, duration: '0.42ms', ip: '203.0.113.4', time: '2m ago' },
  ];

  return (
    <div class="space-y-8 max-w-6xl">
      {/* Page Header */}
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 class="text-2xl font-light text-[#0a2540] tracking-tight">Real-Time Telemetry</h2>
          <p class="text-sm text-[#425466] mt-1">Live throughput, edge latency breakdown, and HTTP invocation logs.</p>
        </div>
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#24b47e]/15 text-[#0e6245] text-xs font-medium">
            <span class="w-2 h-2 rounded-full bg-[#24b47e] animate-ping" />
            Live Stream Active
          </span>
        </div>
      </div>

      {/* Latency Curve Graph Card */}
      <div class="rounded-lg border border-[#e6ebf1] bg-white p-6 shadow-[0_2px_5px_-1px_rgba(50,50,93,0.25),0_1px_3px_-1px_rgba(0,0,0,0.3)]">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h3 class="text-sm font-semibold text-[#0a2540]">P99 Edge Latency (Last 60 Minutes)</h3>
            <p class="text-xs text-[#425466]">Sub-millisecond Preact SSR dispatch benchmarked across all global regions.</p>
          </div>
          <div class="text-right">
            <span class="font-mono text-xl font-light text-[#0a2540]">0.42ms</span>
            <span class="block text-[11px] text-[#24b47e] font-medium">-18.4% vs last hour</span>
          </div>
        </div>

        {/* SVG Sparkline / Area Graph */}
        <div class="h-44 w-full">
          <svg viewBox="0 0 600 150" class="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="telemetryGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#635bff" stop-opacity="0.35" />
                <stop offset="100%" stop-color="#635bff" stop-opacity="0.0" />
              </linearGradient>
            </defs>
            {/* Horizontal Grid lines */}
            <line x1="0" y1="35" x2="600" y2="35" stroke="#e6ebf1" stroke-dasharray="3,3" />
            <line x1="0" y1="75" x2="600" y2="75" stroke="#e6ebf1" stroke-dasharray="3,3" />
            <line x1="0" y1="115" x2="600" y2="115" stroke="#e6ebf1" stroke-dasharray="3,3" />

            {/* Shaded Area */}
            <path
              d="M0,110 Q40,95 80,105 T160,80 T240,85 T320,60 T400,65 T480,45 T560,50 L600,40 L600,150 L0,150 Z"
              fill="url(#telemetryGradient)"
            />
            {/* Curve Stroke */}
            <path
              d="M0,110 Q40,95 80,105 T160,80 T240,85 T320,60 T400,65 T480,45 T560,50 L600,40"
              fill="none"
              stroke="#635bff"
              stroke-width="2.5"
              stroke-linecap="round"
            />
          </svg>
        </div>

        <div class="flex items-center justify-between text-[11px] text-[#425466]/70 mt-3 pt-3 border-t border-[#e6ebf1]">
          <span>60m ago</span>
          <span>45m ago</span>
          <span>30m ago</span>
          <span>15m ago</span>
          <span class="font-semibold text-[#0a2540]">Now</span>
        </div>
      </div>

      {/* Global Regional Latency Grid */}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        {regions.map((reg) => (
          <div key={reg.name} class="rounded-lg border border-[#e6ebf1] bg-white p-5 shadow-2xs">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-[#0a2540]">{reg.name}</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#24b47e]/15 text-[#0e6245]">
                {reg.status}
              </span>
            </div>
            <div class="mt-4 flex items-baseline justify-between">
              <div>
                <span class="text-2xl font-light text-[#0a2540] font-mono">{reg.latency}</span>
                <span class="text-xs text-[#425466] ml-1">p99</span>
              </div>
              <span class="text-xs text-[#425466]">{reg.traffic} of traffic</span>
            </div>
          </div>
        ))}
      </div>

      {/* Request Inspection Stream Table */}
      <div class="rounded-lg border border-[#e6ebf1] bg-white overflow-hidden shadow-[0_2px_5px_-1px_rgba(50,50,93,0.25),0_1px_3px_-1px_rgba(0,0,0,0.3)]">
        <div class="p-5 border-b border-[#e6ebf1] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 class="text-base font-medium text-[#0a2540]">Live Invocation Stream</h3>
            <p class="text-xs text-[#425466] mt-0.5">Sub-second HTTP request inspections and execution durations.</p>
          </div>
          <div class="flex items-center gap-1.5 text-xs">
            <button class="px-2.5 py-1 rounded bg-[#0a2540] text-white font-medium">All</button>
            <button class="px-2.5 py-1 rounded hover:bg-[#f6f9fc] text-[#425466]">2xx Success</button>
            <button class="px-2.5 py-1 rounded hover:bg-[#f6f9fc] text-[#425466]">4xx / 5xx</button>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="border-b border-[#e6ebf1] bg-[#f6f9fc] text-[#425466] font-medium">
                <th class="py-3 px-4">REQUEST ID</th>
                <th class="py-3 px-4">METHOD</th>
                <th class="py-3 px-4">PATH</th>
                <th class="py-3 px-4">STATUS</th>
                <th class="py-3 px-4">DURATION</th>
                <th class="py-3 px-4">CLIENT IP</th>
                <th class="py-3 px-4 text-right">TIME</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#e6ebf1]">
              {recentLogs.map((log) => (
                <tr key={log.id} class="hover:bg-[#f6f9fc]/80 transition-colors font-mono">
                  <td class="py-3 px-4 text-[#635bff] font-semibold">{log.id}</td>
                  <td class="py-3 px-4">
                    <span class={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      log.method === 'POST' ? 'bg-[#635bff]/10 text-[#635bff]' : 'bg-[#0a2540]/10 text-[#0a2540]'
                    }`}>
                      {log.method}
                    </span>
                  </td>
                  <td class="py-3 px-4 text-[#0a2540] font-sans font-medium">{log.path}</td>
                  <td class="py-3 px-4">
                    <span class={`px-2 py-0.5 rounded-full text-[10px] font-bold font-sans ${
                      log.status === 200
                        ? 'bg-[#24b47e]/15 text-[#0e6245]'
                        : 'bg-[#cd3d64]/15 text-[#cd3d64]'
                    }`}>
                      {log.status} {log.status === 200 ? 'OK' : 'Unauthorized'}
                    </span>
                  </td>
                  <td class="py-3 px-4 text-[#0a2540]">{log.duration}</td>
                  <td class="py-3 px-4 text-[#425466]">{log.ip}</td>
                  <td class="py-3 px-4 text-right text-[#425466] font-sans">{log.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

