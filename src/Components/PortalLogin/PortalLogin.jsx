import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePortalAuthentication } from "./PortalAuthentication";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const { loginPortal } = usePortalAuthentication();

  const validateForm = () => {
    const newErrors = {};
    if (!role) newErrors.role = "Role is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        await loginPortal(email, password, role);
        toast.success("Login successful!");
      } catch (error) {
        toast.error(error.message || "Login failed. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleRegister = async () => {
    if (!selectedOption) return;

    setIsRedirecting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(`Registering as ${selectedOption}`);
    } catch (error) {
      console.error("Registration failed", error);
    } finally {
      setIsRedirecting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row shadow-2xl rounded-xl overflow-hidden mx-auto max-w-6xl my-16">
      {/* New Partner Section */}
      <div className="relative w-full md:w-1/2 bg-indigo-500 p-10 flex flex-col justify-start items-start text-white">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-50"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        />
        <div className="relative w-full z-10">
          <h2 className="text-4xl font-bold mb-6">New to Our Platform?</h2>
          <p className="mb-8 text-lg">Choose your registration type:</p>

          <div className="flex justify-evenly w-full mb-8">
            <motion.div
              className={`flex-1 p-6 m-2 rounded-lg flex flex-col items-center justify-center transition-all cursor-pointer bg-white bg-opacity-50 ${
                selectedOption === "trainingPartner"
                  ? "bg-opacity-75 text-blue-600"
                  : "hover:bg-opacity-75"
              }`}
              onClick={() => setSelectedOption("trainingPartner")}
            >
              <svg
                className="w-12 h-12 mb-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold text-lg">Training Partner</span>
            </motion.div>
            <motion.div
              className={`flex-1 p-6 m-2 rounded-lg flex flex-col items-center justify-center transition-all cursor-pointer bg-white bg-opacity-50 ${
                selectedOption === "assessmentAgency"
                  ? "bg-opacity-75 text-blue-600"
                  : "hover:bg-opacity-75"
              }`}
              onClick={() => setSelectedOption("assessmentAgency")}
            >
              <svg
                className="w-12 h-12 mb-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold text-lg text-center">
                Assessment Agency
              </span>
            </motion.div>
          </div>
          <button
            className={`w-full py-3 px-6 bg-white text-blue-600 rounded-lg font-semibold text-lg transition duration-300 ${
              !selectedOption || isLoading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-50"
            }`}
            disabled={!selectedOption || isRedirecting}
            onClick={handleRegister}
          >
            {isRedirecting ? "Redirecting..." : "Register Now"}
          </button>
        </div>
      </div>

      {/* Login Form */}
      <div className="w-full md:w-1/2 p-10 bg-white">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="role"
            >
              Select Your Role
            </label>
            <select
              id="role"
              className={`w-full p-3 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
                errors.role ? "border-red-500" : "border-gray-300"
              }`}
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="trainingPartner">Training Partner</option>
              <option value="assessmentAgency">Assessment Agency</option>
              <option value="admin">Admin</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm mt-1">{errors.role}</p>
            )}
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className={`w-full p-3 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`w-full p-3 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <motion.button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
