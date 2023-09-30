import styles from "../styles/AboutUs.module.css";
import AboutUsImage from "../../public/images/aboutus-image.png";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>¿Quiénes somos?</h2>
      <div className={styles.image_text_container}>
        <div className={styles.text_container}>
          <p className={styles.text}>
            Somos una plataforma dedicada a{" "}
            <span className={styles.text_bold}>conectar</span> a las mascotas en
            adopción con personas que desean brindarles un{" "}
            <span className={styles.text_bold}>hogar</span> amoroso en la ciudad
            de Olavarría. Nuestra misión es promover la{" "}
            <span className={styles.text_bold}>adopción responsable</span> y
            ayudar a las protectoras de animales locales a encontrar familias
            para las mascotas que rescatan y cuidan con tanto amor. Además,
            también brindamos un espacio para publicar y buscar{" "}
            <span className={styles.text_bold}>mascotas perdidas</span> en
            nuestra ciudad.
          </p>
          <p className={styles.text}>
            En Mascotas Olavarría, creemos firmemente en el poder{" "}
            <span className={styles.text_bold}>transformador </span>
            de la adopción . Queremos ser el puente entre aquellos que buscan un
            nuevo compañero peludo y aquellos que se dedican incansablemente a
            proteger y rescatar a las mascotas en situación de vulnerabilidad.
          </p>
          <p className={styles.text}>
            También nos preocupamos por apoyar a las{" "}
            <span className={styles.text_bold}>protectoras</span> de mascotas
            locales. A través de Mascotas Olavarría, las protectoras pueden
            registrar sus perfiles y compartir información sobre las mascotas
            disponibles, eventos próximos y formas en que la comunidad puede
            colaborar y brindarles ayuda.
          </p>
        </div>
        <div className={styles.image_container}>
          <Image
            src={AboutUsImage}
            alt="Imagen de un gato"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
