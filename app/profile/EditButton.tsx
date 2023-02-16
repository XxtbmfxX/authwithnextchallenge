"use client";

import Link from "next/link";

export default function EditButton() {
  return (
    <div className="flex align-middle items-center justify-center ">
      <div className="text">
        <h2 className="text-2xl">Profile</h2>
        <p className="w-3/4">Some info may be visible to other people</p>
      </div>

      <Link
        className="border-2 border-gray-200 py-4 px-6 rounded-lg "
        href={"/profile/edit"}>
        Edit
      </Link>
    </div>
  );
}
