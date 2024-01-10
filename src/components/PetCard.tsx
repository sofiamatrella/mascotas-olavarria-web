import PetCard from "@/models/Pet";
import styles from "@/styles/PetCard.module.css";
import Link from "next/link";

export default function PetCardComponent({
  name,
  sex,
  age,
  size,
  image,
  id,
}: PetCard) {
  return (
    <Link href={`detalles/${id}`} className={styles.container}>
      <img src={image} alt="stock image" className={styles.image} />
      <div className={styles.info}>
        <h2 className={styles.title}> {name} </h2>
        <h6 className={styles.text}> {`${sex} - ${age} - ${size}`} </h6>
      </div>
    </Link>
  );
}
