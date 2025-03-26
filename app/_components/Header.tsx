"use client";

import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="w-full mx-auto bg-white px-8 lg:px-12 sm:px-16 2xl:max-w-7xl">
        <div className="relative flex w-full py-3 mx-auto bg-white md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center  justify-between lg:justify-start">
            <Link
              href="/api/auth/sign-in"
              className="flex items-center justify-center w-full h-8 px-4 py-2 text-sm font-semibold text-white transition-all bg-blue-500 rounded-lg hover:bg-blue-600 md:w-auto"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
