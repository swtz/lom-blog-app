import { InputText } from '@/components/InputText';

export default async function AdminPostNewPage() {
  return (
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
    </div>
  );
}
