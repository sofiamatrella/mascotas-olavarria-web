"use client";

import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Checkbox,
  ListItemText,
  FormControlLabel,
} from "@mui/material";
import { Form, Formik } from "formik";
import styles from "@/styles/Filters.module.css";
import FormikSelect from "./FormikSelect";

export default function Filters() {
  return (
    <>
      <Formik
        initialValues={{
          sex: ["Hembra", "Macho"],
          size: ["Chico", "Mediano", "Grande"],
          age: ["Cachorro", "Joven", "Adulto", "Anciano"],
          isLitter: true,
        }}
        // validationSchema={RegisterSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, values }) => (
          <Form className={styles.form}>
            <FormikSelect id="sex" label="Sexo" handleChange={handleChange}>
              <MenuItem value={"Hembra"}>
                <Checkbox checked={values.sex.includes("Hembra")} />
                <ListItemText primary={"Hembra"} />
              </MenuItem>
              <MenuItem value={"Macho"}>
                <Checkbox checked={values.sex.includes("Macho")} />
                <ListItemText primary={"Macho"} />
              </MenuItem>
            </FormikSelect>

            <FormikSelect id="size" label="Tamaño" handleChange={handleChange}>
              <MenuItem value={"Chico"}>
                <Checkbox checked={values.size.includes("Chico")} />
                <ListItemText primary={"Chico"} />
              </MenuItem>
              <MenuItem value={"Mediano"}>
                <Checkbox checked={values.size.includes("Mediano")} />
                <ListItemText primary={"Mediano"} />
              </MenuItem>
              <MenuItem value={"Grande"}>
                <Checkbox checked={values.size.includes("Grande")} />
                <ListItemText primary={"Grande"} />
              </MenuItem>
            </FormikSelect>

            <FormikSelect id="age" label="Edad" handleChange={handleChange}>
              <MenuItem value={"Cachorro"}>
                <Checkbox checked={values.age.includes("Cachorro")} />
                <ListItemText primary={"Cachorro (0 a 1 año)"} />
              </MenuItem>
              <MenuItem value={"Joven"}>
                <Checkbox checked={values.age.includes("Joven")} />
                <ListItemText primary={"Joven (1 a 3 años)"} />
              </MenuItem>
              <MenuItem value={"Adulto"}>
                <Checkbox checked={values.age.includes("Adulto")} />
                <ListItemText primary={"Adulto (3 a 10 años)"} />
              </MenuItem>
              <MenuItem value={"Anciano"}>
                <Checkbox checked={values.age.includes("Anciano")} />
                <ListItemText primary={"Anciano (+10 años)"} />
              </MenuItem>
            </FormikSelect>

            <FormControlLabel
              control={<Checkbox />}
              checked={values.isLitter}
              name="isLitter"
              onChange={handleChange}
              label="Mostrar camadas"
              sx={{
                ".MuiFormControlLabel-label": {
                  fontFamily: "var(--raleway-font)",
                  fontWeight: "600",
                },
              }}
            />

            <button type="submit">Filtrar</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
