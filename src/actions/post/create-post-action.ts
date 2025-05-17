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
  // TODO: verificar se usuário está logado

  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ['Dados inválidos'],
    };
  }

  // converte do tipo FormData para Object do JavaScript
  const formDataToObject = Object.fromEntries(formData.entries());
  console.log(formDataToObject);

  return {
    formState: prevState.formState,
    errors: [],
  };
}
