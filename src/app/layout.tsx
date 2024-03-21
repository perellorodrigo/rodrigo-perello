import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { AppProvider } from '@/components/AppProvider';

export const metadata = {
  title: 'Rodrigo Perello',
  description: 'Portfolio Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <main>{children}</main>
      <Analytics />
    </AppProvider>
  );
}
