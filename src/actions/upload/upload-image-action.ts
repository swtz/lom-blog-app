'use server';

import { mkdir, writeFile } from 'fs/promises';
import { extname } from 'path';

type UploadImageActionResult = {
  url: string;
  error: string;
};

const imageUploaderMaxSize =
  Number(process.env.NEXT_PUBLIC_IMAGE_UPLOADER_MAX_SIZE) || 921600;

const imageUploadDir = process.env.IMAGE_UPLOAD_DIRECTORY || 'uploads';

const imageServerUrl =
  process.env.IMAGE_SERVER_URL || 'http://localhost:3000/uploads';

export async function uploadImageAction(
  formData: FormData,
): Promise<UploadImageActionResult> {
  // TODO: checar se usuário está logado

  const makeResult = ({ url = '', error = '' }) => ({ url, error });

  if (!(formData instanceof FormData)) {
    return makeResult({ error: 'Dados inválidos.' });
  }

  const file = formData.get('file');

  if (!(file instanceof File)) {
    return makeResult({ error: 'Arquivo inválido.' });
  }

  if (file.size > imageUploaderMaxSize) {
    return makeResult({ error: 'Arquivo muito grande.' });
  }

  if (!file.type.startsWith('image/')) {
    return makeResult({ error: 'Imagem inválida.' });
  }

  const imageExtension = extname(file.name);
  const uniqueImageName = `${Date.now()}${imageExtension}`;

  const uploadsFullPath = `${process.cwd()}/public/${imageUploadDir}`;
  await mkdir(uploadsFullPath, { recursive: true });

  const fileArrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(fileArrayBuffer);

  const fileFullPath = `${uploadsFullPath}/${uniqueImageName}`;
  await writeFile(fileFullPath, buffer);

  const url = `${imageServerUrl}/${uniqueImageName}`;

  // TODO: enviei o arquivo
  return makeResult({ url });
}
