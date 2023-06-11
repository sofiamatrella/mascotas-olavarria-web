"use client";

import styles from "../styles/Header.module.css";
import useScrollPosition from "@/hooks/useScrollPosition";

export default function Header() {
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={
        scrollPosition < 10 ? styles.container : styles.container_scroll
      }
    >
      <img src="/images/logo.png" alt="Logo" width="55px" />
      <nav className={styles.navigation}>
        <h6>Inicio</h6>
        <h6>Adopciones</h6>
        <h6>Protectoras</h6>
      </nav>
      <button className={styles.button}> Iniciar sesión </button>
    </header>
  );
}
