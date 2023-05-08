import NextLink from 'next/link';
import { FC } from 'react';

type NavBarProps = {
  items: Array<{
    name: string;
    href: string;
  }>;
};

const Navbar: FC<NavBarProps> = ({ items }) => (
  <div className="bg-white">
    <nav className="container mx-auto flex justify-between p-6">
      <ul className="flex space-x-2">
        {items.map(({ name, href }) => (
          <li key={href}>
            <NextLink className="font-semibold text-slate-900" href={href}>
              {name}
            </NextLink>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Navbar;
