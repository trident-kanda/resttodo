import { ReactNode, VFC } from "react";
import Header from "./Header";

const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <div className="min-h-screen bg-blue-300 ">
      <Header />
      <main className=" mx-auto w-full max-w-3xl pb-16 pt-8 sm:px-6 lg:px-8">
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
