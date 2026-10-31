export const metadata = {
  title: 'Team Members & RBAC — FrootAuth',
  description: 'Manage workspace access, roles, and administrative permissions.',
};

export default function MembersPage() {
  const members = [
    { name: 'Sarah Connor', email: 'sarah@frootkit.dev', role: 'Owner', badgeColor: '#635bff', tfa: true, active: 'Just now' },
    { name: 'Marcus Chen', email: 'marcus@infra.org', role: 'Developer', badgeColor: '#0a2540', tfa: true, active: '2 hours ago' },
    { name: 'Elena Rostova', email: 'elena@design.io', role: 'Staff Eng', badgeColor: '#00d4ff', tfa: true, active: '1 day ago' },
    { name: 'Alex Rivera', email: 'alex@systems.net', role: 'Admin', badgeColor: '#24b47e', tfa: false, active: '3 days ago' },
    { name: 'David Kim', email: 'david@fintech.co', role: 'Billing', badgeColor: '#c98a00', tfa: true, active: '5 days ago' },
  ];

  const permissions = [
    { role: 'Owner', billing: 'Full', apiKeys: 'Full', members: 'Full', logs: 'Full' },
    { role: 'Admin', billing: 'Read/Write', apiKeys: 'Full', members: 'Read/Write', logs: 'Full' },
    { role: 'Developer', billing: 'None', apiKeys: 'Read/Write', members: 'Read', logs: 'Full' },
    { role: 'Billing', billing: 'Full', apiKeys: 'None', members: 'None', logs: 'Read' },
  ];

  return (
    <div class="space-y-8 max-w-6xl">
      {/* Page Header */}
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 class="text-2xl font-light text-[#0a2540] tracking-tight">Team Members</h2>
          <p class="text-sm text-[#425466] mt-1">Manage team access, role assignments, and role-based permissions.</p>
        </div>
        <div class="flex items-center gap-2">
          <button
            onclick="document.getElementById('invite-dialog')?.showModal()"
            class="btn btn-p text-xs py-2 px-3.5 shadow-sm"
          >
            <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span>Invite Member</span>
          </button>
        </div>
      </div>

      {/* Interactive Invite Modal Dialog */}
      <dialog id="invite-dialog" class="m-auto rounded-lg border border-[#e6ebf1] bg-white p-6 shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.3)] max-w-md w-full backdrop:bg-[#0a2540]/40 backdrop:backdrop-blur-xs">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold text-[#0a2540]">Invite new team member</h3>
          <button
            onclick="document.getElementById('invite-dialog')?.close()"
            class="text-[#425466] hover:text-[#0a2540] p-1 rounded"
          >
            ✕
          </button>
        </div>
        <p class="text-xs text-[#425466] mb-4">
          An invitation email will be sent with access to this cluster.
        </p>
        <form onsubmit="event.preventDefault(); alert('Invitation simulated! Member added to invite queue.'); document.getElementById('invite-dialog')?.close();" class="space-y-4">
          <div>
            <label class="block text-xs font-medium text-[#0a2540] mb-1">Email Address</label>
            <input type="email" placeholder="colleague@company.com" required class="inp" />
          </div>
          <div>
            <label class="block text-xs font-medium text-[#0a2540] mb-1">Role</label>
            <select class="inp">
              <option value="developer">Developer (API Keys & Logs)</option>
              <option value="admin">Administrator (Full Access except billing)</option>
              <option value="billing">Billing Specialist (Invoices & Plans)</option>
            </select>
          </div>
          <div class="flex items-center justify-end gap-2 pt-2">
            <button type="button" onclick="document.getElementById('invite-dialog')?.close()" class="btn btn-s text-xs py-2 px-3">
              Cancel
            </button>
            <button type="submit" class="btn btn-p text-xs py-2 px-4">
              Send Invitation
            </button>
          </div>
        </form>
      </dialog>

      {/* Members Filter & Table Card */}
      <div class="rounded-lg border border-[#e6ebf1] bg-white overflow-hidden shadow-[0_2px_5px_-1px_rgba(50,50,93,0.25),0_1px_3px_-1px_rgba(0,0,0,0.3)]">
        <div class="p-4 sm:p-5 border-b border-[#e6ebf1] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#f6f9fc]/50">
          <div class="relative max-w-xs w-full">
            <svg class="absolute left-3 top-2.5 h-3.5 w-3.5 text-[#425466]/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              id="member-search"
              type="text"
              placeholder="Search members by name or email..."
              class="inp pl-8 text-xs py-1.5"
              oninput="var q = this.value.toLowerCase(); document.querySelectorAll('.member-row').forEach(function(r) { r.style.display = r.textContent.toLowerCase().includes(q) ? '' : 'none'; });"
            />
          </div>
          <div class="flex items-center gap-2 text-xs text-[#425466]">
            <span>5 Active Members</span>
            <span class="text-[#e6ebf1]">|</span>
            <span>5 Available Seats</span>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="border-b border-[#e6ebf1] bg-[#f6f9fc] text-[#425466] font-medium">
                <th class="py-3 px-4">MEMBER</th>
                <th class="py-3 px-4">ROLE</th>
                <th class="py-3 px-4">SECURITY (2FA)</th>
                <th class="py-3 px-4">LAST ACTIVE</th>
                <th class="py-3 px-4 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#e6ebf1]">
              {members.map((m) => {
                const initials = m.name.split(' ').map((n) => n[0]).join('');
                return (
                  <tr key={m.email} class="member-row hover:bg-[#f6f9fc]/80 transition-colors">
                    <td class="py-3.5 px-4">
                      <div class="flex items-center gap-2.5">
                        <div
                          class="w-7 h-7 rounded-full text-white flex items-center justify-center text-xs font-semibold shrink-0"
                          style={{ backgroundColor: m.badgeColor }}
                        >
                          {initials}
                        </div>
                        <div>
                          <div class="font-medium text-[#0a2540]">{m.name}</div>
                          <div class="text-[11px] text-[#425466] font-mono">{m.email}</div>
                        </div>
                      </div>
                    </td>
                    <td class="py-3.5 px-4">
                      <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#635bff]/10 text-[#635bff]">
                        {m.role}
                      </span>
                    </td>
                    <td class="py-3.5 px-4">
                      {m.tfa ? (
                        <span class="inline-flex items-center gap-1 text-[11px] text-[#0e6245] font-medium">
                          <svg class="h-3.5 w-3.5 text-[#24b47e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                          Enabled
                        </span>
                      ) : (
                        <span class="text-[11px] text-[#cd3d64] font-medium">Not enabled</span>
                      )}
                    </td>
                    <td class="py-3.5 px-4 text-[#425466]">{m.active}</td>
                    <td class="py-3.5 px-4 text-right">
                      <button
                        onclick="alert('Managing role for ' + this.getAttribute('data-email'))"
                        data-email={m.email}
                        class="text-xs text-[#635bff] hover:underline font-medium"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Permissions Matrix Reference */}
      <div class="rounded-lg border border-[#e6ebf1] bg-white p-6 shadow-2xs">
        <h3 class="text-sm font-semibold text-[#0a2540] mb-1">Role Permissions Matrix</h3>
        <p class="text-xs text-[#425466] mb-4">Granular capabilities assigned to each role level.</p>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="border-b border-[#e6ebf1] text-[#425466] font-medium">
                <th class="py-2 px-3">ROLE</th>
                <th class="py-2 px-3">BILLING & INVOICES</th>
                <th class="py-2 px-3">API KEYS & SECRETS</th>
                <th class="py-2 px-3">MEMBERSHIP</th>
                <th class="py-2 px-3">SYSTEM TELEMETRY</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#e6ebf1]">
              {permissions.map((p) => (
                <tr key={p.role} class="hover:bg-[#f6f9fc]/50">
                  <td class="py-2.5 px-3 font-semibold text-[#0a2540]">{p.role}</td>
                  <td class="py-2.5 px-3 text-[#425466]">{p.billing}</td>
                  <td class="py-2.5 px-3 text-[#425466]">{p.apiKeys}</td>
                  <td class="py-2.5 px-3 text-[#425466]">{p.members}</td>
                  <td class="py-2.5 px-3 text-[#425466]">{p.logs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
