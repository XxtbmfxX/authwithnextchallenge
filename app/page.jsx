import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LoginCard from "./LoginCard";
import Profile from "./Profile";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    return <Profile />;
  } else {
    return <LoginCard />;
  }
}
