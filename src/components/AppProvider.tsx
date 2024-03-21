'use client';
import { PropsWithChildren, useState } from 'react';

import classNames from 'classnames';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(true);

  return (
    <html lang="en" className={classNames(darkThemeEnabled && 'dark')}>
      <body
        className={classNames(
          'relative',
          'h-screen dark:bg-neutral-900 dark:text-neutral-400 text-neutral-700'
        )}
      >
        <div className="absolute right-2 top-2 z-20">
          <button
            className={classNames(
              'cursor-pointer relative w-12 h-7 inline-flex rounded-full',
              'justify-around dark:bg-neutral-700 bg-orange-400 text-neutral-700 shadow transition-colors duration-500'
            )}
            onClick={() => setDarkThemeEnabled((isEnabled) => !isEnabled)}
          >
            <span className="absolute top-1 w-5 h-5 bg-white rounded-full left-[4px] dark:translate-x-full transition-transform">
              <MoonIcon className="w-4 h-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 dark:opacity-100 transition-opacity" />
              <SunIcon className="w-4 h-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 dark:opacity-0 transition-opacity" />
            </span>
          </button>
        </div>
        {children}
      </body>
    </html>
  );
};
