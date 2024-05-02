"use client";
import React from "react";
import { Table } from "antd";
import { IBanner } from "@/interface/iBanner";
import Link from "next/link";
import ButtonAdd from "./ButtonAdd";
interface IProps {
  banners: IBanner[] | [];
}
const columns = [
  {
    title: "Tiêu đề",
    dataIndex: "tieu_de",
  },
  {
    title: "Đường dẫn",
    dataIndex: "link",
  },
  {
    title: "Nội dung",
    dataIndex: "noi_dung",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <Link href="/dashboard/edit/banner/detail">Chi tiết</Link>,
  },
];

const TableBanner = (props: IProps) => {
  const { banners } = props;
  console.log(banners);
  return (
    <>
      <ButtonAdd></ButtonAdd>
      <Table
        rowKey={"id"}
        dataSource={banners ? banners : []}
        columns={columns}
      />
    </>
  );
};

export default TableBanner;
