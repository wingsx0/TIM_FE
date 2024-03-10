"use client";
import Card from "@/components/Card";
import ButtonLoadMore from "@/components/button/ButtonLoadMore";
import Image from "next/image";
import React, { useState } from "react";

const FilmHomePage = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="container-page my-2 mx-auto md:py-12 md:px-4 text-lg font-medium">
      <div className="flex items-center gap-x-10 font-medium mb-11">
        <span className=" text-xl px-2 py-1 border-l-4 border-l-primary">
          PHIM
        </span>
        <span
          className={`cursor-pointer relative transition-all ${
            active ? "relative text-primary" : ""
          }`}
          onClick={() => setActive(true)}
        >
          <span className="text-sm md:text-base">Đang chiếu</span>
          <div
            className={`${
              active
                ? "absolute w-7 h-[2px] rounded after:content-[''] -bottom-2 left-2/4 -translate-x-2/4 bg-primary"
                : ""
            }`}
          ></div>
        </span>
        <span
          className={`cursor-pointer relative transition-all ${
            active ? "" : "relative text-primary"
          }`}
          onClick={() => setActive(false)}
        >
          <span className="text-sm md:text-base">Sắp chiếu</span>
          <div
            className={`${
              active
                ? ""
                : "absolute w-7 h-[2px] rounded after:content-[''] -bottom-2 left-2/4 -translate-x-2/4 bg-primary"
            }`}
          ></div>
        </span>
      </div>
      <div>
        <div className={`${active ? "" : "hidden"}`}>
          <FilmDangChieu></FilmDangChieu>
        </div>
        <div className={`${active ? "hidden" : ""}`}>
          <FilmSapChieu></FilmSapChieu>
        </div>
      </div>
    </div>
  );
};

const FilmDangChieu = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-y-10 gap-x-6 gap-y-8 pb-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex items-center justify-center">
        <ButtonLoadMore link=""></ButtonLoadMore>
      </div>
    </div>
  );
};

const FilmSapChieu = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-y-10 gap-x-6 gap-y-8 pb-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex items-center justify-center">
        <ButtonLoadMore link=""></ButtonLoadMore>
      </div>
    </div>
  );
};

export default FilmHomePage;
