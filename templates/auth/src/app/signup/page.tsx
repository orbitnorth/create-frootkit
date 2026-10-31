import { Navbar } from '../../components/Navbar.js';
import { AuthForm } from '../../components/AuthForm.js';

export const metadata = {
  title: 'Create Account — FrootAuth',
};

export default function SignupPage() {
  return (
    <div class="min-h-screen bg-[#08090a] text-zinc-100 flex flex-col justify-between selection:bg-indigo-500/20 selection:text-indigo-300">
      <Navbar />

      <main class="max-w-md mx-auto px-6 py-16 flex-1 w-full flex flex-col justify-center">
        <AuthForm mode="signup" />
      </main>

      <footer class="py-6 text-center text-xs text-zinc-600">
        FrootAuth • Web Crypto PBKDF2 Authentication
      </footer>
    </div>
  );
}
