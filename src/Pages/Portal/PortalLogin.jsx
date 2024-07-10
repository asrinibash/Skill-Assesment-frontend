import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../Components/LoginForm";

function PortalLogin() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-blue-100 to-indigo-300 text-gray-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
            Welcome to the Portal
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600">
            Access your account to manage your training and assessments, and
            download certificates.
          </p>
        </div>
      </section>

      <LoginForm />
      {/* Login Section */}
      {/* <section className="w-full py-12 md:py-24 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            // {/* Training Partner Login 
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Training Partner Login</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="training-email" className="block text-gray-700">Email</label>
                  <input type="email" id="training-email" className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div className="mb-6">
                  <label htmlFor="training-password" className="block text-gray-700">Password</label>
                  <input type="password" id="training-password" className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">Login</button>
              </form>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Assessment Partner Login</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="assessment-email" className="block text-gray-700">Email</label>
                  <input type="email" id="assessment-email" className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div className="mb-6">
                  <label htmlFor="assessment-password" className="block text-gray-700">Password</label>
                  <input type="password" id="assessment-password" className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">Login</button>
              </form>
            </div>
          </div>
        </div>
      </section> */}

      {/* Certificate Download Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-indigo-300 to-blue-100 text-gray-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Download Your Certificate</h2>
          <p className="text-xl mb-8 text-gray-600">
            Enter your details to download your certificate.
          </p>
          <form className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label
                htmlFor="certificate-email"
                className="block text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="certificate-email"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="certificate-id" className="block text-gray-700">
                Certificate ID
              </label>
              <input
                type="text"
                id="certificate-id"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Download
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default PortalLogin;
