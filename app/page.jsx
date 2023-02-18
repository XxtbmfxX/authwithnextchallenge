import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LoginCard from "./LoginCard";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return <LoginCard session={session} />;
}
