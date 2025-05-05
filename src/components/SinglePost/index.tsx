import { findPostBySlugCached } from '@/lib/post/queries';
import Image from 'next/image';
import { PostHeading } from '../PostHeading';
import { PostDate } from '../PostDate';
import { SafeMarkdown } from '../SafeMarkdown';
import { createImageSrc } from '@/utils/create-image-src';

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);
  const postLink = `/post/${slug}`;

  return (
    <article className='mb-16'>
      <header className='flex flex-col gap-4'>
        <Image
          className='rounded-xl'
          src={createImageSrc(post.coverImageUrl)}
          width={1200}
          height={720}
          alt={post.title}
          priority
        />

        <PostHeading url={postLink}>{post.title}</PostHeading>

        <p>
          {post.author} | <PostDate dateTime={post.createdAt} />
        </p>
      </header>

      <p className='text-lg mb-4 text-slate-700 sm:text-xl'>{post.excerpt}</p>

      <SafeMarkdown markdown={post.content} />
    </article>
  );
}
