import { findPostBySlugCached } from '@/lib/post/queries';
import { notFound } from 'next/navigation';

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  let post;

  try {
    post = await findPostBySlugCached(slug);
  } catch {}

  if (!post) notFound(); // como lança uma exceção, dispensa uso de 'return'

  return (
    <div>
      <p>{post.title}</p>
    </div>
  );
}
