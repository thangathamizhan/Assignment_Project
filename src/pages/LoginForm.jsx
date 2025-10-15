import React, { useContext, useState } from "react";
import { BookOpen, Mail, Lock, Eye } from "lucide-react";
import Label from "../components/Label";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { users } from "../Users";
import { UserInfo } from "../components/UseAuth";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "", role: "student" });
  const { login } = useContext(UserInfo);
  const [showVisibility, setVisibility] = useState(false);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUser = (e) => {
    e.preventDefault();

    const loggedInUser = users.find(
      (user) =>
        user.email === formData.email &&
        user.password === formData.password &&
        user.role === formData.role
    );

    if (loggedInUser) {
      login(loggedInUser);
      if (loggedInUser.role === "student") {
        navigate("/student_Dashboard");
      } else if (loggedInUser.role === "teacher") {
        navigate("/teacherDashBoard");
      }
    } else {
      alert("Invalid credentials or role mismatch");
    }
  };

  return (
    <div className="min-h-screen flex justify-center bg-white p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-500 rounded-full p-2">
              <BookOpen className="h-8 w-8" />
            </div>
          </div>
          <h1 className="text-black font-bold text-3xl mb-4">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your assignment portal</p>
        </div>
        <form className="p-8 bg-white shadow-md" onSubmit={handleUser}>
          {/* Role Selector */}
          <Label className="text-sm mb-2">Login as</Label>
          <div className="flex gap-6 mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="role"
                value="student"
                checked={formData.role === "student"}
                onChange={handleInput}
                className="cursor-pointer"
              />
              Student
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="role"
                value="teacher"
                checked={formData.role === "teacher"}
                onChange={handleInput}
                className="cursor-pointer"
              />
              Teacher
            </label>
          </div>

          <Label htmlFor="email" className="text-sm mb-2">
            Email Address
          </Label>
          <div className="relative mb-4">
            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input
              className="w-full px-10"
              type="email"
              id="email"
              onChange={handleInput}
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              required
            />
          </div>

          <Label htmlFor="password" className="text-sm mb-2">
            Password
          </Label>
          <div className="relative mb-6">
            <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input
              className="w-full px-10"
              type={showVisibility ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInput}
              id="password"
              placeholder="Enter your password"
              required
            />
            <Eye
              onClick={() => setVisibility(!showVisibility)}
              className="w-5 h-5 absolute right-3 top-2.5 text-gray-400 hover:cursor-pointer"
              role="button"
            />
          </div>

          <Button type="submit" className="w-full mb-4">
            Login
          </Button>

          <div className="flex justify-center gap-2">
            <p className="text-gray-500 text-sm text-center">
              If you are new to this page
            </p>
            {formData.role === "student" && (
              <Link to="/register" className="text-blue-600">
                Register here
              </Link>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
