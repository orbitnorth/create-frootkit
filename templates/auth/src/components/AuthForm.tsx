export interface AuthFormProps {
  mode: 'login' | 'signup';
}

export function AuthForm({ mode }: AuthFormProps) {
  const isLogin = mode === 'login';

  return (
    <div class="rounded-xl border border-white/[0.08] bg-[#0f1117] p-7 sm:p-8 shadow-2xl shadow-black/50 relative overflow-hidden">
      {/* Top ambient highlight */}
      <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div class="mb-6">
        <h1 class="text-xl font-semibold text-white tracking-tight mb-1">
          {isLogin ? 'Sign in to workspace' : 'Create your account'}
        </h1>
        <p class="text-zinc-400 text-xs">
          {isLogin ? 'Need an account? ' : 'Already registered? '}
          <a href={isLogin ? '/signup' : '/login'} class="text-indigo-400 font-medium hover:text-indigo-300 transition-colors">
            {isLogin ? 'Sign up' : 'Sign in'}
          </a>
        </p>
      </div>

      {isLogin && (
        <div class="mb-5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs">
          <div class="flex items-center gap-1.5 text-zinc-400 text-[11px] mb-1">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span class="font-medium text-zinc-300">Quick Demo Credentials:</span>
          </div>
          <div class="font-mono text-zinc-300 text-[11px] bg-white/[0.03] px-2 py-1 rounded flex items-center justify-between">
            <span>admin@frootkit.dev</span>
            <span class="text-zinc-600">•</span>
            <span>password123</span>
          </div>
        </div>
      )}

      <form action={`/api/auth?action=${mode}`} method="POST" class="space-y-4">
        {!isLogin && (
          <div>
            <label class="block text-xs font-medium text-zinc-300 mb-1.5" for="name">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Developer Name"
              required
              class="w-full px-3 py-2 rounded-lg bg-[#08090a] border border-white/[0.08] text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
            />
          </div>
        )}

        <div>
          <label class="block text-xs font-medium text-zinc-300 mb-1.5" for="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="admin@frootkit.dev"
            defaultValue={isLogin ? 'admin@frootkit.dev' : ''}
            required
            class="w-full px-3 py-2 rounded-lg bg-[#08090a] border border-white/[0.08] text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
          />
        </div>

        <div>
          <div class="flex items-center justify-between mb-1.5">
            <label class="block text-xs font-medium text-zinc-300" for="password">
              Password
            </label>
            {isLogin && (
              <span class="text-[11px] text-zinc-500">
                min 8 characters
              </span>
            )}
          </div>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="••••••••••••"
            defaultValue={isLogin ? 'password123' : ''}
            required
            class="w-full px-3 py-2 rounded-lg bg-[#08090a] border border-white/[0.08] text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
          />
        </div>

        <button
          type="submit"
          class="w-full py-2.5 rounded-lg bg-white text-zinc-950 font-medium text-xs hover:bg-zinc-200 transition-all mt-3 flex items-center justify-center gap-2 group shadow-sm"
        >
          <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
          <span class="text-zinc-500 group-hover:translate-x-0.5 transition-transform">→</span>
        </button>
      </form>
    </div>
  );
}
