import './globals.css';

import classNames from 'classnames';
import { Analytics } from '@vercel/analytics/react';

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
    <html lang="en" className={`dark `}>
      <body
        className={classNames(
          'relative',
          'h-screen dark:bg-neutral-900 text-neutral-400'
        )}
      >
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
