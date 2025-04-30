import { postRepository } from '@/repositories/post';

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div>
      {posts.map((post, index) => {
        return (
          <div key={index}>
            <h1>{post.title}</h1>
            <span>{post.author}</span>
          </div>
        );
      })}
    </div>
  );
}
