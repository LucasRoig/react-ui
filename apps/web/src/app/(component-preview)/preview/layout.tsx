export default function PreviewLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main
      style={{
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      {children}
    </main>
  );
}
