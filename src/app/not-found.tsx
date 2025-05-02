import clsx from 'clsx';

export default function NotFoundPage() {
  return (
    <div
      className={clsx(
        'min-h-[320px] bg-slate-900 text-slate-100',
        'mb-16 p-8 rounded-xl',
        'flex flex-col item-center justify-center text-center',
      )}
    >
      <div>
        <h1 className='text-4xl'>Página não encontrada</h1>
        <p className='text-3xl/normal font-bold mb-8'>Erro 404</p>
        <p>Essa página não existe ou foi removida desse site.</p>
      </div>
    </div>
  );
}
