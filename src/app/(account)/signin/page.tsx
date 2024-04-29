"use server";
import HeaderAccount from "@/components/HeaderAccount";
import React from "react";
import ContentSigin from "./ContentSigin";
import { endPointUsers } from "@/utils/api";

const Page = async () => {
  const res = await fetch(endPointUsers);
  const data = await res.json();
  return (
    <div className="w-full px-3">
      <HeaderAccount>Đăng Nhập Infinity</HeaderAccount>
      <ContentSigin users={data}></ContentSigin>
    </div>
  );
};

export default Page;
