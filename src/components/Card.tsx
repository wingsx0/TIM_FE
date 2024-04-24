"use client";
import React, { useState } from "react";
import { StarIcon, TicketIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import ButtonTrailer from "./button/ButtonTrailer";
import { IMovie } from "@/interface/iTopMovie";

const Card = ({ data }: { data: IMovie }) => {
  return (
    <div className="w-56 h-72 lg:w-72 lg:h-96 xl:w-[291px] xl:h-[436px] block pb-6">
      <div className="w-full h-full rounded overflow-hidden relative group transition-all mb-3">
        <Image
          src={data.hinh}
          alt=""
          fill
          className="w-full h-full object-cover rounded"
        />
        <span className="absolute flex items-center gap-x-4 bg-gradient-to-l from-[#3A3A3A] to-[#28282826] py-[2px] pr-2 pl-7 bottom-12 right-0">
          <StarIcon className="h-6 w-6 text-yellow-400 " />
          <span className="font-semibold text-white">9</span>
        </span>
        <Buttons data={data}></Buttons>
        <div className="absolute h-full w-full bg-black opacity-0 z-10   group-hover:opacity-40 transition-all"></div>
      </div>
      <div className="text-black3 text-xs lg:text-base xl:text-lg font-semibold">
        {data.ten_phim}
      </div>
    </div>
  );
};

const Buttons = ({ data }: { data: IMovie }) => {
  return (
    <div className="absolute h-full w-full flex flex-col items-center justify-center gap-y-3 opacity-0  group-hover:opacity-100 transition-all z-20">
      <Link
        href={`/dat-ve/${data.id_phim}`}
        className="z-20 text-white rounded flex items-center gap-x-1 bg-primary hover:opacity-90 py-1 px-3 xl:py-3 xl:px-6"
      >
        <TicketIcon className="w-4 h-4 xl:w-6 xl:h-6"></TicketIcon>
        <span className="text-xs xl:text-base">Mua vé</span>
      </Link>
      <ButtonTrailer link={data.trailer}></ButtonTrailer>
    </div>
  );
};

export default Card;
