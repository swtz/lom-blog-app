import { revalidateExampleAction } from '@/actions/revalidate-example';
import { formatHour } from '@/utils/format-datetime';

// export const dynamic = 'force-static';
// export const revalidate = 10;

export default async function ExemploDynamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const hour = formatHour(Date.now());

  const response = await fetch('https://randomuser.me/api/?results=1', {
    next: {
      tags: ['randomuser'],
      revalidate: 30,
    },
  });
  const json = await response.json();
  const name = json.results[0].name.first;

  return (
    <main className='min-h-[600px] text-xl font-bold'>
      <div>
        Name: {name} | Hora: {hour} | ID: {id}
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
