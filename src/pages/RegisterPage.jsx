import React, { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student", // fixed role as student
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const emailExists = existingUsers.some(
      (user) => user.email.toLowerCase() === formData.email.toLowerCase()
    );

    if (emailExists) {
      alert("This email is already registered.");
      return;
    }

    const updatedUsers = [...existingUsers, formData];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Registration successful! You can now login.");
    // Optionally reset form or redirect to login page here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create a Student Account</h2>

        <form onSubmit={handleRegister}>
          {/* Name Field */}
          <div className="mb-4 relative">
            <User className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4 relative">
            <Mail className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6 relative">
            <Lock className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {showPassword ? (
              <EyeOff
                className="absolute right-3 top-2.5 text-gray-400 w-5 h-5 cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <Eye
                className="absolute right-3 top-2.5 text-gray-400 w-5 h-5 cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
