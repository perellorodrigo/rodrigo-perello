import './globals.css';
import { Karla } from 'next/font/google';

import Navbar from '@/components/NavBar';

const karla = Karla({ subsets: ['latin'], variable: '--font-karla' });

export const metadata = {
  title: 'Rodrigo Perello',
  description: 'Portfolio Website',
};

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/about' },
  { name: 'Tools', href: '/tools' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`bg-white ${karla.variable}`}>
      <body className={karla.className}>
        <Navbar items={navItems} />
        <main>{children}</main>
      </body>
    </html>
  );
}
