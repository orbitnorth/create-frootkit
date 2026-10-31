export function DashboardNav() {
  return (
    <aside class="w-60 border-r border-[#e6ebf1] bg-white p-3 flex flex-col justify-between shrink-0 min-h-screen">
      <div class="space-y-6">
        {/* Workspace Brand */}
        <div class="px-2 pt-1">
          <a href="/" class="flex items-center gap-2.5 p-1.5 rounded-lg hover:bg-[#f6f9fc] transition-colors">
            <div class="w-7 h-7 rounded-md bg-[#635bff]/10 border border-[#635bff]/20 flex items-center justify-center text-[#635bff] font-bold text-xs shrink-0">
              FA
            </div>
            <div class="truncate">
              <div class="text-xs font-semibold text-[#0a2540] truncate">Orbit Workspace</div>
              <div class="text-[10px] text-[#425466] truncate">US-East Production</div>
            </div>
          </a>
        </div>

        {/* Navigation Sections */}
        <div class="space-y-4">
          <div>
            <div class="px-2.5 mb-1.5 text-[11px] font-semibold text-[#425466]/70 uppercase tracking-wider">
              Platform
            </div>
            <nav class="space-y-0.5 text-xs font-medium">
              <a
                href="/dashboard"
                class="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md bg-[#635bff]/10 text-[#635bff] font-semibold"
              >
                <span class="w-4 h-4 flex items-center justify-center shrink-0 text-[#635bff]">
                  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                </span>
                <span>Overview</span>
              </a>

              <a
                href="/dashboard#analytics"
                class="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-[#425466] hover:text-[#0a2540] hover:bg-[#f6f9fc] transition-colors"
              >
                <span class="w-4 h-4 flex items-center justify-center shrink-0 text-[#425466]">
                  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </span>
                <span>Telemetry</span>
              </a>

              <a
                href="/dashboard#team"
                class="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-[#425466] hover:text-[#0a2540] hover:bg-[#f6f9fc] transition-colors"
              >
                <span class="w-4 h-4 flex items-center justify-center shrink-0 text-[#425466]">
                  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>
                <span>Members</span>
              </a>

              <a
                href="/api/auth"
                class="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-[#425466] hover:text-[#0a2540] hover:bg-[#f6f9fc] transition-colors"
              >
                <span class="w-4 h-4 flex items-center justify-center shrink-0 text-[#425466]">
                  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m21 2-2 2m-2-2 2 2" />
                    <path d="M15.5 8.5 7 17l-4 1 1-4 8.5-8.5a2.12 2.12 0 0 1 3 3z" />
                  </svg>
                </span>
                <span>Session API</span>
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* User Footer Profile */}
      <div class="pt-3 border-t border-[#e6ebf1]">
        <div class="flex items-center justify-between p-2 rounded-lg bg-[#f6f9fc] text-xs">
          <div class="flex items-center gap-2 min-w-0">
            <div
              id="user-avatar"
              class="w-7 h-7 rounded-full bg-[#635bff] text-white flex items-center justify-center text-xs font-semibold shrink-0"
            >
              U
            </div>
            <div class="truncate">
              <div id="user-email" class="font-medium text-[#0a2540] truncate" title="user">
                Loading...
              </div>
              <div id="user-role" class="text-[10px] text-[#425466]">
                Member
              </div>
            </div>
          </div>
          <a
            href="/api/auth?action=logout"
            onclick="try{localStorage.removeItem('froot_auth_user')}catch(e){}"
            class="text-[#425466] hover:text-[#cd3d64] p-1 transition-colors"
            title="Sign out"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </a>
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function updateUI(user) {
                if (!user || !user.email) return;
                var email = user.email;
                var name = user.name || email.split('@')[0];
                var initials = (name.slice(0, 2) || email.slice(0, 2)).toUpperCase();
                var role = user.role === 'admin' ? 'Administrator' : (user.role ? (user.role.charAt(0).toUpperCase() + user.role.slice(1)) : 'Member');
                
                var avatarEl = document.getElementById('user-avatar');
                var emailEl = document.getElementById('user-email');
                var roleEl = document.getElementById('user-role');
                
                if (avatarEl) avatarEl.textContent = initials;
                if (emailEl) {
                  emailEl.textContent = email;
                  emailEl.title = email;
                }
                if (roleEl) roleEl.textContent = role;
              }

              try {
                var cached = localStorage.getItem('froot_auth_user');
                if (cached) {
                  updateUI(JSON.parse(cached));
                }
              } catch(e) {}

              fetch('/api/auth')
                .then(function(res) { return res.ok ? res.json() : null; })
                .then(function(data) {
                  if (data && data.authenticated && data.user) {
                    try { localStorage.setItem('froot_auth_user', JSON.stringify(data.user)); } catch(e) {}
                    updateUI(data.user);
                  }
                })
                .catch(function() {});
            })();
          `,
        }}
      />
    </aside>
  );
}
