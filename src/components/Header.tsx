"use client";

import styles from "../styles/Header.module.css";
import MenuDropdown from "./MenuDropdown";
import { HeartIcon, MegaphoneIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import Page from "@/models/Menu";
import Link from "next/link";
import { useContext } from "react";
import LoggedContext from "@/context/LoggedContext";
import MobileMenu from "./MobileMenu";

const pages: Page[] = [
  {
    name: "Adopciones",
    subpages: [
      {
        name: "Adoptar",
        description: "Ver perros y gatos disponibles para adopción",
        href: "/adoptar",
        icon: HeartIcon,
      },
      {
        name: "Dar en adopción",
        description: "Publica tus mascotas en adopción",
        href: "/dar-en-adopcion",
        icon: MegaphoneIcon,
      },
    ],
  },
  {
    name: "Protectoras",
    subpages: [
      {
        name: "Protectoras asociadas",
        description: "Ver protectoras asociadas con Mascotas Olavarría",
        href: "##",
        icon: HeartIcon,
      },
      {
        name: "Asociá tu protectora",
        description: "Asociá tu protectora a Mascotas Olavarría",
        href: "##",
        icon: MegaphoneIcon,
      },
    ],
  },
];

export default function Header() {
  const { isLoggedIn } = useContext(LoggedContext);

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/images/logo.png" alt="Logo" width="55px" />
        </Link>
      </div>
      <nav className={styles.navigation}>
        <Link href="/" className={styles.link}>
          Inicio
        </Link>
        {pages.map((page) => (
          <MenuDropdown
            name={page.name}
            subpages={page.subpages}
            key={page.name}
          />
        ))}
      </nav>
      <div className={styles.button_container}>
        {isLoggedIn ? (
          <UserCircleIcon
            width="45px"
            color="#435021"
            className={styles.icon}
          />
        ) : (
          <Link href="/login" className={styles.button}>
            Iniciar sesión
          </Link>
        )}
        <div className={styles.mobile_menu}>
          <MobileMenu pages={pages} />
        </div>
      </div>
    </header>
  );
}
