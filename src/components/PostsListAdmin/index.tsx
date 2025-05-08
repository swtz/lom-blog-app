import Link from 'next/link';
import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';
import { findAllPostsAdmin } from '@/lib/post/queries/admin';

export async function PostsListAdmin() {
  const posts = await findAllPostsAdmin();

  return (
    <div className='mb-16'>
      Hello, PostPage!
      {posts.map(post => (
        <div
          className={clsx(
            'p-2',
            !post.published && 'bg-slate-300',
            'flex gap-2 items-center',
            'xs:justify-between',
          )}
          key={post.id}
        >
          <Link href={`/admin/post/${post.id}`}>{post.title}</Link>
          {!post.published && (
            <span className='text-xs text-slate-600 italic'>
              (Não publicado)
            </span>
          )}

          <button
            className={clsx(
              'text-red-500 cursor-pointer transition',
              '[&_svg]:w-5 [&_svg]:h-5',
              'hover:scale-120 hover:text-red-700',
            )}
            aria-label={`Apagar post: ${post.title}`}
            title={`Apagar post: ${post.title}`}
          >
            <Trash2Icon />
          </button>
        </div>
      ))}
    </div>
  );
}
