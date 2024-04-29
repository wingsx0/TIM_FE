import Image from "next/image";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center  h-screen bg-gray-300">
      <div className="w-[70%] h-[95%] flex items-center bg-white shadow-md rounded overflow-hidden">
        <div className="relative w-[60%] h-full">
          <Image
            src="/images/backgroud.png"
            alt="backgroud"
            fill
            className="w-full h-full object-cover"
          ></Image>
        </div>
        <div className="w-[40%] flex justify-center item-center text-black3">
          {children}
        </div>
      </div>
    </div>
  );
};
export default Layout;
