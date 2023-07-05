"use client";

import "./globals.css";
import { poppins, raleway } from "./fonts";
import { LoggedProvider } from "@/context/LoggedContext";
import { ThemeProvider } from "@mui/material";
import theme from "@/MUITheme";

export const metadata = {
  title: "Mascotas Olavarría",
  description: "Mascotas perdidas y adopciones",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${poppins.variable} ${raleway.variable}`}>
      <body className={raleway.className}>
        <ThemeProvider theme={theme}>
          <LoggedProvider>{children}</LoggedProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
