import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/images/pokeball.png"
          width={40}
          height={40}
          alt="pokeball"
        />
        <h1>Pokedex</h1>
      </div>
      <ul className={styles.links}>
        <li>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
            <a>Sobre</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
