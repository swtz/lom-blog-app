import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section
        className={clsx('grid grid-cols-1 gap-8 mb-16', 'sm:grid-cols-2 group')}
      >
        <Link
          className='w-full h-full overflow-hidden object-right rounded-2xl'
          href='#'
        >
          <Image
            className='group-hover:scale-105 w-full h-full object-cover object-center transition'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Título do post'
            priority
          />
        </Link>
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

          <h1
            className={clsx(
              'text-2xl/tight font-extrabold',
              'sm:text-3xl',
              'md:text-4xl',
            )}
          >
            <Link href='#'>Lorem ipsum dolor sit amet.</Link>
          </h1>
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
