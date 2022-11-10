import React, { ReactNode } from 'react';
import Category from './Category';
import Newsletter from './Newsletter';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => (
  <div className='sm:container px-1 lg:bg-[#FBF9FA] w-full h-full'>
    {children}
  </div>
);

export default Layout;
