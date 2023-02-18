import { getServerSession } from "next-auth";
import Link from "next/link";
import EditForm from "./EditForm.jsx";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/prisma/client";

async function getUser(email) {
  const result = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return result;
}

export default async function page() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const userState = await getUser(user?.email);

  return (
    <div className=" grid content-center place-items-center w-full max-w-3xl p-2">
      <Link
        className=" my-8  active:animate-ping place-self-start flex items-center text-blue-400"
        href={"/profile"}>
        <span class="material-symbols-outlined">arrow_back</span>
        <span class="">Back</span>
      </Link>
      <div className=" w-full md:border-2 md:border-gray-300 rounded-lg  p-4 max-w-3xl">
        <h1 className="text-3xl">Change Info</h1>
        <p>Changes will be reflected to every services</p>
      </div>
      <EditForm userState={userState} />
    </div>
  );
}
