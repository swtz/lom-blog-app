import type { Metadata } from 'next';
import './globals.css';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: {
    default: 'The blog using Next 15',
    template: '%s | The Blog',
  },
  description: 'A short description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body>
        <Container>
          <Header />

          {children}

          <footer className='text-6xl font-bold text-center py-8'>
            <p>Aqui é a Footer</p>
          </footer>
        </Container>
      </body>
    </html>
  );
}
