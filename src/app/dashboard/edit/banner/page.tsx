import React from "react";
import BorderHeading from "@/components/text/BorderHeading";
import TableBanner from "./TableBanner";
import { endPointBanner } from "@/utils/api";

const page = async () => {
  const res = await fetch(endPointBanner);
  const data = await res.json();
  return (
    <>
      <BorderHeading uppercase>Edit banner</BorderHeading>
      <div className="px-10">
        <TableBanner banners={data}></TableBanner>
      </div>
    </>
  );
};

export default page;
