"use client";

import { Formik, Form } from "formik";
import styles from "../../../styles/Login.module.css";
import Link from "next/link";
import User, { userLogin } from "@/models/User";
import FormikTextField from "@/components/FormikTextField";
import { LoginSchema } from "@/utils/validation/UserValidation";
import AuthService from "@/services/AuthService";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";
import LoggedContext from "@/context/LoggedContext";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const { handleLogIn } = useContext(LoggedContext);

  const handleLogin = (values: User) => {
    setLoading(true);
    AuthService.login(values)
      .then(async (res) => {
        const response = await res.json();
        if (res.ok) {
          handleLogIn();
          router.push("/");
        } else {
          setLoading(false);
          setError(response.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <Link href="/">
          <img src="/images/logo.png" alt="" width="90px" />
        </Link>
        <h1 className={styles.title}>Iniciar sesión</h1>
        <p className={styles.error}>{error}</p>
        <Formik
          initialValues={userLogin}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            handleLogin(values);
          }}
        >
          {({ handleChange, handleBlur }) => (
            <Form className={styles.form}>
              <FormikTextField
                id="email"
                label="Email"
                handleChange={handleChange("email")}
                handleBlur={handleBlur("email")}
              />
              <FormikTextField
                id="password"
                label="Contraseña"
                handleChange={handleChange("password")}
                handleBlur={handleBlur("password")}
                type="password"
              />
              <button
                type="submit"
                disabled={loading}
                className={`${
                  loading ? styles.button_disabled : styles.button
                }`}
              >
                {loading && (
                  <CircularProgress
                    size={24}
                    sx={{ position: "absolute", color: "#435021" }}
                  />
                )}
                Iniciar sesión
              </button>
            </Form>
          )}
        </Formik>
        <p className={styles.text}>
          ¿Todavía no tenés cuenta?{" "}
          <Link href="/registro" className={styles.link}>
            {" "}
            ¡Registrate!
          </Link>
        </p>
      </div>
      <div className={styles.image_container}>
        <img src="/images/home-image.png" alt="" />
      </div>
    </div>
  );
}
