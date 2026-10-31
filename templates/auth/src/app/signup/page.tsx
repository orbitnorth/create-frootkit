import { AuthForm } from '@/components/AuthForm.js';

export const metadata = {
  title: 'Sign Up — FrootAuth',
};

export default function SignupPage() {
  return (
    <div class="min-h-screen bg-[#f6f9fc] text-[#425466] flex flex-col justify-between">
      <header class="border-b border-[#e6ebf1] bg-white py-4 px-6 flex items-center justify-between">
        <a href="/" class="text-[20px] font-semibold tracking-tight text-[#635bff]">
          frootauth
        </a>
        <a href="/" class="text-xs text-[#425466] hover:text-[#0a2540]">
          ← Back to home
        </a>
      </header>

      <main class="max-w-md mx-auto px-6 py-16 flex-1 w-full flex flex-col justify-center">
        <AuthForm mode="signup" />
      </main>

      <footer class="py-6 text-center text-xs text-[#425466]">
        FrootAuth · Web Crypto PBKDF2 Authentication
      </footer>
    </div>
  );
}
