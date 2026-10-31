export interface AuthFormProps {
  mode: 'login' | 'signup';
}

export function AuthForm({ mode }: AuthFormProps) {
  const isLogin = mode === 'login';

  return (
    <div class="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl shadow-2xl">
      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold text-white mb-2">
          {isLogin ? 'Sign in to your account' : 'Create your account'}
        </h1>
        <p class="text-slate-400 text-xs">
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <a href={isLogin ? '/signup' : '/login'} class="text-emerald-400 font-semibold hover:underline">
            {isLogin ? 'Sign up' : 'Sign in'}
          </a>
        </p>
      </div>

      {isLogin && (
        <div class="mb-6 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center justify-between">
          <div>
            <span class="font-bold">Demo:</span> admin@frootkit.dev &bull; password123
          </div>
        </div>
      )}

      <form action={`/api/auth?action=${mode}`} method="POST" class="space-y-4">
        {!isLogin && (
          <div>
            <label class="block text-xs font-medium text-slate-300 mb-1.5">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Sarah Connor"
              required
              class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500"
            />
          </div>
        )}

        <div>
          <label class="block text-xs font-medium text-slate-300 mb-1.5">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="admin@frootkit.dev"
            defaultValue={isLogin ? 'admin@frootkit.dev' : ''}
            required
            class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label class="block text-xs font-medium text-slate-300 mb-1.5">Password</label>
          <input
            type="password"
            name="password"
            placeholder="••••••••••••"
            defaultValue={isLogin ? 'password123' : ''}
            required
            class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500"
          />
        </div>

        <button
          type="submit"
          class="w-full py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20 mt-2"
        >
          {isLogin ? 'Sign In &rarr;' : 'Create Account &rarr;'}
        </button>
      </form>
    </div>
  );
}
