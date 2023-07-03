"use client";

import Header from "@/components/Header";
import LoggedContext from "@/context/LoggedContext";
import { useContext, useEffect } from "react";

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
    <div style={{ padding: "10px" }}>
      <Header />
      {children}
    </div>
  );
}
