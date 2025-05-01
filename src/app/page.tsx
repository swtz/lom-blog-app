import { Suspense } from 'react';

import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { PostFeatured } from '@/components/PostFeatured';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer className='text-6xl font-bold text-center py-8'>
        <p>Aqui é a Footer</p>
      </footer>
    </Container>
  );
}
