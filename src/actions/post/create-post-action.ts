'use server';

type CreateActionState = {
  numero: number;
};

export async function createPostAction(
  prevState: CreateActionState,
): Promise<CreateActionState> {
  console.log({ prevState });

  return {
    ...prevState,
    numero: prevState.numero + 1,
  };
}
