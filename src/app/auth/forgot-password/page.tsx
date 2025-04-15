// forgot-password/page.tsx
import { Metadata } from 'next';
import ForgotPasswordForm from './ForgotPasswordForm'; // Importar el formulario

export const metadata: Metadata = {
  title: 'Forgot Password | TuApp',
  description: 'Page to recover your password by entering your email address.',
};

export default function ForgotPasswordPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row m-6 bg-white shadow-2xl rounded-2xl">
        <ForgotPasswordForm />
      </div>
    </div>
  );
}
