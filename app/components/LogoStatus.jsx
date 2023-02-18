"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function LogoStatus() {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/devchallenges.svg";
      break;
    case "dark":
      src = "/devchallenges-light.svg";
      break;
    default:
      src = "/devchallenges.svg";
      break;
  }

  return (
    <>
      <Image src={src} alt="logo" width={200} height={29} />
    </>
  );
}
