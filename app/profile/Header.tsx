import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Navigation from "../components/Navigation";

export default async function Header() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <header className=" relative flex justify-between items-center p-4">
      <img
        src={"/devchallenges.svg"}
        className="h-auto"
        alt="logo"
        width={200}
        height={200}
      />
      <Navigation
        image={
          user?.image || "https://xsgames.co/randomusers/avatar.php?g=pixel"
        }
      />
    </header>
  );
}
