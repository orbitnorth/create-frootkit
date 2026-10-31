import { Navbar } from '../../components/Navbar.js';
import { AuthForm } from '../../components/AuthForm.js';

export const metadata = {
  title: 'Create Account — FrootSaaS',
};

export default function SignupPage() {
  return (
    <div class="min-h-screen flex flex-col justify-between">
      <Navbar />

      <main class="max-w-md mx-auto px-6 py-16 flex-1 w-full flex flex-col justify-center">
        <AuthForm mode="signup" />
      </main>
    </div>
  );
}
