import Landing from "@/components/Landing";
import styles from "./page.module.css";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <main className={styles.main}>
      <Landing />
      <AboutUs />
    </main>
  );
}
