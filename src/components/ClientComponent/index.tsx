'use client';

// import { ServerComponent } from '../ServerComponent';

export function ClientComponent({ children }: { children: React.ReactNode }) {
  console.log('client-side');
  return (
    <div>
      ClientComponent
      {children}
    </div>
  );
}
