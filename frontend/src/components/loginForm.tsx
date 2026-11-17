"use client"

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MustardButtonNoIcon from "../ui/mustardButton-NoIcon";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const Icon = showPassword ? Eye : EyeOff;
  return (
    <form className="flex flex-col gap-4 bg-white p-4 rounded-xl shadow-md">
      <div className="flex flex-col gap-2">
        {/* Email or Matric Number */}
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold">Email or matric number</p>
          <input
            type="email"
            placeholder="ada@student.oauife.edu.ng or CSC/2023/101"
            className="w-full py-2 px-3 bg-background border border-outline rounded-xl placeholder:text-xs focus:ring-caramel"
          />
        </div>
        {/* Password */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <p className="text-xs font-semibold">Password</p>
            <Link
              className="text-xs font-semibold text-caramel cursor-pointer"
              href="/forgot-password"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full py-2 px-3 bg-background border border-outline rounded-xl placeholder:text-xs"
            />
            <Icon
              size={18}
              color="#1e2229"
              className="absolute top-2/7 right-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>
      </div>
      <MustardButtonNoIcon text="Log In"/>
    </form>
  );
}
