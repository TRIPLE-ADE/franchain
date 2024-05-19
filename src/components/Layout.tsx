import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Sidebar />
      <main className="px-28 font-sans ml-auto max-w-[100rem] 2xl:ml-72 w-full sm:w-[calc(100%-289px)] bg-slate-50 pb-44">
        {children}
      </main>
    </>
  );
};

export default Layout;
