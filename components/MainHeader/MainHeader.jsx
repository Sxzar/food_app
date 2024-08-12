import Link from "next/link";
import NavLink from "./NavLink";
import logoImage from "@/assets/logo.png";
import styles from "./MainHeader.module.scss";
import Image from "next/image";
import MainHeaderBackground from "./MainHeaderBackground";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image
            src={logoImage.src}
            width={80}
            height={80}
            alt="A plate with food on it"
            priority
          />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
