import MainHeader from '@/components/header/MainHeader';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Products',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
};

export default Layout;
