"use client";
import LogoStatus from "./components/LogoStatus";
import LoginButton from "./LoginButton";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function LoginCard({ session }: { session: { user: object } }) {
  return (
    <div className="grid h-3/4 my-12 max-w-md sm:border-2 rounded-lg mx-auto gap-10 place-content-center px-4 ">
      <LogoStatus />

      <h1 className="text-2xl  ">
        Join thousands of learners from around the world{" "}
      </h1>
      <p>
        Master web development by making real-life projects. There are multiple
        paths for you to choose
      </p>
      {session ? (
        <span className="flex text-center justify-center mt-8  ">
          <span className="material-symbols-outlined animate-spin ">
            refresh
          </span>
        </span>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}
