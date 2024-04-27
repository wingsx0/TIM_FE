"use client";
import React from "react";
import { Modal } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setIsActivePay } from "@/redux/features/RoomSlice";

const ButtonNext = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { seatList } = useAppSelector((state) => state.roomReducer);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleContinue = () => {
    if (seatList.length <= 0) {
      setIsModalOpen(true);
    } else {
      dispatch(setIsActivePay(true));
    }
  };
  return (
    <>
      <button
        className="py-[10px] px-[70px] bg-primary rounded text-white"
        onClick={handleContinue}
      >
        Tiếp tục
      </button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        className="is-continue"
      >
        <ContentMoal />
      </Modal>
    </>
  );
};

function ContentMoal() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-y-3 text-black3">
      <InfoCircleOutlined className="text-4xl text-primary" />
      <p className="text-xl font-semibold">Thông báo</p>
      <p>Vui lòng chọn ghế</p>
    </div>
  );
}

export default ButtonNext;
