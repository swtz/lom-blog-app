export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <section>
        {children}
        <span>Esse texto veio do layout.tsx da rota about</span>
      </section>
    </div>
  );
}
