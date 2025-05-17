'use server';

import { v4 as uuidV4 } from 'uuid';
import { makePartialPublicPost, PublicPost } from '@/dto/post/dto';
import { PostCreateSchema } from '@/lib/post/validations';
import { PostModel } from '@/models/post/post-model';
import { getZodErrorMessages } from '@/utils/get-zod-error-messages';
import { makeSlugFromText } from '@/utils/make-slug-from-text';

type CreateActionState = {
  formState: PublicPost;
  errors: string[];
};

export async function createPostAction(
  prevState: CreateActionState,
  formData: FormData,
): Promise<CreateActionState> {
  // TODO: verificar se usuário está logado

  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ['Dados inválidos'],
    };
  }

  const formDataToObject = Object.fromEntries(formData.entries());
  const zodParsedObject = PostCreateSchema.safeParse(formDataToObject);

  if (!zodParsedObject.success) {
    const errors = getZodErrorMessages(zodParsedObject.error.format());
    return {
      errors,
      formState: makePartialPublicPost(formDataToObject),
    };
  }

  const validPostData = zodParsedObject.data;
  const newPost: PostModel = {
    ...validPostData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    id: uuidV4(),
    slug: makeSlugFromText(validPostData.title),
  };

  return {
    formState: newPost,
    errors: [],
  };
}
