'use client';

import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';

type DeletePostButtonProps = {
  id: string;
  title: string;
};

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
  function handleClick() {
    alert('Olá, post: ' + id);
  }

  return (
    <button
      className={clsx(
        'text-red-500 cursor-pointer transition',
        '[&_svg]:w-5 [&_svg]:h-5',
        'hover:scale-120 hover:text-red-700',
      )}
      aria-label={`Apagar post: ${title}`}
      title={`Apagar post: ${title}`}
      onClick={handleClick}
    >
      <Trash2Icon />
    </button>
  );
}
