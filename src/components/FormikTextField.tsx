import { TextField } from "@mui/material";
import { Formik, Form, useField } from "formik";
import { ChangeEvent } from "react";

export default function FormikTextField({
  id,
  label,
  handleChange,
  handleBlur,
  ...props
}: {
  id: string;
  label: string;
  handleChange: (e: string | ChangeEvent<any>) => void;
  handleBlur: (e: string | ChangeEvent<any>) => void;
  [x: string]: any;
}) {
  const [field, meta, helpers] = useField(id);

  return (
    <TextField
      id={id}
      label={label}
      onChange={handleChange}
      onBlur={handleBlur}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      fullWidth
      {...props}
      inputProps={{
        style: {
          color: "#1a200d",
          fontFamily: "var(--raleway-font)",
          fontWeight: "600",
          WebkitBoxShadow: `0 0 0 100px #f6ffdf inset`,
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "rgba(67, 80, 33, 0.9)",
            borderWidth: "2px",
          },
          "&:hover fieldset": {
            borderColor: `${
              meta.touched && Boolean(meta.error)
                ? "#d32f2f"
                : "rgba(67, 80, 33)"
            }`,
          },
          "&.Mui-focused fieldset": {
            borderColor: `${
              meta.touched && Boolean(meta.error)
                ? "#d32f2f"
                : "rgba(67, 80, 33)"
            }`,
          },
        },
        "& label.Mui-focused": {
          color: `${
            meta.touched && Boolean(meta.error) ? "#d32f2f" : "rgba(67, 80, 33)"
          }`,
        },
        "& .MuiInputLabel-root": {
          color: `${
            meta.touched && Boolean(meta.error) ? "#d32f2f" : "rgba(67, 80, 33)"
          }`,
          fontWeight: "600",
          fontFamily: "var(--raleway-font)",
        },
      }}
    />
  );
}
