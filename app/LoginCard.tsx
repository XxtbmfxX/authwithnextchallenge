"use client";
import Image from "next/image";
import LoginButton from "./LoginButton";
import { useRouter } from "next/navigation";

export default function LoginCard({ session }: { session: { user: object } }) {
  const router = useRouter();
  console.log(session);

  if (session.user) {
    router.push("/profile");
  }

  return (
    <div className="grid mt-8 max-w-md sm:border-2 rounded-lg mx-auto gap-8 place-content-center px-4 h-3/4 ">
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
      {session ? (
        <span className="flex text-center justify-center mt-8  ">
          <span className="material-symbols-outlined animate-spin ">
            refresh
          </span>
        </span>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}
