import styles from "@/styles/Adopt.module.css";
import Link from "next/link";

export default function Adopt() {
  return (
    <div className={styles.container}>
      <div className={styles.card_container}>
        <Link href="adoptar/##" className={styles.card}>
          <img
            src="https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="cat stock image"
            className={styles.image}
          ></img>
          <p className={styles.text}>GATOS</p>
        </Link>
        <Link href="adoptar/#" className={styles.card}>
          <img
            src="https://images.pexels.com/photos/2607546/pexels-photo-2607546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="dog stock image"
            className={styles.image}
          />
          <p className={styles.text}>PERROS</p>
        </Link>
      </div>
    </div>
  );
}
