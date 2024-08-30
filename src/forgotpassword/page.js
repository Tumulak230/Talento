import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12 bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <img
            className="mx-auto h-16 w-auto"
            src="/path/to/your/logo.png" // Update with your logo path
            alt="Talento Logo"
          />
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Forgot Your Password?
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your email address below and we'll send you a link to reset your password.
          </p>
        </div>

        <form className="mt-8 space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50"
          >
            Send Reset Link
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Remembered your password?{' '}
          <a
            href="/login"
            className="font-semibold text-orange-600 hover:text-orange-500"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
