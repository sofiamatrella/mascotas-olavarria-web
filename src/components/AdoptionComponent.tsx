import { pets } from "@/mocks/pets.json";
import Filters from "@/components/Filters";
import styles from "@/styles/Adoption.module.css";
import PetCard from "./PetCard";

export default function AdoptionComponent({ species }: { species: string }) {
  const filteredPets = pets.filter((pet) => pet.species === species);

  return (
    <div className={styles.container}>
      <Filters />
      <div className={styles.cards_container}>
        {filteredPets.map((pet) => (
          <PetCard
            age={pet.age}
            name={pet.name}
            size={pet.size}
            sex={pet.sex}
            image={pet.image}
          />
        ))}
      </div>
    </div>
  );
}
