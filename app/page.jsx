import LoginButton from "./LoginButton";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Image from "next/image";

export default async function Home() {
  // const session = await getServerSession(authOptions);
  // console.log(session);

  return (
    <div className="grid gap-8 place-content-center px-4 h-3/4 ">
      <Image
        src={"/devchallenges.svg"}
        className="h-auto"
        alt="logo"
        width={200}
        height={200}
      />
      <h1 className="text-2xl  ">
        Join thousands of learners from around the world{" "}
      </h1>
      <p>
        Master web development by making real-life projects. There are multiple
        paths for you to choose
      </p>
      <LoginButton />
    </div>
  );
}
