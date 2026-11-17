"use client";

import SignupForm from "@/src/components/signupForm";
import SignupProgress from "@/src/components/signupProgress";
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [section, setSection] = useState(1);

  return (
    <div className="flex flex-col justify-between w-full h-full gap-5">
      <div className="flex flex-col justify-start">
        <div>{/* Logo part */}</div>
        <div className="flex flex-col gap-4">
          {/* Heading and description */}
          <div>
            <h1 className="text-2xl font-bold">Create your account</h1>
            <p className="text-sm text-outline-strong">
              Borrow campus books and track your due dates in one place.
            </p>
          </div>

          <SignupProgress section={section} />
          <SignupForm section={section} setSection={setSection} />
        </div>
      </div>

      <div className="flex justify-center">
        <p className="text-sm text-outline-strong">
          Already have an account?{" "}
          <Link href="/login" className="text-caramel cursor-pointer">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
