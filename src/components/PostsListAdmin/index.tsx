import { findAllPostsAdmin } from '@/lib/post/queries/admin';

export async function PostsListAdmin() {
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
