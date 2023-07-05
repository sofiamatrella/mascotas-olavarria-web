import { colors, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(67, 80, 33)",
      light: colors.blue[400],
      dark: colors.purple[400],
      contrastText: colors.brown[400],
    },
    secondary: {
      main: colors.amber[400],
      light: colors.cyan[400],
    },
    text: {
      primary: "rgba(67, 80, 33)",
      secondary: "rgba(67, 80, 33, 0.9)",
    },
    background: {
      default: colors.lime[400],
      paper: "#dde5b6",
    },
  },
  typography: {
    fontWeightRegular: "600",
  },
});

export default theme;
