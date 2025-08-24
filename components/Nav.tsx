import styles from "./Nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/commands">Command</Link>
        </li>
        <li>
          <Link href="/terms-privacy">Terms</Link>
        </li>
        <li>
          <Link href="/support">Support</Link>
        </li>
      </ul>
    </nav>
  );
}
