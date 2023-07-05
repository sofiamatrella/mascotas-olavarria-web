import Filters from "@/components/Filters";
import styles from "@/styles/Adoption.module.css";
import PetCard from "./PetCard";

export default function AdoptionComponent() {
  return (
    <div className={styles.container}>
      <Filters />
      <PetCard />
    </div>
  );
}
