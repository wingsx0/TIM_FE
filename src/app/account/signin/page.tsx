import HeaderAccount from "@/components/HeaderAccount";
import React from "react";
import ContentSigin from "./ContentSigin";

const Page = () => {
  return (
    <div className="w-full px-3">
      <HeaderAccount>Đăng Nhập Infinity</HeaderAccount>
      <ContentSigin></ContentSigin>
    </div>
  );
};

export default Page;
