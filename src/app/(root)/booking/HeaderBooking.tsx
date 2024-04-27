"use client";
import { useAppSelector } from "@/redux/store";
import React from "react";

const HeaderBooking = () => {
  const { tabs } = useAppSelector((state) => state.roomReducer);
  return (
    <div className="bg-white mb-8">
      <ul className="container-page flex items-center justify-center text-gray-300 font-medium ">
        <li className="pt-4 mb-4 pl-0 text-primary font-normal">
          <button className="mx-3 ml-0">Chọn phim / Suất</button>
          <div className="relative mt-4 h-[2px] before:inline-block before:w-full before:absolute before:left-0 before:h-[2px] before:bg-gray-300 after:inline-block after:absolute after:left-0 after:h-[2px] after:bg-primary after:w-full"></div>
        </li>
        {tabs?.length > 0 &&
          tabs.map((tab) => (
            <li
              className={`pt-4 mb-4 pl-0 font-normal ${
                tab.isActive ? "text-primary" : "text-gray-300"
              }`}
              key={tab.id}
            >
              <button className="mx-3 ml-0">{tab.name}</button>
              <div
                className={`relative mt-4 h-[2px] before:inline-block before:w-full before:absolute before:left-0 before:h-[2px] before:bg-gray-300 after:inline-block after:absolute after:left-0 after:h-[2px] after:w-full ${
                  tab.isActive ? " after:bg-primary" : "after:bg-gray-300"
                }`}
              ></div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HeaderBooking;
