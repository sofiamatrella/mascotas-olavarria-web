import Link from "next/link";
import styles from "../styles/Landing.module.css";

export default function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h2 className={styles.text}>
          <span className={styles.text_bold}>ADOPTA</span> Y SALVÁ
        </h2>
        <h2 className={styles.text}>UNA VIDA</h2>
        <div className={styles.buttons_container}>
          <Link href="/adoptar" className={styles.button}>
            Adoptar
          </Link>
          <Link href="/dar-en-adopcion" className={styles.button}>
            Dar en adopción
          </Link>
        </div>
      </div>
      <div className={styles.image_container}>
        <img src="/images/home-image.png" alt="" />
      </div>
    </div>
  );
}
