import React from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
const BotInfomation = () => {
  return (
    <div className="font-medium">
      <div className="py-5 border-b border-b-black43 flex items-center justify-between">
        <span className="">
          HOTLINE hỗ trợ: <span> 19001508 (9:00 - 22:00) </span>
        </span>
        <ArrowRightCircleIcon className="w-6 h-6 text-primary"></ArrowRightCircleIcon>
      </div>
      <div className="py-5 border-b border-b-black43 flex items-center justify-between">
        <span className="">
          Email: <span> hotro@infinity.vn </span>
        </span>
        <ArrowRightCircleIcon className="w-6 h-6 text-primary"></ArrowRightCircleIcon>
      </div>
      <div className="py-5 flex items-center justify-between">
        <span className="">Câu hỏi thường gặp</span>
        <ArrowRightCircleIcon className="w-6 h-6 text-primary"></ArrowRightCircleIcon>
      </div>
    </div>
  );
};

export default BotInfomation;
