'use server';

import { revalidateTag } from 'next/cache';

export async function revalidateExampleAction(formData: FormData) {
  const path = formData.get('path') || '';
  console.log('Estou em uma server action.', path);

  revalidateTag('posts'); // HomePage route
  revalidateTag('post-rotina-matinal-de-pessoas-altamente-eficazes'); // PostSlugPage route
}
