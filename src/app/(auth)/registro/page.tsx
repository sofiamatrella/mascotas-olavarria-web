"use client";

import { Formik, Form } from "formik";
import { CircularProgress } from "@mui/material";
import styles from "../../../styles/Register.module.css";
import Link from "next/link";
import User, { userRegister } from "@/models/User";
import { RegisterSchema } from "@/utils/validation/UserValidation";
import FormikTextField from "@/components/FormikTextField";
import AuthService from "@/services/AuthService";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = (values: User) => {
    setLoading(true);
    AuthService.register(values)
      .then(async (res) => {
        const response = await res.json();
        if (res.ok) router.push("/login");
        else {
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
        <h1 className={styles.title}>Registrarse</h1>
        <p className={styles.error}>{error}</p>
        <Formik
          initialValues={userRegister}
          validationSchema={RegisterSchema}
          onSubmit={(values) => {
            console.log(values);
            handleRegister(values);
          }}
        >
          {({ handleChange, handleBlur }) => (
            <Form className={styles.form}>
              <FormikTextField
                id="firstName"
                label="Nombre"
                handleChange={handleChange("firstName")}
                handleBlur={handleBlur("firstName")}
              />
              <FormikTextField
                id="lastName"
                label="Apellido"
                handleChange={handleChange("lastName")}
                handleBlur={handleBlur("lastName")}
              />
              <FormikTextField
                id="username"
                label="Usuario"
                handleChange={handleChange("username")}
                handleBlur={handleBlur("username")}
              />
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
                Registrarse
              </button>
            </Form>
          )}
        </Formik>
        <p className={styles.text}>
          ¿Ya tenés cuenta?{" "}
          <Link href="/login" className={styles.link}>
            {" "}
            ¡Inicia sesión!
          </Link>
        </p>
      </div>
      <div className={styles.image_container}>
        <img src="/images/home-image.png" alt="" />
      </div>
    </div>
  );
}
