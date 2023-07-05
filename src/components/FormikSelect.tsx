import { ChangeEvent } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import styles from "@/styles/Filters.module.css";
import { useField } from "formik";

export default function FormikSelect({
  id,
  label,
  handleChange,
  children,
  ...props
}: {
  id: string;
  label: string;
  handleChange: (e: SelectChangeEvent<any>) => void;
  children: any;
  [x: string]: any;
}) {
  const [field, meta, helpers] = useField(id);

  return (
    <div className={styles.input}>
      <FormControl fullWidth size="small">
        <InputLabel id={id}>{label}</InputLabel>
        <Select
          labelId={id}
          id={id}
          name={id}
          value={field.value}
          label={label}
          multiple
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => selected.join(", ")}
          sx={{
            color: "#1a200d",
            fontFamily: "var(--raleway-font)",
            fontWeight: "600",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(67, 80, 33, 0.9)",
              borderWidth: "2px",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(67, 80, 33)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(67, 80, 33)",
            },
            ".MuiSvgIcon-root": {
              fill: "rgba(67, 80, 33) !important",
            },
          }}
          MenuProps={{
            MenuListProps: {
              sx: {
                color: "#1a200d",
              },
            },
          }}
        >
          {children}
        </Select>
      </FormControl>
    </div>
  );
}
