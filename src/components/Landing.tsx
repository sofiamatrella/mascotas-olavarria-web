import Link from "next/link";
import styles from "../styles/Landing.module.css";
import HomeImage from "../../public/images/home-image.png";
import Image from "next/image";

export default function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h2 className={styles.text}>
          <span className={styles.text_bold}>ADOPTÁ</span> Y SALVÁ UNA{" "}
          <span className={styles.text_bold}>VIDA</span>
        </h2>
        {/* <h2 className={styles.text}>UNA VIDA</h2> */}
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
        <Image
          src={HomeImage}
          alt="Imagen de un gato y un perro"
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
    </div>
  );
}
