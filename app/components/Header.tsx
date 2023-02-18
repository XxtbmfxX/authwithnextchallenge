import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import DarkButton from "./DarkButton";
import Navigation from "./Navigation";
import LogoStatus from "./LogoStatus";

export default async function Header() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (session) {
    return (
      <header className=" relative flex justify-between items-center p-4">
        <DarkButton />
        <LogoStatus />
        <Navigation
          image={
            user?.image || "https://xsgames.co/randomusers/avatar.php?g=pixel"
          }
        />
      </header>
    );
  } else {
    return <h1></h1>;
  }
}
