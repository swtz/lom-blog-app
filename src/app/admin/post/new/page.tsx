import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';

export default async function AdminPostNewPage() {
  return (
    <form action='' className='mb-16'>
      <div className='flex flex-col gap-6'>
        <InputText labelText='Nome' placeholder='Digite seu nome' />
        <InputText labelText='Sobrenome' placeholder='Digite seu sobrenome' />
        <InputText
          disabled
          labelText='Sobrenome'
          placeholder='Digite seu sobrenome'
          defaultValue={'Estou desabilitado!'}
        />
        <InputText
          disabled
          labelText='desabilitado sem defaultValue'
          placeholder='Digite seu sobrenome'
        />
        <InputText
          labelText='Sobrenome'
          placeholder='Digite seu sobrenome'
          defaultValue={'Sou somente leitura!'}
          readOnly
        />
        <InputText
          labelText='Sobrenome'
          placeholder='readOnly sem defaultValue'
          readOnly
        />

        <InputCheckbox labelText='custom checkbox' />

        <div className='mt-4'>
          <Button type='submit'>Enviar</Button>
        </div>
      </div>
    </form>
  );
}
