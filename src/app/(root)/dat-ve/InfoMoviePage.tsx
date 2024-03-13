import ButtonText from "@/components/button/ButtonText";
import { CalendarIcon, ClockIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

const InfoMoviePage = () => {
  return (
    <div className="flex gap-8 mb-5">
      <div className="w-60 md:w-[300px] h-64 md:h-96 lg:h-[450px] rounded relative shadow-sm">
        <Image
          src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          className="w-full h-full object-cover rounded"
        />
      </div>
      <ContentInfo></ContentInfo>
    </div>
  );
};

const ContentInfo = () => {
  return (
    <div className="text-black3 flex flex-col gap-y-2 lg:gap-y-4 ">
      <h1 className="text-xl font-medium lg:text-4xl lg:font-semibold">
        Người Nhện: Không Còn Nhà
      </h1>
      <div className="flex items-center gap-x-6">
        <div className="flex items-center gap-2">
          <ClockIcon className="w-4 h-4 lg:w-6 lg:h-6 text-primary" />
          <span className="text-sm lg:text-base font-medium lg:font-semibold">
            157 Phút
          </span>
        </div>
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-4 h-4 lg:w-6 lg:h-6 text-primary" />
          <span className="text-sm lg:text-base font-medium lg:font-semibold">
            15/12/2023
          </span>
        </div>
      </div>
      <div className="flex items-center gap-x-1">
        <StarIcon className="w-5 h-5 lg:h-9 lg:w-9 text-yellow-400" />
        <span className="font-medium text-2xl lg:text-4xl lg:font-semibold">
          9.0
        </span>
      </div>
      <span className="text-gray4A lg:text-base text-sm">Quốc gia: Mỹ</span>
      <span className="text-gray4A lg:text-base text-sm">
        Nhà sản xuất: Sony Pictures
      </span>
      <div className="flex flex-col gap-y-6">
        <span className="text-gray4A lg:text-base text-sm">
          <span>Thể loại:</span> <ButtonText>Hành động</ButtonText>
        </span>
        <span className="text-gray4A lg:text-base text-sm">
          <span>Đạo diễn:</span> <ButtonText>Jon Watts</ButtonText>
        </span>
        <div className="text-gray4A flex gap-x-1 lg:text-base text-sm">
          <span>Diễn viên:</span>
          <div className="flex flex-wrap items-center gap-2">
            <ButtonText>Tom Holland</ButtonText>
            <ButtonText>Zendaya</ButtonText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoMoviePage;
