"use client";
import React, { useState } from "react";
import ButtonText from "@/components/button/ButtonText";
import { CalendarIcon, ClockIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Modal } from "antd";
import ModalPutMovie from "@/components/modal/ModalPutMovie";
import { IMovie, ITheLoaiMovie } from "@/interface/iTopMovie";

interface IProps {
  movie: IMovie;
  the_loai: ITheLoaiMovie;
}
const ContentDetail = (props: IProps) => {
  const { movie, the_loai } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    console.log("oke");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    console.log("da xoa");
  };
  return (
    <>
      <div className="flex gap-x-5">
        <div className="relative w-60 h-96 rounded overflow-hidden border border-gray-100 shadow-md">
          <Image
            src={movie.hinh}
            alt=""
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-black43 flex flex-col gap-y-2">
          <h3 className="text-xl font-medium">{movie.ten_phim}</h3>
          <div className="flex items-center gap-x-6">
            <div className="flex items-center gap-2">
              <ClockIcon className="w-2 h-2 lg:w-4 lg:h-4 text-primary" />
              <span className="text-sm lg:text-base font-medium lg:font-semibold">
                {movie.thoi_luong} phút
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-2 h-2 lg:w-4 lg:h-4 text-primary" />
              <span className="text-sm lg:text-base font-medium lg:font-semibold">
                {movie.ngay_chieu}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            <StarIcon className="w-2 h-2 lg:h-4 lg:w-4 text-yellow-400" />
            <span className="font-medium text-sm lg:text-lg lg:font-semibold">
              9.0
            </span>
          </div>
          <span className="text-gray4A lg:text-base text-sm">
            Quốc gia: {movie.quoc_gia}
          </span>
          <span className="text-gray4A lg:text-base text-sm">
            Nhà sản xuất: {movie.nha_sx}
          </span>
          <div className="flex flex-col gap-y-6">
            <span className="text-gray4A lg:text-base text-sm">
              <span>Thể loại:</span>{" "}
              <ButtonText>{the_loai.ten_loai}</ButtonText>
            </span>
            <span className="text-gray4A lg:text-base text-sm">
              <span>Đạo diễn:</span> <ButtonText>{movie.dao_dien}</ButtonText>
            </span>
            {/* <div className="text-gray4A flex gap-x-1 lg:text-base text-sm">
              <span>Diễn viên:</span>
              <div className="flex flex-wrap items-center gap-2">
                <ButtonText>Tom Holland</ButtonText>
                <ButtonText>Zendaya</ButtonText>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <ModalPutMovie></ModalPutMovie>
      </Modal>
      <div className="mt-10 flex items-center gap-x-3" onClick={showModal}>
        <button className="py-2 px-7 text-center bg-primary w-32 text-white text-base font-medium rounded">
          Sửa
        </button>
      </div>
    </>
  );
};

export default ContentDetail;
