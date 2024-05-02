import React from "react";
import BorderHeading from "@/components/text/BorderHeading";
import TableBanner from "./TableBanner";
import { endPointBanner } from "@/utils/api";

const page = async () => {
  async function getData() {
    const res = await fetch(endPointBanner, {
      method: "GET",
      next: { tags: ["list-banners"] },
    });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
  const data = await getData();

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
