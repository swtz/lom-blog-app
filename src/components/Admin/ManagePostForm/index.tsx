'use client';

import { useState } from 'react';
import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';

export function ManagePostForm() {
  const [contentValue, setContentValue] = useState('');

  return (
    <form action='' className='mb-16'>
      <div className='flex flex-col gap-6'>
        <InputText labelText='Nome' placeholder='Digite seu nome' />
        <InputText labelText='Sobrenome' placeholder='Digite seu sobrenome' />

        <InputCheckbox labelText='custom checkbox' />

        <MarkdownEditor
          labelText='Conteúdo do post'
          disabled={false}
          textAreaName='content'
          value={contentValue}
          setValue={setContentValue}
        />

        <div className='mt-4'>
          <Button type='submit'>Enviar</Button>
        </div>
      </div>
    </form>
  );
}
