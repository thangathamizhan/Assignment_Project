import React from "react";
import { BookOpen, Mail, Lock, User, LogIn, Eye, EyeOff } from "lucide-react";
import Label from "../components/Label";
import Button from "../components/Button";
import Input from "../components/Input";

const LoginForm = () => {
  return (
    <div className="min-h-screen flex justify-center bg-white  p-4 ">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center    mb-4">
            <div className="bg-blue-500 rounded-full p-2 ">
              <BookOpen className="h-8 w-8" />
            </div>
          </div>
          <h1 className="text-black font-bold text-3xl mb-4">Welcome Back</h1>
          <p className="text-gray-600 ">Sign in to your assignment portal</p>
        </div>
        <div className="p-8 bg-white shadow-md ">
          <Label className="text-sm">select Your Role</Label>
          <div className="grid grid-cols-2 gap-4 mb-4 mt-4">
            <Button
              variant="outline"
              className="flex justify-center space-x-2 items-center"
            >
              <User className="w-5 h-5" />
              <span> student</span>
            </Button>
            <Button
              variant="outline"
              className="flex justify-center items-center space-x-2"
            >
              <BookOpen className="w-5 h-5" />
              <span> teacher</span>
            </Button>
          </div>
          <Label htmlFor="email" className="text-sm mb-4">
            Email Adrress
          </Label>
          <div className="relative  mb-4">
            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 " />
            <Input
              className="w-full px-10 "
              type="email"
              id="email"
              placeholder="enter your email"
            />
          </div>
          <Label htmlFor="password" className="text-sm mb-4">
            Password
          </Label>
          <div className="relative mb-6">
            <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"/>
             <Input
              className="w-full px-10 "
              type="password"
              id="password"
              placeholder="enter your password"
            />
            <Eye className="w-5 h-5 absolute right-3 top-2.5 text-gray-400 hover:cursor-pointer" role="button"/>

          </div>
          <Button className="w-full">

            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
