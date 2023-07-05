"use client";

import Header from "@/components/Header";
import LoggedContext from "@/context/LoggedContext";
import { useContext, useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "@/MUITheme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { handleLogIn } = useContext(LoggedContext);

  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      handleLogIn();
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: "10px" }}>
        <Header />
        {children}
      </div>
    </ThemeProvider>
  );
}
