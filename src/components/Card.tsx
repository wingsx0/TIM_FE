import React from "react";
import { StarIcon, TicketIcon, PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
const Card = () => {
  return (
    <div className="w-[291px]">
      <div className="w-full h-[436px] rounded overflow-hidden relative group transition-all">
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
        <div className="absolute h-full w-full flex flex-col items-center justify-center gap-y-3 opacity-0  group-hover:opacity-100 transition-all z-20">
          <Link
            href=""
            className="z-20 text-white rounded flex items-center gap-x-1 bg-primary hover:opacity-90 py-3 px-6"
          >
            <TicketIcon className="w-6 h-6 "></TicketIcon>
            <span>Mua vé</span>
          </Link>
          <span className="z-20 border border-white rounded flex items-center gap-x-1 py-3 px-6 text-white cursor-pointer hover:border-secondary hover:bg-secondary">
            <PlayIcon className="w-6 h-6 bg-transparent" />
            <span>Trailer</span>
          </span>
        </div>
        <div className="absolute h-full w-full bg-black opacity-0 z-10   group-hover:opacity-40 transition-all"></div>
      </div>
      <span className="text-black3 text-lg font-semibold">
        Người Nhện: Không Còn Nhà
      </span>
    </div>
  );
};

export default Card;
