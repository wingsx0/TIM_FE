"use client";
import Image from "next/image";
import React, { useState } from "react";

import ChooseChair from "../ChooseChair";
import Pay from "../Pay";

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
        <div className="w-[411px]">
          <div className="p-4 bg-white text-black43 border-t-[6px] border-t-primary rounded">
            <div className="flex gap-x-2">
              <div className="w-32 h-48 rounded relative">
                <Image
                  src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  fill
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div>
                <span className="text-lg font-semibold">Kung Fu Panda 4</span>
                <p className="mt-[10px]">2D Phụ Đề</p>
              </div>
            </div>
            <div className="py-4">
              <p className="text-lg mb-2">
                <span className="capitalize  font-medium">The infinity</span>
                <span className="uppercase"> - RAP 1</span>
              </p>
              <p className="pb-5 border-b border-gray4A border-dashed">
                <span>Suất: </span>
                <span className="font-medium">12:15</span>
                <span className="capitalize"> - Thứ Bảy,</span>
                <span className="font-medium"> 09/03/2024</span>
              </p>
              <div className="pb-5 border-b border-gray4A border-dashed mt-2">
                <p className="mb-2">
                  <span className="font-medium">8x</span>
                  <span> Ghế đơn</span>
                </p>
                <p>
                  <span>Ghế: </span>
                  <span className="font-medium">F10</span>
                </p>
              </div>
            </div>
            <div>
              <p className="xl:flex items-center justify-between">
                <strong>Tổng cộng</strong>
                <span className="inline-block font-bold text-primary ">
                  0 ₫
                </span>
              </p>
            </div>
          </div>
          <div className="font-medium mt-8 flex items-center justify-between">
            <button className="py-[10px] px-[70px] text-primary">
              Quay lại
            </button>
            <button className="py-[10px] px-[70px] bg-primary rounded text-white">
              Tiếp tục
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
