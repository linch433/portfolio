import Header from './Header.tsx';
import React from 'react';
import Divider from '@/components/Divider.tsx';
import { clsx } from 'clsx';
import LinkIconsGroup from '@/components/LinkIconsGroup.tsx';

type Layout_T = {
  children: React.ReactNode;
};

const Layout = ({ children }: Layout_T) => {
  return (
    <div className="font-montserrat text-xl">
      <Header />
      <LinkIconsGroup />
      <Divider />
      <div
        className={clsx(
          'min-h-[calc(100vh-14.55rem)]',
          'bg-primary-navy text-primary-light-grey',
          'flex justify-center',
        )}
      >
        <div className="w-full flex md:w-[60%] lg:w-[45%] mb-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
