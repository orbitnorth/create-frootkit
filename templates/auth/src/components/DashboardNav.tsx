export interface DashboardNavProps {
  currentPath?: string;
}

export function DashboardNav({ currentPath = '/dashboard' }: DashboardNavProps) {
  const navItems = [
    {
      href: '/dashboard',
      label: 'Overview',
      icon: (
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
    },
    {
      href: '/dashboard/telemetry',
      label: 'Telemetry',
      icon: (
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      href: '/dashboard/members',
      label: 'Members',
      icon: (
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      href: '/dashboard/billing',
      label: 'Billing',
      icon: (
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      ),
    },
    {
      href: '/dashboard/settings',
      label: 'Settings & Keys',
      icon: (
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
  ];

  const resourceItems = [
    {
      href: '/api/auth',
      label: 'Session API',
      badge: 'Live',
      icon: (
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m21 2-2 2m-2-2 2 2" />
          <path d="M15.5 8.5 7 17l-4 1 1-4 8.5-8.5a2.12 2.12 0 0 1 3 3z" />
        </svg>
      ),
    },
    {
      href: '/pricing',
      label: 'Public Pricing',
      icon: (
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      href: '/',
      label: 'Marketing Home',
      icon: (
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      <div
        id="sidebar-backdrop"
        onclick="window.toggleMobileSidebar && window.toggleMobileSidebar(false)"
        class="fixed inset-0 bg-[#0a2540]/40 backdrop-blur-xs z-40 hidden md:hidden transition-opacity"
        aria-hidden="true"
      />

      {/* Main Sidebar */}
      <aside
        id="dashboard-sidebar"
        class="fixed inset-y-0 left-0 z-50 w-60 -translate-x-full md:translate-x-0 md:static md:h-screen md:sticky md:top-0 border-r border-[#e6ebf1] bg-white p-3 flex flex-col justify-between shrink-0 shadow-xl md:shadow-none"
      >
        <div class="space-y-6">
          {/* Workspace Brand & Collapse Toggle */}
          <div class="px-2 pt-1 flex items-center justify-between sidebar-header-row">
            <a href="/" class="flex items-center gap-2.5 p-1 rounded-lg hover:bg-[#f6f9fc] transition-colors min-w-0">
              <div class="w-7 h-7 rounded-md bg-[#635bff]/10 border border-[#635bff]/20 flex items-center justify-center text-[#635bff] font-bold text-xs shrink-0">
                FA
              </div>
              <div class="truncate sidebar-label">
                <div class="text-xs font-semibold text-[#0a2540] truncate">Orbit Workspace</div>
                <div class="text-[10px] text-[#425466] truncate sidebar-subtext">US-East Production</div>
              </div>
            </a>

            {/* Desktop Collapse Toggle */}
            <button
              id="sidebar-collapse-btn"
              onclick="window.toggleSidebarCollapse && window.toggleSidebarCollapse()"
              class="hidden md:flex h-6 w-6 items-center justify-center rounded-md border border-[#e6ebf1] text-[#425466] hover:text-[#0a2540] hover:bg-[#f6f9fc] transition-colors"
              title="Toggle sidebar (Ctrl+B)"
              aria-label="Toggle sidebar collapse"
            >
              <svg id="collapse-icon" class="h-3.5 w-3.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Mobile Close Button */}
            <button
              onclick="window.toggleMobileSidebar && window.toggleMobileSidebar(false)"
              class="md:hidden p-1 rounded text-[#425466] hover:text-[#0a2540] hover:bg-[#f6f9fc]"
              aria-label="Close navigation"
            >
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Navigation Sections */}
          <div class="space-y-5">
            <div>
              <div class="px-2.5 mb-1.5 text-[11px] font-semibold text-[#425466]/70 uppercase tracking-wider sidebar-section-title">
                Platform
              </div>
              <nav class="space-y-0.5 text-xs font-medium">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    title={item.label}
                    data-nav-href={item.href}
                    class="sidebar-nav-link flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-[#425466] hover:text-[#0a2540] hover:bg-[#f6f9fc] transition-colors"
                  >
                    <span class="w-4 h-4 flex items-center justify-center shrink-0">
                      {item.icon}
                    </span>
                    <span class="sidebar-label truncate">{item.label}</span>
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <div class="px-2.5 mb-1.5 text-[11px] font-semibold text-[#425466]/70 uppercase tracking-wider sidebar-section-title">
                Resources
              </div>
              <nav class="space-y-0.5 text-xs font-medium">
                {resourceItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    title={item.label}
                    class="sidebar-nav-link flex items-center justify-between px-2.5 py-1.5 rounded-md text-[#425466] hover:text-[#0a2540] hover:bg-[#f6f9fc] transition-colors"
                  >
                    <div class="flex items-center gap-2.5 min-w-0">
                      <span class="w-4 h-4 flex items-center justify-center shrink-0">
                        {item.icon}
                      </span>
                      <span class="sidebar-label truncate">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span class="sidebar-label px-1.5 py-0.2 rounded text-[10px] font-semibold bg-[#24b47e]/15 text-[#0e6245]">
                        {item.badge}
                      </span>
                    )}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* User Footer Profile */}
        <div class="pt-3 border-t border-[#e6ebf1]">
          <div class="sidebar-profile-box flex items-center justify-between p-2 rounded-lg bg-[#f6f9fc] text-xs">
            <div class="flex items-center gap-2 min-w-0">
              <div
                id="user-avatar"
                class="w-7 h-7 rounded-full bg-[#635bff] text-white flex items-center justify-center text-xs font-semibold shrink-0 shadow-sm"
              >
                U
              </div>
              <div class="truncate sidebar-profile-info">
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
              class="sidebar-profile-signout text-[#425466] hover:text-[#cd3d64] p-1 transition-colors"
              title="Sign out"
            >
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </a>
          </div>
        </div>
      </aside>

      {/* Global Interactive Client State Handler */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              // 1. Sidebar Collapse State
              var sidebar = document.getElementById('dashboard-sidebar');
              var backdrop = document.getElementById('sidebar-backdrop');
              var collapseIcon = document.getElementById('collapse-icon');

              function applyCollapsedState(collapsed) {
                if (!sidebar) return;
                if (collapsed) {
                  sidebar.classList.add('sidebar-collapsed');
                  if (collapseIcon) collapseIcon.style.transform = 'rotate(180deg)';
                } else {
                  sidebar.classList.remove('sidebar-collapsed');
                  if (collapseIcon) collapseIcon.style.transform = 'rotate(0deg)';
                }
              }

              window.toggleSidebarCollapse = function() {
                if (!sidebar) return;
                var isCollapsed = sidebar.classList.contains('sidebar-collapsed');
                var nextState = !isCollapsed;
                applyCollapsedState(nextState);
                try { localStorage.setItem('froot_sidebar_collapsed', nextState ? '1' : '0'); } catch(e) {}
              };

              window.toggleMobileSidebar = function(open) {
                if (!sidebar || !backdrop) return;
                if (open) {
                  sidebar.classList.remove('-translate-x-full');
                  backdrop.classList.remove('hidden');
                } else {
                  sidebar.classList.add('-translate-x-full');
                  backdrop.classList.add('hidden');
                }
              };

              // Keyboard Shortcut: Ctrl+B or Cmd+B to toggle sidebar
              window.addEventListener('keydown', function(e) {
                if ((e.ctrlKey || e.metaKey) && (e.key === 'b' || e.key === 'B')) {
                  e.preventDefault();
                  window.toggleSidebarCollapse();
                }
                if (e.key === 'Escape') {
                  window.toggleMobileSidebar(false);
                }
              });

              try {
                if (localStorage.getItem('froot_sidebar_collapsed') === '1' && window.innerWidth >= 768) {
                  applyCollapsedState(true);
                }
              } catch(e) {}

              // 2. Active Route Highlighting
              var currPath = window.location.pathname;
              var links = document.querySelectorAll('[data-nav-href]');
              links.forEach(function(link) {
                var target = link.getAttribute('data-nav-href');
                if (target === currPath || (target !== '/dashboard' && currPath.startsWith(target))) {
                  link.classList.remove('text-[#425466]');
                  link.classList.add('bg-[#635bff]/10', 'text-[#635bff]', 'font-semibold');
                }
              });

              // 3. User Session Profile
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
                if (cached) updateUI(JSON.parse(cached));
              } catch(e) {}

              fetch('/api/auth')
                .then(function(res) {
                  if (!res.ok) {
                    try { localStorage.removeItem('froot_auth_user'); } catch(e) {}
                    if (window.location.pathname.startsWith('/dashboard')) {
                      window.location.href = '/login';
                    }
                    return null;
                  }
                  return res.json();
                })
                .then(function(data) {
                  if (data && data.authenticated && data.user) {
                    try { localStorage.setItem('froot_auth_user', JSON.stringify(data.user)); } catch(e) {}
                    updateUI(data.user);
                  } else {
                    try { localStorage.removeItem('froot_auth_user'); } catch(e) {}
                    if (window.location.pathname.startsWith('/dashboard')) {
                      window.location.href = '/login';
                    }
                  }
                })
                .catch(function() {});
            })();
          `,
        }}
      />
    </>
  );
}
