"use client";

import Header from "@/components/Header";
import { ThemeProvider } from "@mui/material";
import theme from "@/MUITheme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: "10px" }}>
        <Header />
        {children}
      </div>
    </ThemeProvider>
  );
}
