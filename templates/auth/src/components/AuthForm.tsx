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
          <div class="flex items-center justify-between mb-1.5">
            <div class="flex items-center gap-1.5 text-[#425466] text-[12px]">
              <span class="w-1.5 h-1.5 rounded-full bg-[#24b47e]" />
              <span class="font-medium text-[#0a2540]">Demo Account:</span>
            </div>
            <button
              type="button"
              onclick="var e=document.getElementById('email'),p=document.getElementById('password');if(e)e.value='admin@frootkit.dev';if(p)p.value='password123';"
              class="text-[11px] text-[#635bff] hover:underline font-semibold cursor-pointer"
            >
              Fill Demo Login
            </button>
          </div>
          <div class="font-mono text-[#0a2540] text-[12px] bg-white px-2.5 py-1 rounded border border-[#e6ebf1] flex items-center justify-between">
            <span>admin@frootkit.dev</span>
            <span class="text-[#425466]">/</span>
            <span>password123</span>
          </div>
        </div>
      )}

      {/* Error alert container */}
      <div
        id="auth-error"
        class="hidden mb-4 p-3 rounded-md bg-[#fff1f0] border border-[#ffccc7] text-[#cf1322] text-xs font-medium"
        role="alert"
      />

      <form
        id="auth-form"
        action={`/api/auth?action=${mode}`}
        method="POST"
        onsubmit={`
          event.preventDefault();
          var form = this;
          var errEl = document.getElementById('auth-error');
          var btn = document.getElementById('auth-submit-btn');
          if (errEl) { errEl.classList.add('hidden'); errEl.textContent = ''; }
          if (btn) { btn.disabled = true; btn.textContent = 'Please wait...'; }
          
          var payload = {
            email: form.email.value.trim(),
            password: form.password.value,
            name: form.name ? form.name.value.trim() : ''
          };
          
          fetch(form.action, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(payload)
          })
          .then(function(res) {
            return res.json().then(function(data) {
              if (!res.ok) {
                throw new Error(data.error || 'Authentication failed');
              }
              return data;
            });
          })
          .then(function(data) {
            if (data && data.user) {
              try { localStorage.setItem('froot_auth_user', JSON.stringify(data.user)); } catch(e) {}
            }
            window.location.href = '/dashboard';
          })
          .catch(function(err) {
            if (errEl) {
              errEl.textContent = err.message || 'Something went wrong';
              errEl.classList.remove('hidden');
            }
            if (btn) {
              btn.disabled = false;
              btn.textContent = '${isLogin ? 'Sign In' : 'Create Account'}';
            }
          });
        `}
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
            required
            class="inp"
          />
        </div>

        <button
          id="auth-submit-btn"
          type="submit"
          class="btn btn-p w-full py-2.5 text-sm font-medium mt-2 cursor-pointer"
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
