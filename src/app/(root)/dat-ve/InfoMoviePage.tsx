import ButtonText from "@/components/button/ButtonText";
import { IMovie, ITheLoaiMovie } from "@/interface/iTopMovie";
import { CalendarIcon, ClockIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

const InfoMoviePage = ({
  data,
  theloai,
}: {
  data: IMovie;
  theloai: ITheLoaiMovie;
}) => {
  return (
    <div className="flex gap-8 mb-5">
      <div className="w-60 md:w-[300px] h-64 md:h-96 lg:h-[450px] rounded relative shadow-sm">
        <Image
          src={data.hinh}
          alt=""
          fill
          className="w-full h-full object-cover rounded"
        />
      </div>
      <ContentInfo data={data} theloai={theloai}></ContentInfo>
    </div>
  );
};

const ContentInfo = ({
  data,
  theloai,
}: {
  data: IMovie;
  theloai: ITheLoaiMovie;
}) => {
  return (
    <div className="text-black3 flex flex-col gap-y-2 lg:gap-y-4 ">
      <h1 className="text-xl font-medium lg:text-4xl lg:font-semibold">
        {data.ten_phim}
      </h1>
      <div className="flex items-center gap-x-6">
        <div className="flex items-center gap-2">
          <ClockIcon className="w-4 h-4 lg:w-6 lg:h-6 text-primary" />
          <span className="text-sm lg:text-base font-medium lg:font-semibold">
            {data.thoi_luong} Phút
          </span>
        </div>
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-4 h-4 lg:w-6 lg:h-6 text-primary" />
          <span className="text-sm lg:text-base font-medium lg:font-semibold">
            {data.ngay_chieu}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-x-1">
        <StarIcon className="w-5 h-5 lg:h-9 lg:w-9 text-yellow-400" />
        <span className="font-medium text-2xl lg:text-4xl lg:font-semibold">
          9.0
        </span>
      </div>
      <span className="text-gray4A lg:text-base text-sm">
        Quốc gia: {data.quoc_gia}
      </span>
      <span className="text-gray4A lg:text-base text-sm">
        Nhà sản xuất: {data.nha_sx}
      </span>
      <div className="flex flex-col gap-y-6">
        <span className="text-gray4A lg:text-base text-sm">
          <span>Thể loại:</span> <ButtonText>{theloai.ten_loai}</ButtonText>
        </span>
        <span className="text-gray4A lg:text-base text-sm">
          <span>Đạo diễn:</span> <ButtonText>{data.dao_dien}</ButtonText>
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
