import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required("Campo requerido."),
  lastName: Yup.string().required("Campo requerido."),
  username: Yup.string().required("Campo requerido."),
  password: Yup.string().required("Campo requerido."),
  email: Yup.string().email("Email no válido").required("Campo requerido."),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Email no válido").required("Campo requerido."),
  password: Yup.string().required("Campo requerido."),
});
