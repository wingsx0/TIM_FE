import React, { useState } from "react";
import {
  AppstoreOutlined,
  DashboardFilled,
  DashboardOutlined,
  HomeFilled,
  HomeOutlined,
  MailOutlined,
  SettingFilled,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuProps["items"] = [
  getItem("Dashboard", "sub1", <DashboardFilled />, [
    getItem(<Link href="/dashboard/home">Home</Link>, "g1", <HomeFilled />),
    getItem(
      <Link href="">House</Link>,
      "g2",
      null,
      [getItem("Option 3", "3"), getItem("Option 4", "4")],
      "group"
    ),
  ]),

  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
  ]),

  { type: "divider" },

  getItem("Edit", "sub4", <SettingFilled />, [
    getItem("Edit Phim", "sub3", null, [
      getItem(
        <Link href="/dashboard/edit/phim/dang-chieu">Đang chiếu</Link>,
        "7"
      ),
      getItem(
        <Link href="/dashboard/edit/phim/sap-chieu">Sắp chiếu</Link>,
        "8"
      ),
      getItem(
        <Link href="/dashboard/edit/phim/them-phim">Thêm phim</Link>,
        "9"
      ),
    ]),
    getItem(<Link href="/dashboard/edit/banner">Edit Banner</Link>, "10"),
    getItem(<Link href="/dashboard/edit/blog">Edit Blog</Link>, "11"),
  ]),
];

const MenuLeftDashboard = () => {
  return (
    <div>
      <Menu
        style={{ height: "100%", borderRight: 0 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
        className="menu-dashboard"
      />
    </div>
  );
};
//
export default MenuLeftDashboard;
