import React from "react";
import LoginForm from "../Components/LoginForm.jsx";
import { motion } from "framer-motion";

function PortalLogin() {
  return (
    <div className="w-full">

      <section className="bg-gradient-to-b from-blue-50 to-indigo-100 py-16">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
            Login to <span className="text-blue-600">Dashboard</span>
          </h2>
          <LoginForm />
        </motion.div>
      </section>

      {/* Certificate Download Section */}
      <section className="w-full py-16 bg-gradient-to-b from-blue-50 to-indigo-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Download Student <span className="text-blue-600">Certificate</span>
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-600 mb-6 text-center">
              Enter your details to download your certificate.
            </p>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="certificate-email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="certificate-email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-300 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="certificate-id"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Certificate ID
                </label>
                <input
                  type="text"
                  id="certificate-id"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-300 focus:border-transparent"
                  placeholder="Enter your certificate ID"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                Download Certificate
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PortalLogin;
