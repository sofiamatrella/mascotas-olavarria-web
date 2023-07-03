import Landing from "@/components/Landing";
import styles from "./page.module.css";
import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import { useContext, useEffect } from "react";
import LoggedContext from "@/context/LoggedContext";

export default async function Home() {
  return (
    <main className={styles.main}>
      <Landing />
      <AboutUs />
      <FAQ />
    </main>
  );
}
