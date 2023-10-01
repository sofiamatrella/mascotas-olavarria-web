import styles from "@/styles/Adopt.module.css";
import Image from "next/image";
import Link from "next/link";
import CatImage from "@/../public/images/CatImage.jpg";
import DogImage from "@/../public/images/DogImage.jpg";

export default function Adopt() {
  return (
    <div className={styles.container}>
      <div className={styles.card_container}>
        <Link href="adoptar/gatos" className={styles.card}>
          <Image
            src={CatImage}
            alt="Imagen de un gato"
            className={styles.image}
          ></Image>
          <p className={styles.text}>GATOS</p>
        </Link>
        <Link href="adoptar/perros" className={styles.card}>
          <Image
            src={DogImage}
            alt="dog stock image"
            className={styles.image}
          />
          <p className={styles.text}>PERROS</p>
        </Link>
      </div>
    </div>
  );
}
