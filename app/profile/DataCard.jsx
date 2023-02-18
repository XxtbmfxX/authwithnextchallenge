import { authOptions } from "@/pages/api/auth/[...nextauth]";
import axios from "axios";
import { getServerSession } from "next-auth";
import prisma from "../../prisma/client";

export const revalidate = 3600;
async function getUser(email) {
  const result = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return result;
}

export default async function DataCard() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const data = await getUser(user?.email);

  return (
    <ul>
      <li className=" border-b-2 p-2 flex items-center ">
        <span className="w-3/6 text-gray-400 text-xs ">PHOTO</span>
        <img
          className=" w-16 h-16 rounded-lg "
          src={
            data?.image || "https://xsgames.co/randomusers/avatar.php?g=pixel"
          }
          alt="user"
        />
      </li>
      <li className=" border-b-2 p-2 flex h-20  items-center ">
        <span className="w-3/6 text-gray-400 uppercase text-xs ">email</span>
        <span className="text-sm w-1/2 whitespace-nowrap  overflow-hidden text-ellipsis  ">
          {data?.email}
        </span>
      </li>
      <li className=" border-b-2 p-2 flex h-20  items-center ">
        <span className="w-3/6 text-gray-400 uppercase text-xs ">Name</span>
        <span className="text-sm w-1/2 whitespace-nowrap  overflow-hidden text-ellipsis  ">
          {data?.name}
        </span>
      </li>
      <li className=" border-b-2 p-2 flex h-20  items-center ">
        <span className="w-3/6 text-gray-400 uppercase text-xs ">Bio</span>
        <span className="text-sm w-1/2 whitespace-nowrap  overflow-hidden text-ellipsis  ">
          {data?.bio || "add some bio"}
        </span>
      </li>
      <li className=" border-b-2 p-2 flex h-20  items-center ">
        <span className="w-3/6 text-gray-400 uppercase text-xs ">Phone</span>
        <span className="text-sm w-1/2 whitespace-nowrap  overflow-hidden text-ellipsis  ">
          {data?.phone || "add a number"}
        </span>
      </li>
    </ul>
  );
}
