'use server';

import { revalidateTag } from 'next/cache';
import { postRepository } from '@/repositories/post';
import { PostModel } from '@/models/post/post-model';

export async function deletePostAction(id: string) {
  // TODO: checar login do usuário

  if (!id || typeof id !== 'string') {
    return {
      error: 'Dados inválidos',
    };
  }

  let post: PostModel;
  try {
    post = await postRepository.delete(id);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        error: e.message,
      };
    }

    return {
      error: 'Erro desconhecido',
    };
  }

  revalidateTag('posts');
  revalidateTag(`post-${post.slug}`);

  return {
    error: '',
  };
}
