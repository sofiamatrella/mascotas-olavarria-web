import { LoggedProvider } from "@/context/LoggedContext";
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
    <LoggedProvider>
      <div className={`${poppins.variable} ${raleway.variable}`}>
        {children}
      </div>
    </LoggedProvider>
  );
}
