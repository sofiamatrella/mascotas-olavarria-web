import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ padding: "10px" }}>
      <Header />
      {children}
    </div>
  );
}
