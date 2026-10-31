import { getBaseFiles } from './common.js';
import type { TemplateDefinition } from './types.js';

export const authTemplate: TemplateDefinition = {
  id: 'auth',
  name: 'SaaS & Authentication',
  description: 'Fullstack SaaS starter with login, signup, protected dashboard layout, and session API',
  generate: (projectName: string) => {
    const files = getBaseFiles(projectName);

    files['src/lib/auth.ts'] = `export interface UserSession {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member';
}

export const DEMO_USER: UserSession = {
  id: 'usr_01jk982',
  name: 'Sarah Connor',
  email: 'sarah@frootkit.dev',
  role: 'admin',
};

export function getSessionFromHeaders(headers: Headers): UserSession | null {
  const authHeader = headers.get('authorization');
  const cookie = headers.get('cookie') || '';

  if (authHeader?.startsWith('Bearer ') || cookie.includes('froot_session=')) {
    return DEMO_USER;
  }
  return null;
}
`;

    files['src/components/Navbar.tsx'] = `export function Navbar() {
  return (
    <header class="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" class="flex items-center gap-2.5 font-bold text-white text-lg tracking-tight hover:opacity-90">
          <span class="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-400 flex items-center justify-center text-slate-950 font-black text-sm">
            F
          </span>
          <span>Froot<span class="text-emerald-400">SaaS</span></span>
        </a>

        <nav class="flex items-center gap-6 text-sm font-medium">
          <a href="/dashboard" class="text-slate-300 hover:text-white transition-colors">
            Dashboard
          </a>
          <a href="/login" class="text-slate-300 hover:text-white transition-colors">
            Sign In
          </a>
          <a
            href="/signup"
            class="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
`;

    files['src/components/Sidebar.tsx'] = `export function Sidebar() {
  const links = [
    { label: 'Overview', href: '/dashboard', icon: '📊' },
    { label: 'Analytics', href: '/dashboard#analytics', icon: '📈' },
    { label: 'Team', href: '/dashboard#team', icon: '👥' },
    { label: 'API Keys', href: '/api/auth', icon: '🔑' },
    { label: 'Settings', href: '/dashboard#settings', icon: '⚙️' },
  ];

  return (
    <aside class="w-64 border-r border-slate-800/80 bg-slate-950/80 p-6 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2.5 font-bold text-white text-lg mb-8">
          <span class="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-black text-xs">
            F
          </span>
          <span>Workspace</span>
        </div>

        <nav class="space-y-1 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900/80 transition-colors"
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
      </div>

      <div class="pt-6 border-t border-slate-800/80 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center font-bold text-xs text-emerald-400">
            SC
          </div>
          <div class="text-xs">
            <div class="font-bold text-white">Sarah Connor</div>
            <div class="text-slate-500">Pro Plan</div>
          </div>
        </div>
        <a href="/login" class="text-slate-500 hover:text-rose-400 text-xs transition-colors" title="Sign out">
          &rarr;
        </a>
      </div>
    </aside>
  );
}
`;

    files['src/app/layout.tsx'] = `import type { ComponentChildren } from 'preact';

export interface RootLayoutProps {
  children: ComponentChildren;
  metadata?: {
    title?: string;
    description?: string;
  };
}

export default function RootLayout({ children, metadata }: RootLayoutProps) {
  const title = metadata?.title || 'FrootSaaS — Modern SaaS Starter';
  const description = metadata?.description || 'Fullstack SaaS kit with authentication, dashboard, and API routes.';

  return (
    <html lang="en" class="dark scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-[#030712] text-slate-100 min-h-screen antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}
`;

    files['src/app/page.tsx'] = `import { Navbar } from '../components/Navbar.js';

export const metadata = {
  title: 'FrootSaaS — Fullstack Auth & Dashboard Kit',
  description: 'Launch your next subscription SaaS product in minutes with FrootKit.',
};

export default function SaaSMarketingPage() {
  return (
    <div class="min-h-screen flex flex-col justify-between">
      <Navbar />

      <main class="max-w-5xl mx-auto px-6 py-20 text-center flex-1 flex flex-col justify-center">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-8 mx-auto">
          Production SaaS Template &bull; Preact SSR &bull; Auth Engine
        </div>

        <h1 class="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Launch Your Next App with{' '}
          <span class="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Built-In Auth & Dashboard
          </span>
        </h1>

        <p class="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Pre-configured sign-in, registration, nested dashboard layouts, and standard session API routes ready to connect to any database.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4 mb-20">
          <a
            href="/dashboard"
            class="px-7 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25"
          >
            Open Live Dashboard &rarr;
          </a>
          <a
            href="/login"
            class="px-7 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold hover:bg-slate-800 transition-all"
          >
            Try Sign In Flow
          </a>
        </div>

        {/* Feature Grid */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div class="p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
            <div class="text-2xl mb-3">🔐</div>
            <h3 class="font-bold text-white text-base mb-1">Session-Based Auth</h3>
            <p class="text-xs text-slate-400 leading-relaxed">
              Native API route handlers verifying headers and cookies without external dependencies.
            </p>
          </div>
          <div class="p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
            <div class="text-2xl mb-3">📊</div>
            <h3 class="font-bold text-white text-base mb-1">Nested Dashboard</h3>
            <p class="text-xs text-slate-400 leading-relaxed">
              Scoped sidebar navigation and layout hierarchy preserving state across pages.
            </p>
          </div>
          <div class="p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
            <div class="text-2xl mb-3">⚡</div>
            <h3 class="font-bold text-white text-base mb-1">Sub-Millisecond SSR</h3>
            <p class="text-xs text-slate-400 leading-relaxed">
              Instant Preact SSR with zero layout shifts and instant HTML delivery.
            </p>
          </div>
        </div>
      </main>

      <footer class="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
        &copy; 2026 FrootSaaS. Built with FrootKit.
      </footer>
    </div>
  );
}
`;

    files['src/app/login/page.tsx'] = `export const metadata = {
  title: 'Sign In — FrootSaaS',
  description: 'Log into your workspace account.',
};

export default function LoginPage() {
  return (
    <main class="min-h-screen flex items-center justify-center p-6 bg-slate-950">
      <div class="w-full max-w-md p-8 rounded-3xl border border-slate-800 bg-[#070b14] shadow-2xl">
        <div class="text-center mb-8">
          <a href="/" class="inline-flex items-center gap-2 font-bold text-white text-xl mb-4">
            <span class="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 font-black text-sm">
              F
            </span>
            <span>Froot<span class="text-emerald-400">SaaS</span></span>
          </a>
          <h1 class="text-2xl font-extrabold text-white tracking-tight">Welcome back</h1>
          <p class="text-xs text-slate-400 mt-1">Enter your credentials to access your dashboard</p>
        </div>

        <div class="p-3 mb-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 text-center font-mono">
          Demo: sarah@frootkit.dev / password
        </div>

        <form action="/dashboard" method="GET" class="space-y-4">
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1.5">Email address</label>
            <input
              type="email"
              name="email"
              value="sarah@frootkit.dev"
              required
              class="w-full px-3.5 py-2.5 rounded-xl border border-slate-800 bg-slate-900 text-sm text-white focus:outline-none focus:border-emerald-500 font-mono text-xs"
            />
          </div>

          <div>
            <div class="flex items-center justify-between mb-1.5">
              <label class="text-xs font-semibold text-slate-300">Password</label>
              <a href="#" class="text-xs text-emerald-400 hover:underline">Forgot password?</a>
            </div>
            <input
              type="password"
              name="password"
              value="••••••••••••"
              required
              class="w-full px-3.5 py-2.5 rounded-xl border border-slate-800 bg-slate-900 text-sm text-white focus:outline-none focus:border-emerald-500 text-xs"
            />
          </div>

          <button
            type="submit"
            class="w-full py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/25 mt-2"
          >
            Sign In &rarr;
          </button>
        </form>

        <div class="text-center text-xs text-slate-500 mt-6">
          Don't have an account?{' '}
          <a href="/signup" class="text-emerald-400 font-semibold hover:underline">Create an account</a>
        </div>
      </div>
    </main>
  );
}
`;

    files['src/app/signup/page.tsx'] = `export const metadata = {
  title: 'Sign Up — FrootSaaS',
  description: 'Create a new FrootSaaS workspace.',
};

export default function SignupPage() {
  return (
    <main class="min-h-screen flex items-center justify-center p-6 bg-slate-950">
      <div class="w-full max-w-md p-8 rounded-3xl border border-slate-800 bg-[#070b14] shadow-2xl">
        <div class="text-center mb-8">
          <a href="/" class="inline-flex items-center gap-2 font-bold text-white text-xl mb-4">
            <span class="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 font-black text-sm">
              F
            </span>
            <span>Froot<span class="text-emerald-400">SaaS</span></span>
          </a>
          <h1 class="text-2xl font-extrabold text-white tracking-tight">Create your account</h1>
          <p class="text-xs text-slate-400 mt-1">Start your 14-day free trial. No card required.</p>
        </div>

        <form action="/dashboard" method="GET" class="space-y-4">
          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1.5">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Sarah Connor"
              required
              class="w-full px-3.5 py-2.5 rounded-xl border border-slate-800 bg-slate-900 text-sm text-white focus:outline-none focus:border-emerald-500 text-xs"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1.5">Work Email</label>
            <input
              type="email"
              name="email"
              placeholder="sarah@company.com"
              required
              class="w-full px-3.5 py-2.5 rounded-xl border border-slate-800 bg-slate-900 text-sm text-white focus:outline-none focus:border-emerald-500 font-mono text-xs"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-300 mb-1.5">Password</label>
            <input
              type="password"
              name="password"
              placeholder="At least 8 characters"
              required
              class="w-full px-3.5 py-2.5 rounded-xl border border-slate-800 bg-slate-900 text-sm text-white focus:outline-none focus:border-emerald-500 text-xs"
            />
          </div>

          <button
            type="submit"
            class="w-full py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/25 mt-2"
          >
            Create Account &rarr;
          </button>
        </form>

        <div class="text-center text-xs text-slate-500 mt-6">
          Already have an account?{' '}
          <a href="/login" class="text-emerald-400 font-semibold hover:underline">Sign in</a>
        </div>
      </div>
    </main>
  );
}
`;

    files['src/app/dashboard/layout.tsx'] = `import type { ComponentChildren } from 'preact';
import { Sidebar } from '../../components/Sidebar.js';

export interface DashboardLayoutProps {
  children: ComponentChildren;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div class="flex min-h-screen bg-slate-950">
      <Sidebar />
      <div class="flex-1 flex flex-col">
        <header class="h-16 border-b border-slate-800/80 px-8 flex items-center justify-between bg-slate-950/40">
          <div class="text-xs font-mono text-slate-400">
            Environment: <span class="text-emerald-400 font-bold">production-us-east</span>
          </div>
          <div class="flex items-center gap-3 text-xs">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span class="text-slate-300 font-mono">System Healthy</span>
          </div>
        </header>
        <main class="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
`;

    files['src/app/dashboard/page.tsx'] = `import { DEMO_USER } from '../../lib/auth.js';

export const metadata = {
  title: 'Dashboard Overview — FrootSaaS',
  description: 'Manage your SaaS operations and monitor real-time metrics.',
};

export default function DashboardOverviewPage() {
  const metrics = [
    { label: 'Active Subscribers', value: '1,428', change: '+12.4%', isPositive: true },
    { label: 'Monthly Recurring', value: '$28,490', change: '+8.1%', isPositive: true },
    { label: 'Avg Latency (SSR)', value: '0.48ms', change: '-24%', isPositive: true },
    { label: 'Server Uptime', value: '99.99%', change: 'Normal', isPositive: true },
  ];

  const recentUsers = [
    { name: 'Sarah Connor', email: 'sarah@frootkit.dev', role: 'Owner', date: 'Just now' },
    { name: 'Michael Scott', email: 'm.scott@dunder.com', role: 'Editor', date: '2h ago' },
    { name: 'Elena Rostova', email: 'elena@solaris.io', role: 'Viewer', date: '5h ago' },
  ];

  return (
    <div class="max-w-5xl space-y-8">
      <div>
        <h1 class="text-3xl font-extrabold text-white tracking-tight">
          Welcome back, {DEMO_USER.name}
        </h1>
        <p class="text-xs text-slate-400 mt-1">
          Here is what is happening across your application today.
        </p>
      </div>

      {/* Metrics Grid */}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div key={m.label} class="p-5 rounded-2xl border border-slate-800 bg-[#070b14]">
            <div class="text-xs text-slate-400 mb-1">{m.label}</div>
            <div class="text-2xl font-black text-white">{m.value}</div>
            <div class="text-xs font-mono text-emerald-400 mt-2">{m.change} from last month</div>
          </div>
        ))}
      </div>

      {/* Recent Activity Table */}
      <div class="rounded-2xl border border-slate-800 bg-[#070b14] overflow-hidden">
        <div class="p-5 border-b border-slate-800 flex items-center justify-between">
          <h2 class="text-sm font-bold text-white">Recent Team Activity</h2>
          <a href="/api/auth" class="text-xs font-mono text-emerald-400 hover:underline">/api/auth &rarr;</a>
        </div>
        <div class="divide-y divide-slate-800/80">
          {recentUsers.map((u) => (
            <div key={u.email} class="p-4 flex items-center justify-between text-xs">
              <div>
                <div class="font-bold text-white">{u.name}</div>
                <div class="text-slate-500 font-mono">{u.email}</div>
              </div>
              <div class="flex items-center gap-4">
                <span class="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-mono">
                  {u.role}
                </span>
                <span class="text-slate-500">{u.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
`;

    files['src/app/api/auth/route.ts'] = `import { DEMO_USER } from '../../../lib/auth.js';

export async function GET(request: Request) {
  return Response.json({
    authenticated: true,
    user: DEMO_USER,
    sessionExpires: new Date(Date.now() + 86400 * 1000).toISOString(),
  });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const { email, password } = body as { email?: string; password?: string };

  if (email === 'sarah@frootkit.dev' && password === 'password') {
    return Response.json({
      success: true,
      token: 'frt_' + Math.random().toString(36).substring(2),
      user: DEMO_USER,
    });
  }

  return Response.json(
    { success: false, error: 'Invalid credentials. Use sarah@frootkit.dev / password' },
    { status: 401 }
  );
}
`;

    return files;
  },
};

