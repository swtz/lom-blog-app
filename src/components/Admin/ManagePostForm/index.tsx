'use client';

import { useState } from 'react';
import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import { ImageUploader } from '../ImageUploader';

//   [src/models/post/post-model.ts]
//
//   id: string; gerado automaticamente
//   slug: string; gerado automaticamente
//   author: string;
//   title: string;
//   excerpt: string;
//   content: string;
//   UPLOADER
//   coverImageUrl: string;
//   published: boolean;

export function ManagePostForm() {
  const [contentValue, setContentValue] = useState('');

  return (
    <form action='' className='mb-16'>
      <div className='flex flex-col gap-6'>
        <InputText
          labelText='ID'
          name='ID'
          placeholder='ID gerado automaticamente'
          type='text'
          defaultValue={''}
          readOnly
        />

        <InputText
          labelText='Slug'
          name='slug'
          placeholder='Slug gerado automaticamente'
          type='text'
          defaultValue={''}
          readOnly
        />

        <InputText
          labelText='Autor'
          name='author'
          placeholder='Digite o nome do autor'
          type='text'
          defaultValue={''}
        />

        <InputText
          labelText='Título'
          name='title'
          placeholder='Digite o título'
          type='text'
          defaultValue={''}
        />

        <InputText
          labelText='Excerto'
          name='excerpt'
          placeholder='Digite a descrição'
          type='text'
          defaultValue={''}
        />

        <MarkdownEditor
          labelText='Conteúdo'
          textAreaName='content'
          value={contentValue}
          setValue={setContentValue}
          disabled={false}
        />

        <ImageUploader />

        <InputText
          labelText='URL da imagem de capa'
          name='coverImageUrl'
          placeholder='Digite a descrição'
          type='text'
          defaultValue={''}
        />

        <InputCheckbox labelText='Publicar?' name='published' type='checkbox' />

        <div className='mt-4'>
          <Button type='submit'>Enviar</Button>
        </div>
      </div>
    </form>
  );
}
