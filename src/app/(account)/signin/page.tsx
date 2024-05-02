"use server";
import HeaderAccount from "@/components/HeaderAccount";
import React from "react";
import ContentSigin from "./ContentSigin";
import { endPointUsers } from "@/utils/api";

const Page = async () => {
  async function getData() {
    const res = await fetch(endPointUsers, {
      method: "GET",
      next: { tags: ["users"] },
    });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
  const data = await getData();
  return (
    <div className="w-full px-3">
      <button></button>
      <HeaderAccount>Đăng Nhập Infinity</HeaderAccount>
      <ContentSigin users={data}></ContentSigin>
    </div>
  );
};

export default Page;
