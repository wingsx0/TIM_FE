import React from "react";
import ContentSignup from "./ContentSignup";
import HeaderAccount from "@/components/HeaderAccount";

const page = () => {
  return (
    <div className="w-full px-3">
      <HeaderAccount>Đăng Ký Infinity</HeaderAccount>
      <ContentSignup />
    </div>
  );
};

export default page;
