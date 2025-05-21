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

  if (!(formData instanceof FormData)) {
    return {
      username: '',
      error: 'Dados inválidos',
    };
  }

  const username = formData.get('username')?.toString() || '';
  const password = formData.get('password')?.toString() || '';

  const isUsernameValid = username === process.env.LOGIN_USER;
  const isPasswordValid = '';

  return {
    username: '',
    error: 'error testing',
  };
}
