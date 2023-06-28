import Landing from "@/components/Landing";
import styles from "./page.module.css";
import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";

const register = async () => {
  const res = await fetch("http://localhost:3000/api/users/login", {
    method: "POST",
    body: JSON.stringify({
      email: "sofia.matrella@gmail.com",
      // username: "sofiamatrella",
      password: "12345",
      // firstName: "Sofía",
      // lastName: "Matrella",
      // profilePicture: "dafijdsf",
    }),
    cache: "no-store",
  });

  console.log(res);
  const response = await res.json();
  console.log("JSON", response);

  // return res.json();
};

export default async function Home() {
  const user = await register();

  return (
    <main className={styles.main}>
      <Landing />
      <AboutUs />
      <FAQ />
    </main>
  );
}
