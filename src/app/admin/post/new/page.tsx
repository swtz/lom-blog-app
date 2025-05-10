import { Button } from '@/components/Button';
import { BugIcon } from 'lucide-react';

export default async function AdminPostNewPage() {
  return (
    <>
      <div className='py-16 flex gap-4 items-center'>
        <Button variant='default' size='sm'>
          <BugIcon />
          Olá, mundo!
        </Button>
        <Button variant='ghost' size='md'>
          <BugIcon />
          Olá, mundo!
        </Button>
        <Button variant='danger' size='lg'>
          <BugIcon />
          Olá, mundo!
        </Button>
      </div>

      <div className='py-16 flex gap-4 items-center'>
        <Button disabled variant='default' size='sm'>
          <BugIcon />
          Olá, mundo!
        </Button>
        <Button disabled variant='ghost' size='md'>
          <BugIcon />
          Olá, mundo!
        </Button>
        <Button disabled variant='danger' size='lg'>
          <BugIcon />
          Olá, mundo!
        </Button>
      </div>
    </>
  );
}
