import React, { useState } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { Modal } from "antd";
import ModalTrailer from "../modal/ModalTrailer";

const ButtonTrailer = ({ link }: { link: string }) => {
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
      <span
        className="z-20 border border-white rounded flex items-center gap-x-1 py-1 px-3 xl:py-3 xl:px-6 text-white cursor-pointer hover:border-secondary hover:bg-secondary"
        onClick={showModal}
      >
        <PlayIcon className="w-4 h-4 xl:w-6 xl:h-6" />
        <span className="text-xs xl:text-base">Trailer</span>
      </span>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="modal-trailer w-auto"
      >
        <ModalTrailer link={link}></ModalTrailer>
      </Modal>
    </>
  );
};

export default ButtonTrailer;
