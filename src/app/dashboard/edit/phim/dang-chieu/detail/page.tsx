"use client";
import React, { useState } from "react";
import ButtonText from "@/components/button/ButtonText";
import { CalendarIcon, ClockIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Modal } from "antd";
import ModalPutMovie from "@/components/modal/ModalPutMovie";

const Page = () => {
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
            src="https://cdn.galaxycine.vn/media/2024/2/23/kungfu-panda-4-500_1708659195441.jpg"
            alt=""
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-black43 flex flex-col gap-y-2">
          <h3 className="text-xl font-medium">Kung Fu Panda 4</h3>
          <div className="flex items-center gap-x-6">
            <div className="flex items-center gap-2">
              <ClockIcon className="w-2 h-2 lg:w-4 lg:h-4 text-primary" />
              <span className="text-sm lg:text-base font-medium lg:font-semibold">
                157 Phút
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-2 h-2 lg:w-4 lg:h-4 text-primary" />
              <span className="text-sm lg:text-base font-medium lg:font-semibold">
                15/12/2023
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
            Quốc gia: Trung Quốc
          </span>
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

export default Page;
