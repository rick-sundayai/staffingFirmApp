import { SignInForm } from '@/components/auth';
import Link from 'next/link';
import Image from 'next/image';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="relative h-12 w-12">
              <Image 
                src="/logo.svg" 
                alt="StaffingApp Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Welcome back</h1>
          <p className="mt-3 text-base text-gray-500">
            Sign in to access your StaffingApp dashboard
          </p>
        </div>
        
        <div className="bg-white py-8 px-6 shadow-xl rounded-xl ring-1 ring-gray-900/5">
          <SignInForm />
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/auth/signup" className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200">
                Create one now
              </Link>
            </p>
          </div>
        </div>
        
        <div className="mt-8">
          <div className="flex items-center justify-center space-x-6">
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
          <p className="mt-6 text-xs text-center text-gray-500">
            By signing in, you agree to our{' '}
            <a href="#" className="text-blue-600 hover:text-blue-500">Terms of Service</a>{' '}
            and{' '}
            <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}
