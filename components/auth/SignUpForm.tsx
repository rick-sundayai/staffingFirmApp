'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { createBrowserClient } from '@/lib/supabase/supabaseClient';

// Form validation schema using Zod
const signUpSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Password must be at least 6 characters'),
  fullName: z.string().min(2, 'Full name is required'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

export default function SignUpForm() {
  const router = useRouter();
  const [formValues, setFormValues] = useState<SignUpFormValues>({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
  });
  const [formErrors, setFormErrors] = useState<Partial<SignUpFormValues>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const supabase = createBrowserClient();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    
    // Clear error when user starts typing
    if (formErrors[name as keyof SignUpFormValues]) {
      setFormErrors({
        ...formErrors,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    
    // Validate form
    try {
      signUpSchema.parse(formValues);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Partial<SignUpFormValues> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            errors[err.path[0] as keyof SignUpFormValues] = err.message;
          }
        });
        setFormErrors(errors);
        return;
      }
    }

    setIsLoading(true);

    try {
      // Sign up the user
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: formValues.email,
        password: formValues.password,
        options: {
          data: {
            full_name: formValues.fullName,
          },
        },
      });

      if (signUpError) {
        setErrorMessage(signUpError.message);
        return;
      }

      // Check if email confirmation is required
      if (signUpData?.user && !signUpData.user.confirmed_at) {
        setSuccessMessage('Please check your email for a confirmation link to complete your registration.');
        return;
      }

      // If email confirmation is not required, create a profile
      if (signUpData?.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              id: signUpData.user.id,
              full_name: formValues.fullName,
              username: formValues.email.split('@')[0],
              updated_at: new Date().toISOString(),
            },
          ]);

        if (profileError) {
          console.error('Error creating profile:', profileError);
          // Continue anyway as the user is created
        }
      }

      // Redirect to dashboard or login page
      router.push('/auth/signin');
    } catch (error) {
      setErrorMessage('An unexpected error occurred. Please try again.');
      console.error('Sign up error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        
        {errorMessage && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            {successMessage}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            className={`shadow appearance-none border ${formErrors.fullName ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="fullName"
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formValues.fullName}
            onChange={handleChange}
            disabled={isLoading}
          />
          {formErrors.fullName && (
            <p className="text-red-500 text-xs italic mt-1">{formErrors.fullName}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className={`shadow appearance-none border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
            disabled={isLoading}
          />
          {formErrors.email && (
            <p className="text-red-500 text-xs italic mt-1">{formErrors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className={`shadow appearance-none border ${formErrors.password ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
            disabled={isLoading}
          />
          {formErrors.password && (
            <p className="text-red-500 text-xs italic mt-1">{formErrors.password}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className={`shadow appearance-none border ${formErrors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formValues.confirmPassword}
            onChange={handleChange}
            disabled={isLoading}
          />
          {formErrors.confirmPassword && (
            <p className="text-red-500 text-xs italic mt-1">{formErrors.confirmPassword}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
            disabled={isLoading || !!successMessage}
          >
            {isLoading ? 'Signing up...' : 'Sign Up'}
          </button>
        </div>
      </form>
    </div>
  );
}
