import { poppins, raleway } from "../fonts";

export const metadata = {
  title: "Mascotas Olavarria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${poppins.variable} ${raleway.variable}`}>{children}</div>
  );
}
