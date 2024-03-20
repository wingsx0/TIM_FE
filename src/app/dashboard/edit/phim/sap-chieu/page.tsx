import BorderHeading from "@/components/text/BorderHeading";
import React from "react";
import TableDangChieu from "../dang-chieu/danh-sach/TableDangChieu";

const page = () => {
  return (
    <>
      <div className="mb-10">
        <BorderHeading uppercase>Phim sắp chiếu</BorderHeading>
      </div>
      <TableDangChieu />;
    </>
  );
};

export default page;
