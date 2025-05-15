'use client';

import { uploadImageAction } from '@/actions/upload/upload-image-action';
import { Button } from '@/components/Button';
import { IMAGE_UPLOADER_MAX_SIZE } from '@/lib/constants';
import { ImageUpIcon } from 'lucide-react';
import { useRef, useTransition } from 'react';
import { toast } from 'react-toastify';

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition();

  function handleChooseFile() {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  }

  function handleChange() {
    toast.dismiss();

    if (!fileInputRef.current) return;

    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0]; // existe 'files'? existe algo dentro de 'files'?

    if (!file) return;

    if (file.size > IMAGE_UPLOADER_MAX_SIZE) {
      const readableMaxSize = IMAGE_UPLOADER_MAX_SIZE / 1024;
      toast.error(
        `A imagem enviada é muito grande. Tamanho máximo: ${readableMaxSize}KB.`,
      );

      fileInput.value = ''; // caso o usuário envie a mesma imagem, o 'event onChange' não é provocado
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    startTransition(async () => {
      const result = await uploadImageAction();
    });

    fileInput.value = ''; // reset do campo 'input'
  }

  return (
    <div className='flex flex-col gap-2 py-4'>
      <Button onClick={handleChooseFile} type='button' className='self-start'>
        <ImageUpIcon />
        Enviar uma imagem
      </Button>

      <input
        onChange={handleChange}
        ref={fileInputRef}
        className='hidden'
        name='file'
        type='file'
        accept='image/*'
      />
    </div>
  );
}
