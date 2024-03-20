import React from "react";
import TableDangChieu from "./TableDangChieu";
import BorderHeading from "@/components/text/BorderHeading";

const page = () => {
  return (
    <>
      <div>
        <BorderHeading uppercase>Danh sách Phim đang chiếu</BorderHeading>
      </div>
      <TableDangChieu></TableDangChieu>
    </>
  );
};

export default page;
