import Header from './Header.tsx';
import React from 'react';

type Layout_T = {
  children: React.ReactNode;
};

const Layout = ({ children }: Layout_T) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
