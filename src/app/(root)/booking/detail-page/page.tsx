"use client";
import React, { useState } from "react";
import ChooseChair from "../ChooseChair";
import Pay from "../Pay";
import Ticket from "../Ticket";

const page = () => {
  return (
    <div className="bg-bgAccount">
      <div className="line-default"></div>
      <div className="bg-white mb-8">
        <ul className="container-page flex items-center justify-center text-gray-300 font-medium ">
          <li className="pt-4 mb-4 pl-0 text-primary font-normal">
            <button className="mx-3 ml-0">Chọn phim / Suất</button>
            <div className="relative mt-4 h-[2px] before:inline-block before:w-full before:absolute before:left-0 before:h-[2px] before:bg-gray-300 after:inline-block after:absolute after:left-0 after:h-[2px] after:bg-primary after:w-full"></div>
          </li>
          <li className="pt-4 mb-4 pl-0 text-primary font-normal">
            <button className="mx-3 ml-0">Chọn ghế</button>
            <div className="relative mt-4 h-[2px] before:inline-block before:w-full before:absolute before:left-0 before:h-[2px] before:bg-gray-300 after:inline-block after:absolute after:left-0 after:h-[2px] after:bg-primary after:w-full"></div>
          </li>
          <li className="pt-4 mb-4 pl-0 text-gray-300 font-normal">
            <button className="mx-3 ml-0">Thanh toán</button>
            <div className="relative mt-4 h-[2px] before:inline-block before:w-full before:absolute before:left-0 before:h-[2px] before:bg-gray-300 "></div>
          </li>
          <li className="pt-4 mb-4 pl-0 text-gray-300 font-normal">
            <button className="mx-3 ml-0">Xác nhận</button>
            <div className="relative mt-4 h-[2px] before:inline-block before:w-full before:absolute before:left-0 before:h-[2px] before:bg-gray-300 "></div>
          </li>
        </ul>
      </div>
      <div className="container-page rounded md:mb-8 mb-4 flex justify-between gap-x-4 ư">
        <div className="w-[70%]">
          {/* Choose chair start */}
          <ChooseChair></ChooseChair>
          {/* Pay component start */}
          {/* <Pay></Pay> */}
        </div>
        <Ticket></Ticket>
      </div>
    </div>
  );
};

export default page;
