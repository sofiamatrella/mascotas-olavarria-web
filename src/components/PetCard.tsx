import styles from "@/styles/PetCard.module.css";

export default function PetCard() {
  return (
    <div className={styles.container}>
      <img
        src="https://images.pexels.com/photos/1078089/pexels-photo-1078089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="stock image"
        className={styles.image}
      />
      <div className={styles.info}>
        <h2 className={styles.title}> Nombre </h2>
        <h6 className={styles.text}> Sex - Age - Size </h6>
      </div>
    </div>
  );
}
