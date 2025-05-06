import { revalidateExampleAction } from '@/actions/revalidate-example';
import { formatHour } from '@/utils/format-datetime';

export const dynamic = 'force-static';
// export const revalidate = 10;

export default async function ExemploDynamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const hour = formatHour(Date.now());

  return (
    <main className='min-h-[600px] text-xl font-bold'>
      <div>
        Hora: {hour} ID: {id}
      </div>

      <form className='py-16' action={revalidateExampleAction}>
        <input type='hidden' name='path' defaultValue={`/exemplo/${id}`} />

        <button
          className='bg-blue-600 text-white p-2 rounded-4xl hover:bg-blue-300 transition cursor-pointer'
          type='submit'
        >
          Revalidate
        </button>
      </form>
    </main>
  );
}
