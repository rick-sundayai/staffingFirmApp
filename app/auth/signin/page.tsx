import { SignInForm } from '@/components/auth';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <h1 className="text-center text-3xl font-extrabold text-gray-900">Welcome Back</h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to access your StaffingApp dashboard
          </p>
        </div>
        
        <SignInForm />
        
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <Link href="/auth/signup" className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200">
              Create one now
            </Link>
          </p>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600">Secure login</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
