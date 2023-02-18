"use client";
import Image from "next/image";
import { useState } from "react";
import LogOutButton from "./LogOutButton";
import styles from "./nav.module.css";

export default function Navigation({ image }: { image: string }) {
  const [show, setshow] = useState(false);

  return (
    <>
      <img
        className="w-14 h-14 rounded-lg cursor-pointer "
        src={image}
        alt="user"
        onClick={() => setshow(!show)}
        width={36}
        height={36}
      />
      <nav
        className={`  rounded-lg  absolute right-4 top-24  ${
          show ? "flex" : "hidden"
        }  `}>
        <ul className={styles.NavCard}>
          <li className={styles.NavOption}>
            <span className="material-symbols-outlined mr-2">
              account_circle
            </span>
            My Profile
          </li>
          <li className={styles.NavOption}>
            <span className="material-symbols-outlined mr-2 ">group</span>
            Group Chat
          </li>
          <hr />
          <LogOutButton />
        </ul>
      </nav>
    </>
  );
}
