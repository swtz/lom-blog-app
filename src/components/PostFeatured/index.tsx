import clsx from 'clsx';
import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';
import { findAllPublicPostsCached } from '@/lib/post/queries';
import { createImageSrc } from '@/utils/create-image-src';

export async function PostFeatured() {
  const posts = await findAllPublicPostsCached();
  const post = posts[0];
  const postLink = `/post/${post.slug}`;

  return (
    <section
      className={clsx('grid grid-cols-1 gap-8 mb-16', 'sm:grid-cols-2 group')}
    >
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          src: createImageSrc(post.coverImageUrl),
          alt: post.title,
          width: 1200,
          height: 720,
          priority: true,
        }}
      />
      <PostSummary
        postHeading='h1'
        postLink={postLink}
        createdAt={post.createdAt}
        excerpt={post.excerpt}
        title={post.title}
      />
    </section>
  );
}
