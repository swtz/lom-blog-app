import { eq } from 'drizzle-orm';
import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';
import { logColor } from '@/utils/log-color';
import { asyncDelay } from '@/utils/async-delay';
import { SIMULATE_WAIT_IN_MS } from '@/lib/constants';

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }
  async findBySlugPublic(slug: string): Promise<PostModel> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);

    logColor('findBySlugPublic');
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });

    if (!post) throw new Error('Post não encontrado pelo slug');

    return post;
  }
  async findAll(): Promise<PostModel[]> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }
  async findById(id: string): Promise<PostModel> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) throw new Error('Post não encontrado pelo id');

    return post;
  }
}

// Testes:

// (async () => {
//   const repo = new DrizzlePostRepository();
//   const post = await repo.findById('be3f14a1-0105-4e2e-bfc9-133a05e7bda6');

//   console.log(post.id);
// })();

// (async () => {
//   const repo = new DrizzlePostRepository();
//   const posts = await repo.findAllPublic();

//   posts.forEach(post => console.log(post.author, post.published));
// })();
