"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import ProfileAccount from "./ProfileAccount";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "",
    children: "",
  },
  {
    key: "2",
    label: "Lịch sử giao dịch",
    children: (
      <div className="flex justify-center">
        <span className="text-gray4A font-normal">
          Lưu ý: chỉ hiện thị 20 giao dịch gần nhất
        </span>
      </div>
    ),
  },
  {
    key: "3",
    label: "Thông tin cá nhân",
    children: <ProfileAccount />,
  },
  {
    key: "4",
    label: "Chính sách",
    children: "Content of Tab Pane 3",
  },
];

const LeftAccount = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="account-left bg-white px-6 py-4">
      {/* <div className="flex items-center justify-center text-xl font-medium gap-x-4 mx-auto">
        <a className="cursor-pointer" href="#transaction">
          Lịch sử giao dịch
        </a>
        <span>Thông tin cá nhân</span>
        <span>Chính sách</span>
      </div>
      <div></div> */}
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default LeftAccount;
