import BorderHeading from "@/components/text/BorderHeading";
import React from "react";
import TableMovie from "../TableMovie";
import { endPointMovieLoai } from "@/utils/api";

const page = async () => {
  const res = await fetch(`${endPointMovieLoai}/2`);
  const data = await res.json();
  return (
    <>
      <div className="mb-10">
        <BorderHeading uppercase>Phim sắp chiếu</BorderHeading>
        <div className="px-6">
          <TableMovie movies={data}></TableMovie>
        </div>
      </div>
    </>
  );
};

export default page;
