import { findAllPostsAdmin } from '@/lib/post/queries/admin';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Post Admin',
};

export default async function AdminPostPage() {
  const posts = await findAllPostsAdmin();

  return (
    <div className='py-8 text-xl'>
      Hello, PostPage!
      {posts.map(post => (
        <h1 className='mt-8' key={post.id}>
          {post.author}
        </h1>
      ))}
    </div>
  );
}
