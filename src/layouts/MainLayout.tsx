import { ReactNode } from 'react';

interface IMainLayout {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
