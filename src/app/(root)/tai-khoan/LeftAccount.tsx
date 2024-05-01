"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import ProfileAccount from "./ProfileAccount";
import Policy from "./Policy";

const onChange = (key: string) => {
  // console.log(key);
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
    children: <Policy />,
  },
];

const LeftAccount = () => {
  return (
    <div className="account-left bg-white px-6 py-4">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default LeftAccount;
