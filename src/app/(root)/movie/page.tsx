import Card from "@/components/Card";
import React from "react";

const MoviePage = () => {
  return (
    <div className="container-page">
      <div className="flex items-center gap-x-10 font-medium mb-11">
        <span className=" text-xl px-2 py-1 border-l-4 border-l-primary">
          GÓC ĐIỆN ẢNH
        </span>
        <span className="cursor-pointer relative transition-all  text-primary">
          <span>Đang chiếu</span>
          <div className="absolute w-7 h-[2px] rounded after:content-[''] -bottom-2 left-2/4 -translate-x-2/4 bg-primary"></div>
        </span>
        <span className="cursor-pointer">
          <span>Sắp chiếu</span>
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

export default MoviePage;
