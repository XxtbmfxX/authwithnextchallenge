import { getServerSession } from "next-auth";
import Link from "next/link";
import EditForm from "./EditForm.jsx";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default function page() {
  const session = getServerSession(authOptions);
  console.log(session);
  return (
    <div className=" grid content-center place-items-center w-full max-w-3xl p-2">
      <Link
        className=" active:animate-ping place-self-start flex items-center text-blue-400"
        href={"/profile"}>
        <span class="material-symbols-outlined">arrow_back</span>
        <span class="">Back</span>
      </Link>
      <div className=" w-full md:border-2 md:border-gray-300 rounded-lg  p-4 max-w-3xl">
        <h1 className="text-3xl">Change Info</h1>
        <p>Changes will be reflected to every services</p>
      </div>
      <EditForm />
    </div>
  );
}
