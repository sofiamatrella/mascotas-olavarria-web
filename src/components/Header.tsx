"use client";

import styles from "../styles/Header.module.css";
import useScrollPosition from "@/hooks/useScrollPosition";
import MenuDropdown from "./MenuDropdown";
import { HeartIcon, MegaphoneIcon } from "@heroicons/react/24/outline";
import Page from "@/models/Menu";
import Link from "next/link";

const pages: Page[] = [
  {
    name: "Adopciones",
    subpages: [
      {
        name: "Adoptar",
        description: "Ver perros y gatos disponibles para adopción",
        href: "##",
        icon: HeartIcon,
      },
      {
        name: "Dar en adopción",
        description: "Publica tus mascotas en adopción",
        href: "##",
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
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={
        scrollPosition < 10 ? styles.container : styles.container_scroll
      }
    >
      <Link href="/">
        <img src="/images/logo.png" alt="Logo" width="55px" />
      </Link>
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
      <button className={styles.button}> Iniciar sesión </button>
    </header>
  );
}
