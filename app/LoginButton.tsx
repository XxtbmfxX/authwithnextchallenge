"use client";

import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button
      className=" animate-pulse hover:animate-none p-4 bg-blue-500 text-white rounded-lg"
      onClick={() => {
        signIn();
      }}>
      Start Coding Now
    </button>
  );
}
