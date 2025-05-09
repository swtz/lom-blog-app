import { MenuAdmin } from '@/components/Admin/MenuAdmin';

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default function AdminPostLayout({
  children,
}: Readonly<AdminLayoutProps>) {
  return (
    <>
      <MenuAdmin />
      {children}
    </>
  );
}
