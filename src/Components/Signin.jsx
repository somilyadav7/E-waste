import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
import { signIn } from './Auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();

    if (email && password) {
      // Perform your sign-in logic here
      const user = signIn(email, password);

      if (user) {
        // Sign in successful
        toast.success('Sign in successful!', {
          // Toast configurations...
        });
        // Implement redirection or other actions upon successful sign-in
      } else {
        // Sign in failed
        toast.error('Invalid credentials. Please try again.', {
          // Toast configurations...
        });
      }
  
      console.log('Signing in with:', email, password);

      // Display success message using React Toastify
      
    }
  };

  return (
    <>
    <div className="flex items-center justify-center mt-10 ">
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-blue-700 text-center">Welcome back!</h1>
        <p className="text-lg mb-4 text-center">Please enter your details</p>
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-sm text-gray-600"
              >
                {showPassword ? 'Hide' : 'Show'} Password
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full">
              Sign In
            </button>
          </div>
          <p className="text-sm text-center mt-4">
            Forgot password? <Link to="#" className="text-blue-500 hover:underline">Reset here</Link>
          </p>
          <p className="mt-4">
          Dont have an account? <Link to='/signup' className="text-blue-500 hover:underline">Sign up</Link>
        </p>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
    <Footer/>
    </>
    
  );
};

export default SignIn;
