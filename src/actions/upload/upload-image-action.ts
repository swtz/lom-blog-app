'use server';

import { mkdir, writeFile } from 'fs/promises';
import { extname } from 'path';
import {
  IMAGE_SERVER_URL,
  IMAGE_UPLOAD_DIRECTORY,
  IMAGE_UPLOADER_MAX_SIZE,
} from '@/lib/constants';

type UploadImageActionResult = {
  url: string;
  error: string;
};

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

  if (file.size > IMAGE_UPLOADER_MAX_SIZE) {
    return makeResult({ error: 'Arquivo muito grande.' });
  }

  if (!file.type.startsWith('image/')) {
    return makeResult({ error: 'Imagem inválida.' });
  }

  const imageExtension = extname(file.name);
  const uniqueImageName = `${Date.now()}${imageExtension}`;

  const uploadsFullPath = `${process.cwd()}/public/${IMAGE_UPLOAD_DIRECTORY}`;
  await mkdir(uploadsFullPath, { recursive: true });

  const fileArrayBuffer = await file.arrayBuffer(); // transforma em bytes
  const buffer = Buffer.from(fileArrayBuffer); // transforma em um formato que o node entende

  const fileFullPath = `${uploadsFullPath}/${uniqueImageName}`; // caminho completo do arquivo (com extensão)
  await writeFile(fileFullPath, buffer); // arg0: full path, arg1: dados do arquivo em bytes

  const url = `${IMAGE_SERVER_URL}/${uniqueImageName}`;

  // TODO: enviei o arquivo
  return makeResult({ url });
}
