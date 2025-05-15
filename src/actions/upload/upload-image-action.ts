'use server';

import { logColor } from '@/utils/log-color';

export async function uploadImageAction() {
  logColor('Hello from action: uploadImageAction');

  return {
    user: 'user-password',
  };
}
