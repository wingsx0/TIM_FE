import Card from "@/components/Card";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="container-page">
      <div className="flex items-center gap-x-10 font-medium mb-11">
        <span className=" text-xl px-2 py-1 border-l-4 border-l-primary">
          GÓC ĐIỆN ẢNH
        </span>
        <Link href={"/movie/dang-chieu"} className="cursor-pointer ">
          <span>Đang chiếu</span>
          {/* <div className="absolute w-7 h-[2px] rounded after:content-[''] -bottom-2 left-2/4 -translate-x-2/4 bg-primary"></div> */}
        </Link>
        <span className="cursor-pointer relative transition-all  text-primary">
          <span>Sắp chiếu</span>
          <div className="absolute w-7 h-[2px] rounded after:content-[''] -bottom-2 left-2/4 -translate-x-2/4 bg-primary"></div>
        </span>
      </div>
      <div className="grid grid-cols-4 gap-x-9 gap-y-7">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default page;
