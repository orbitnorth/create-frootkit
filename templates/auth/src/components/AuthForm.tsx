export interface AuthFormProps {
  mode: 'login' | 'signup';
}

export function AuthForm({ mode }: AuthFormProps) {
  const isLogin = mode === 'login';

  return (
    <div class="rounded-xl border border-[#1a2333] bg-[#0a0f18] p-8 shadow-xl">
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-white mb-1.5">
          {isLogin ? 'Sign in to workspace' : 'Create workspace account'}
        </h1>
        <p class="text-slate-400 text-xs">
          {isLogin ? "Need an account? " : 'Already registered? '}
          <a href={isLogin ? '/signup' : '/login'} class="text-emerald-400 font-semibold hover:underline">
            {isLogin ? 'Sign up' : 'Sign in'}
          </a>
        </p>
      </div>

      {isLogin && (
        <div class="mb-6 p-3 rounded-lg bg-[#06090f] border border-[#1a2333] text-xs text-slate-300 font-mono">
          <span class="text-emerald-400 font-bold block mb-0.5">Demo Credentials:</span>
          <span>admin@frootkit.dev &bull; password123</span>
        </div>
      )}

      <form action={`/api/auth?action=${mode}`} method="POST" class="space-y-4">
        {!isLogin && (
          <div>
            <label class="block text-xs font-mono font-medium text-slate-300 mb-1.5" for="name">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Developer Name"
              required
              class="w-full px-3.5 py-2 rounded-lg bg-[#06090f] border border-[#1a2333] text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        )}

        <div>
          <label class="block text-xs font-mono font-medium text-slate-300 mb-1.5" for="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="admin@frootkit.dev"
            defaultValue={isLogin ? 'admin@frootkit.dev' : ''}
            required
            class="w-full px-3.5 py-2 rounded-lg bg-[#06090f] border border-[#1a2333] text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>

        <div>
          <label class="block text-xs font-mono font-medium text-slate-300 mb-1.5" for="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="••••••••••••"
            defaultValue={isLogin ? 'password123' : ''}
            required
            class="w-full px-3.5 py-2 rounded-lg bg-[#06090f] border border-[#1a2333] text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>

        <button
          type="submit"
          class="w-full py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-colors mt-2"
        >
          {isLogin ? 'Sign In &rarr;' : 'Create Account &rarr;'}
        </button>
      </form>
    </div>
  );
}
