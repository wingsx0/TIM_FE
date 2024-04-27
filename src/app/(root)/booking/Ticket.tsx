"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useAppSelector } from "@/redux/store";
import { handleChangeMoney } from "@/utils/ultils";
import ButtonNext from "./ButtonNext";

const Ticket = () => {
  const { seatList } = useAppSelector((state) => state.roomReducer);
  return (
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
              <span className="font-medium">{seatList.length}x</span>
              <span> Ghế đơn</span>
            </p>
            <div className="flex items-center gap-x-1">
              <span>Ghế: </span>
              <div className="flex gap-x-1">
                {seatList.length > 0 &&
                  seatList.map((seat) => (
                    <span key={seat.name} className="font-medium">
                      {seat.name.toUpperCase()}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="xl:flex items-center justify-between">
            <strong>Tổng cộng</strong>
            <span className="inline-block font-bold text-primary ">
              {handleChangeMoney(seatList.length * 80000)}
            </span>
          </p>
        </div>
      </div>
      <div className="font-medium mt-8 flex items-center justify-between">
        <button className="py-[10px] px-[70px] text-primary">Quay lại</button>
        <ButtonNext></ButtonNext>
      </div>
    </div>
  );
};

export default Ticket;
