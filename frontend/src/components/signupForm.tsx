"use client";

import { ArrowLeft, ArrowRight, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SignupForm({
  setSection,
  section,
}: {
  setSection: (section: number) => void;
  section: number;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const Icon = showPassword ? Eye : EyeOff;

  return (
    <form className="flex flex-col gap-4 bg-white p-4 rounded-xl shadow-md">
      {/* Form 1 */}
      <div
        className={`flex flex-col gap-4 ${section === 1 ? "block" : "hidden"}`}
      >
        <div className="flex flex-col gap-2">
          {/* Full name */}
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold">Full name</p>
            <input
              type="text"
              placeholder="Ada Lovelace"
              className="w-full py-2 px-3 bg-background border border-outline rounded-xl placeholder:text-xs"
            />
          </div>
          {/* Email */}
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold">Email</p>
            <input
              type="email"
              placeholder="ada@student.oauife.edu.ng"
              className="w-full py-2 px-3 bg-background border border-outline rounded-xl placeholder:text-xs"
            />
          </div>
          {/* Matric Number */}
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold">Matric Number</p>
            <input
              type="text"
              placeholder="CSC/2023/101"
              className="w-full py-2 px-3 bg-background border border-outline rounded-xl placeholder:text-xs"
            />
          </div>
          {/* Phone Number */}
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold">Phone Number</p>
            <input
              type="text"
              placeholder="0801 234 5678"
              className="w-full py-2 px-3 bg-background border border-outline rounded-xl placeholder:text-xs"
            />
          </div>
          {/* WhatsApp Number */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold">WhatsApp Number</p>
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  name="whatsapp"
                  id="whatsapp"
                  className="accent-caramel"
                />
                <p className="text-xs text-outline-strong">
                  Same as phone number
                </p>
              </div>
            </div>
            <input
              type="text"
              placeholder="0801 234 5678"
              className="w-full py-2 px-3 bg-background border border-outline rounded-xl placeholder:text-xs"
            />
          </div>
        </div>
        {/* Department and hostel */}
        <div className="flex gap-2">
          {/* Department */}
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold">Department</p>
            <input
              type="text"
              placeholder="Computer Science"
              className="w-full py-2 px-3 bg-background border border-outline rounded-xl placeholder:text-xs"
            />
          </div>
          {/* Hostel */}
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold">Hostel</p>
            <input
              type="text"
              placeholder="Moremi Hall"
              className="w-full py-2 px-3 bg-background border border-outline rounded-xl placeholder:text-xs"
            />
          </div>
        </div>
      </div>

      {/* Form 2 */}
      <div
        className={`flex flex-col gap-4 ${section === 2 ? "block" : "hidden"}`}
      >
        {/* Password */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold">Password</p>
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
        {/* Confirm Password */}
        <div className="flex flex-col gap-2">
          {/* Confirm Password */}
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold">Confirm Password</p>
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
      </div>
      {/* Buttons */}
      <div className="w-full flex flex-col gap-2">
        {/* Back Button */}
        {section === 2 && (
          <button
            type="button"
            className="flex gap-2 items-center justify-center bg-outline text-black text-sm p-2 rounded-xl cursor-pointer"
            onClick={() => setSection(1)}
          >
            <ArrowLeft size={17} />
            Back
          </button>
        )}
        {/* Continue Button */}
        <button
          key={section}
          type={section === 1 ? "button" : "submit"}
          className="flex gap-2 items-center justify-center bg-mustard text-black text-sm p-2 rounded-xl cursor-pointer"
          onClick={(e) => {
            if (section === 1) {
              e.preventDefault();
              setSection(2);
            }
          }}
        >
          {section === 1 ? "Continue" : "Sign Up"}
          {section === 1 && <ArrowRight size={17} />}
        </button>
      </div>
    </form>
  );
}
