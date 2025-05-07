'use server';

import { revalidateTag } from 'next/cache';

export async function revalidateExampleAction(formData: FormData) {
  const path = formData.get('path') || '';
  console.log('Estou em uma server action.', path);

  // revalidatePath(`${path}`);
  revalidateTag('exemploDynamicPage');
}
