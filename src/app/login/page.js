import React from 'react';

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12 bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <img
            className="mx-auto h-16 w-auto"
            src="https://media.istockphoto.com/id/1261265536/vector/abstract-success-people-stripe.jpg?s=612x612&w=0&k=20&c=tgK44CRdJ7i1YBmeZvAu9U9ee0xbdzToEJb6s96Y5yw="
            alt="Talent Logo"
          />
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Sign in to your account
          </h2>
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

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <a
                href="#"
                className="text-sm font-semibold text-orange-600 hover:text-orange-500"
              >
                Forgot Password?
              </a>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Not a member?{' '}
          <a
            href="/register"  // Updated href to navigate to the registration page
            className="font-semibold text-orange-600 hover:text-orange-500"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
