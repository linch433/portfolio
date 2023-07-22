import Header from './Header.tsx';
import React from 'react';
import Divider from '@/components/Divider.tsx';
import LinkIconsGroup from '@/components/LinkIconsGroup.tsx';
import { clsx } from 'clsx';

type Layout_T = {
  children: React.ReactNode;
};

const Layout = ({ children }: Layout_T) => {
  return (
    <div className="font-montserrat text-xl relative">
      <Header />
      <LinkIconsGroup />
      <Divider />
      <div
        className={clsx(
          'min-h-[calc(100vh-14.55rem)]',
          'bg-primary-navy text-primary-light-grey text-lg',
          'flex justify-center',
        )}
      >
        <div className="px-8 max-w-3xl mx-auto mb-10">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
