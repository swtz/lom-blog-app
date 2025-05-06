import { formatHour } from '@/utils/format-datetime';

export const dynamic = 'force-static';
export const revalidate = 10;

// export async function generateStaticParams() {
//   return [{ id: '1' }, { id: '2' }];
// }

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
    </main>
  );
}
