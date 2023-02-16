import LogOutButton from "./LogOutButton";
import styles from "./nav.module.css";

export default function Navigation({ show }: { show: Boolean }) {
  return (
    <nav
      className={`absolute right-0 top-24 bg-white ${
        show ? "flex" : "hidden"
      }  `}>
      <ul className={styles.NavCard}>
        <li className={styles.NavOption}>
          <span className="material-symbols-outlined mr-2">account_circle</span>
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
  );
}
