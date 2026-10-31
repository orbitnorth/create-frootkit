export interface AuthFormProps {
  mode: 'login' | 'signup';
}

export function AuthForm({ mode }: AuthFormProps) {
  const isLogin = mode === 'login';

  return (
    <div class="rounded-lg border border-[#e6ebf1] bg-white p-7 sm:p-8 shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.3)]">
      <div class="mb-6">
        <h1 class="text-2xl font-light text-[#0a2540] tracking-tight mb-1">
          {isLogin ? 'Sign in to FrootAuth' : 'Create your account'}
        </h1>
        <p class="text-sm text-[#425466]">
          {isLogin ? 'Need an account? ' : 'Already registered? '}
          <a href={isLogin ? '/signup' : '/login'} class="text-[#635bff] font-medium hover:underline">
            {isLogin ? 'Sign up' : 'Sign in'}
          </a>
        </p>
      </div>

      {isLogin && (
        <div class="mb-5 p-3 rounded-md bg-[#f6f9fc] border border-[#e6ebf1] text-xs">
          <div class="flex items-center gap-1.5 text-[#425466] text-[12px] mb-1">
            <span class="w-1.5 h-1.5 rounded-full bg-[#24b47e]" />
            <span class="font-medium text-[#0a2540]">Demo Credentials:</span>
          </div>
          <div class="font-mono text-[#0a2540] text-[12px] bg-white px-2.5 py-1 rounded border border-[#e6ebf1] flex items-center justify-between">
            <span>admin@frootkit.dev</span>
            <span class="text-[#425466]">/</span>
            <span>password123</span>
          </div>
        </div>
      )}

      <form
        action={`/api/auth?action=${mode}`}
        method="POST"
        onsubmit="try{localStorage.setItem('froot_auth_user',JSON.stringify({email:this.email.value,name:this.name?this.name.value:''}))}catch(e){}"
        class="space-y-4"
      >
        {!isLogin && (
          <div>
            <label class="block text-xs font-medium text-[#0a2540] mb-1.5" for="name">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Jane Doe"
              required
              class="inp"
            />
          </div>
        )}

        <div>
          <label class="block text-xs font-medium text-[#0a2540] mb-1.5" for="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="you@company.com"
            defaultValue={isLogin ? 'admin@frootkit.dev' : ''}
            required
            class="inp"
          />
        </div>

        <div>
          <label class="block text-xs font-medium text-[#0a2540] mb-1.5" for="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="••••••••••••"
            defaultValue={isLogin ? 'password123' : ''}
            required
            class="inp"
          />
        </div>

        <button
          type="submit"
          class="btn btn-p w-full py-2.5 text-sm font-medium mt-2"
        >
          {isLogin ? 'Sign In' : 'Create Account'}
        </button>
      </form>

      <div class="mt-6 pt-4 border-t border-[#e6ebf1] text-center text-xs text-[#425466]">
        Protected by Web Crypto PBKDF2 with 100,000 iterations.
      </div>
    </div>
  );
}
