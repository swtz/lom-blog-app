import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The blog with Next 15",
  description: "A short description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <h1>Hello, world!</h1>
        </header>
        {children}
        <footer>
          <p>My footer</p>
        </footer>
      </body>
    </html>
  );
}
