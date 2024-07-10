import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-96 p-8">
          <h2 className="text-3xl text-center font-bold text-white mb-6">Welcome back !</h2>
        
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 bg-gray-800 text-white rounded"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-400 mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-2 bg-gray-800 text-white rounded"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
              Sign in to your account
            </button>
          </form>
          <p className="mt-4 text-center text-gray-500">
            Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
      
      <div className="w-1/2 bg-blue-600 flex items-center justify-center">
  <div className="text-white p-8 max-w-2xl">
    <h1 className="text-4xl font-bold mb-6">Design Guidelines</h1>
    <h2 className="text-2xl font-semibold mb-4">
      Follow these principles to create outstanding designs:
    </h2>
    <ul className="space-y-4 mb-8">
      <li className="flex items-start">
        <svg className="w-6 h-6 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span>Maintain consistency across all elements and pages</span>
      </li>
      <li className="flex items-start">
        <svg className="w-6 h-6 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span>Use a clear visual hierarchy to guide users' attention</span>
      </li>
      <li className="flex items-start">
        <svg className="w-6 h-6 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span>Ensure accessibility with proper color contrast and text sizes</span>
      </li>
      <li className="flex items-start">
        <svg className="w-6 h-6 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span>Implement responsive design for various screen sizes</span>
      </li>
      <li className="flex items-start">
        <svg className="w-6 h-6 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span>Optimize loading times and performance</span>
      </li>
      <li className="flex items-start">
        <svg className="w-6 h-6 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span>Conduct user testing to refine and improve the design</span>
      </li>
    </ul>
    <p className="text-lg font-semibold">
      Following these guidelines will help ensure a high-quality, user-friendly design.
    </p>
  </div>
</div>
    </div>
  );
};

export default LoginForm;