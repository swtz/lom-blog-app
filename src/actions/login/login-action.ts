'use server';

import { asyncDelay } from '@/utils/async-delay';

type LoginActionState = {
  username: string;
  error: string;
};

export async function loginAction(
  prevState: LoginActionState,
  formData: FormData,
) {
  await asyncDelay(5000); // manter delay

  return {
    username: '',
    error: 'error testing',
  };
}
