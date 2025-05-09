import { Button } from '@/components/Button';

export default async function AdminPostNewPage() {
  return (
    <div className='py-16 flex gap-4'>
      <Button variant='default' size='sm'>
        Olá, mundo!
      </Button>
      <Button variant='ghost' size='md'>
        Olá, mundo!
      </Button>
      <Button variant='danger' size='lg'>
        Olá, mundo!
      </Button>
    </div>
  );
}
