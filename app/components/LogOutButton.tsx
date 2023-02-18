"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LogOutButton() {
  const router = useRouter();

  return (
    <li
      className=" flex items-center hover:bg-gray-300 cursor-pointer mt-1 p-4 text-red-500 rounded-lg"
      onClick={() => {
        signOut();
        router.push("/");
      }}>
      <span className="material-symbols-outlined mr-2 ">logout</span>
      LogOut
    </li>
  );
}
