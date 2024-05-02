import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="line-default"></div>
        <div className="flex-1">{children}</div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Layout;
