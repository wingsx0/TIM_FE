"use client";
import React from "react";
import Image from "next/image";
import { GiftIcon } from "@heroicons/react/24/solid";
import { useAppSelector } from "@/redux/store";
const TopInfomation = () => {
  const { user } = useAppSelector((state) => state.authReducer);
  console.log(user);
  return (
    <div className="flex items-center gap-x-4 px-10 py-5 border-b border-b-black43">
      <div className="relative w-20 h-20">
        <Image
          src={
            user?.avatar ||
            "https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          fill
          className="w-full h-full object-cover rounded-full "
        />
      </div>
      <div>
        <span className="font-medium text-lg">{user?.ho_ten || "Unknow"}</span>
        <div className="flex items-center gap-x-2 mt-1">
          <GiftIcon className="w-6 h-6 text-primary"></GiftIcon>
          <span>0 stars</span>
        </div>
      </div>
    </div>
  );
};

export default TopInfomation;
