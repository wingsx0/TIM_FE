"use client";
import React from "react";
import { Table } from "antd";
import { endPointMovie } from "@/utils/api";

const TableXuatChieu = ({ data }: { data: any }) => {
  const columns = [
    {
      title: "Tên phim",
      dataIndex: "ten_phim",
      key: "name",
    },
    {
      title: "Giá",
      dataIndex: "gia",
      key: "age",
    },
    {
      title: "Thời gian",
      dataIndex: "thoi_gian",
      key: "address",
    },
    {
      title: "Ngày chiếu",
      dataIndex: "bat_dau",
      key: "date",
    },
  ];
  return (
    <>
      <Table dataSource={data} columns={columns} />;
    </>
  );
};

export default TableXuatChieu;
