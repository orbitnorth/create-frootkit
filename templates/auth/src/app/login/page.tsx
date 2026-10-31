import { Navbar } from '../../components/Navbar.js';
import { AuthForm } from '../../components/AuthForm.js';

export const metadata = {
  title: 'Sign In — FrootAuth',
};

export default function LoginPage() {
  return (
    <div class="min-h-screen bg-[#06090f] text-slate-100 flex flex-col justify-between">
      <Navbar />

      <main class="max-w-md mx-auto px-6 py-16 flex-1 w-full flex flex-col justify-center">
        <AuthForm mode="login" />
      </main>
    </div>
  );
}
