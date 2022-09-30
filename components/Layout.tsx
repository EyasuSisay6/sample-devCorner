/** @format */

import Sidebar from "components/Sidebar/Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64">
        <div className="mx-auto w-full">{children}</div>
      </div>
    </>
  );
};

export default Layout;
