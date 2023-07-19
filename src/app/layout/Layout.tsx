import Header from './Header.tsx';
import React from 'react';
import Divider from '@/components/Divider.tsx';
import { clsx } from 'clsx';

type Layout_T = {
  children: React.ReactNode;
};

const Layout = ({ children }: Layout_T) => {
  return (
    <div className="font-poppins text-xl">
      <Header />
      <Divider />
      <div
        className={clsx(
          'h-[calc(100vh-9.55rem)]',
          'bg-primary-navy text-primary-light-grey',
          'flex justify-center',
        )}
      >
        <div className="w-full md:w-[50%]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
