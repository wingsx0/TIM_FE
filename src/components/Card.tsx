"use client";
import React, { useState } from "react";
import { StarIcon, TicketIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import ButtonTrailer from "./button/ButtonTrailer";

const Card = () => {
  return (
    <div className="w-56 h-72 lg:w-72 lg:h-96 xl:w-[291px] xl:h-[436px]">
      <div className="w-full h-full rounded overflow-hidden relative group transition-all">
        <Image
          src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          className="w-full h-full object-cover rounded"
        />
        <span className="absolute flex items-center gap-x-4 bg-gradient-to-l from-[#3A3A3A] to-[#28282826] py-[2px] pr-2 pl-7 bottom-12 right-0">
          <StarIcon className="h-6 w-6 text-yellow-400 " />
          <span className="font-semibold text-white">9</span>
        </span>
        <Buttons></Buttons>
        <div className="absolute h-full w-full bg-black opacity-0 z-10   group-hover:opacity-40 transition-all"></div>
      </div>
      <span className="text-black3 text-xs lg:text-base xl:text-lg font-semibold">
        Người Nhện: Không Còn Nhà
      </span>
    </div>
  );
};

const Buttons = () => {
  return (
    <div className="absolute h-full w-full flex flex-col items-center justify-center gap-y-3 opacity-0  group-hover:opacity-100 transition-all z-20">
      <Link
        href="/dat-ve/detail-page"
        className="z-20 text-white rounded flex items-center gap-x-1 bg-primary hover:opacity-90 py-1 px-3 xl:py-3 xl:px-6"
      >
        <TicketIcon className="w-4 h-4 xl:w-6 xl:h-6"></TicketIcon>
        <span className="text-xs xl:text-base">Mua vé</span>
      </Link>
      <ButtonTrailer></ButtonTrailer>
    </div>
  );
};

export default Card;
