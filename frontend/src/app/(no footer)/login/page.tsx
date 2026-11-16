import LoginForm from "@/src/components/loginForm";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div className="flex flex-col justify-start">
        <div>{/* Logo part */}</div>
        <div className="flex flex-col gap-4">
          {/* Heading and description */}
          <div>
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-sm text-outline-strong">
              Log in to borrow books and check your due dates.
            </p>
          </div>
          <LoginForm />
        </div>
      </div>

      <div className="flex justify-center">
        <p className="text-sm text-outline-strong">
          New here?{" "}
          <Link href="/register" className="text-caramel cursor-pointer">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
