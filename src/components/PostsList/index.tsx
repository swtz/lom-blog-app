import { postRepository } from '@/repositories/post';
import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';
import clsx from 'clsx';
import { formatDatetime, formatDistanceToNow } from '@/utils/format-datetime';

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div
      className={clsx(
        'grid grid-cols-1 gap-8',
        'sm:grid-cols-2',
        'md:grid-cols-3',
      )}
    >
      {posts.map(post => {
        const postLink = `/post/${post.slug}`;

        return (
          <div className='flex flex-col gap-4 group' key={post.id}>
            <div className='flex flex-col'>
              <PostCoverImage
                linkProps={{ href: postLink }}
                imageProps={{
                  src: post.coverImageUrl,
                  alt: post.title,
                  width: 1200,
                  height: 720,
                  priority: true,
                }}
              />
            </div>
            <div
              className={clsx(
                'flex flex-col gap-3',
                'sm:justify-center sm:gap-2.5',
              )}
            >
              <time
                className='text-slate-600 block text-sm/tight'
                dateTime={post.createdAt}
                title={formatDistanceToNow(post.createdAt)}
              >
                {formatDatetime(post.createdAt)}
              </time>

              <PostHeading as='h2' url={postLink}>
                {post.title}
              </PostHeading>

              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
