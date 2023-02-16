"use client";
import Image from "next/image";
import { useState } from "react";
import Navigation from "../components/Navigation";

export default function Header() {
  const [show, setshow] = useState(false);
  return (
    <header className=" relative flex justify-between items-center p-4">
      <Image
        src={"/devchallenges.svg"}
        className="h-auto"
        alt="logo"
        width={200}
        height={200}
      />
      <img
        className="w-14 h-14 rounded-lg cursor-pointer "
        src="https://xsgames.co/randomusers/avatar.php?g=pixel"
        alt="user"
        onClick={() => setshow(!show)}
      />
      <Navigation show={show} />
    </header>
  );
}
