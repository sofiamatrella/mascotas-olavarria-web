"use client";

import ImageSlider from "@/components/ImageSlider";
import styles from "@/styles/PetDetails.module.css";
import TwitterLogo from "@/components/TwitterLogo";
import FacebookLogo from "@/components/FacebookLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WhatsappLogo from "@/components/WhatsappLogo";

export default function PetDetails() {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.info_slider}>
        <div className={styles.slider}>
          <ImageSlider />
        </div>
        <div>
          <div className={styles.title_share}>
            <h1 className={styles.title}> Nombre </h1>
            <div className={styles.share}>
              <Link
                href={`https://twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_URL}${pathname}&text=Nombre%20está%20buscando%20un%20hogar&via=mascotasolavarria&hashtags=MascotasOlavarria`}
                target="_blank"
              >
                <TwitterLogo />
              </Link>
              <Link
                href={`https://facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_URL}`}
                target="_blank"
              >
                <FacebookLogo />
              </Link>
              <Link
                href={`https://api.whatsapp.com/send?text=test`}
                target="_blank"
              >
                <WhatsappLogo />
              </Link>
            </div>
          </div>
          <div className={styles.basic_info}>
            <div>
              <p className={styles.text}>especie</p>
              <p className={styles.subtitle}>Especie</p>
            </div>
            <div>
              <p className={styles.text}>tamaño</p>
              <p className={styles.subtitle}>Tamaño</p>
            </div>
            <div>
              <p className={styles.text}>edad</p>
              <p className={styles.subtitle}>Edad</p>
            </div>
            <div>
              <p className={styles.text}>sexo</p>
              <p className={styles.subtitle}>Sexo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
