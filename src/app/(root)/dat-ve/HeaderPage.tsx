"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Modal } from "antd";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import ModalTrailer from "@/components/modal/ModalTrailer";

const HeaderPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="h-96 lg:h-[510px] relative bg-black mb-8 flex justify-center">
        <div className="w-[60%] relative">
          <div className="w-[5%] bg-gradient-to-r from-gray-950 to-transparent h-full absolute top-0 left-0 z-10"></div>
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              fill
              className="w-full h-full object-cover"
            ></Image>
            <div
              className="absolute z-10 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 cursor-pointer"
              onClick={showModal}
            >
              <PlayCircleIcon className=" w-16 h-16 text-white "></PlayCircleIcon>
            </div>
          </div>
          <div className="w-[5%] bg-gradient-to-l from-gray-950 to-transparent h-full absolute top-0 right-0 z-10"></div>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="modal-trailer w-[80%]"
      >
        <ModalTrailer></ModalTrailer>
      </Modal>
    </>
  );
};

export default HeaderPage;
