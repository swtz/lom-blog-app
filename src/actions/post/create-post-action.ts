'use server';

import { PublicPost } from '@/dto/post/dto';

type CreateActionState = {
  formState: PublicPost;
  errors: string[];
};

export async function createPostAction(
  prevState: CreateActionState,
  formData: FormData,
): Promise<CreateActionState> {
  const title = formData.get('title')?.toString() || '';

  return {
    formState: { ...prevState.formState, title },
    errors: [],
  };
}
