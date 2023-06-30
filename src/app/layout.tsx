import "./globals.css";
import { poppins, raleway } from "./fonts";

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
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
