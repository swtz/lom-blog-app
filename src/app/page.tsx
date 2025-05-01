import { Suspense } from 'react';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostCoverImage } from '@/components/PostCoverImage';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section
        className={clsx('grid grid-cols-1 gap-8 mb-16', 'sm:grid-cols-2 group')}
      >
        <PostCoverImage
          linkProps={{ href: '/post/post-1' }}
          imageProps={{
            src: '/images/bryen_5.png',
            alt: 'A imagem que mostra a capa do post',
            width: 1200,
            height: 720,
            priority: true,
          }}
        />
        <div
          className={clsx(
            'flex flex-col gap-3',
            'sm:justify-center sm:gap-2.5',
          )}
        >
          <time
            className='text-slate-600 block text-sm/tight'
            dateTime='2025-04-30'
          >
            30/04/2025 21:59
          </time>

          <PostHeading url='/'>Lorem ipsum dolor sit amet.</PostHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            deleniti officiis, dicta suscipit mollitia harum voluptatibus illo.
            Odio suscipit illum cumque placeat nihil dolorem sequi, omnis
            laboriosam esse nulla. Neque.
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer className='text-6xl font-bold text-center py-8'>
        <p>Aqui é a Footer</p>
      </footer>
    </Container>
  );
}
