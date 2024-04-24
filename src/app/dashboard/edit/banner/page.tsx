import React from "react";
import BorderHeading from "@/components/text/BorderHeading";
import TableBanner from "./TableBanner";
import { endPointBanner } from "@/utils/api";

const page = async () => {
  const res = await fetch(endPointBanner);
  const data = await res.json();
  return (
    <div className="bg-white py-3 rounded">
      <BorderHeading uppercase>Edit banner</BorderHeading>
      <div className="px-10">
        <TableBanner banners={data}></TableBanner>
      </div>
    </div>
  );
};

export default page;
