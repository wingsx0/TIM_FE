import React, { useState } from "react";
import { Modal } from "antd";
import Image from "next/image";
import Login from "../register/Login";
import Signup from "../register/Signup";

const ButtonLoginHeader = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const showModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleOk = () => {
    setIsLoginModalOpen(false);
  };

  const handleCancel = () => {
    setIsLoginModalOpen(false);
    setIsLogin(true);
  };
  return (
    <>
      <span onClick={showModal} className="cursor-pointer">
        Đăng nhập
      </span>
      <Modal
        open={isLoginModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="modal-login"
      >
        <div>
          <div className="flex flex-col items-center justify-center px-6 py-10 text-black43">
            <div className="mb-3">
              <div className="relative w-[190px] h-[119px]">
                <Image
                  src="https://www.galaxycine.vn/_next/static/media/icon-login.fbbf1b2d.svg"
                  alt=""
                  fill
                  className="w-full h-full object-cover"
                ></Image>
              </div>
              <p className="text-lg font-medium py-2">
                {isLogin ? <span>Đăng nhập</span> : <span>Đăng ký</span>} tài
                khoản
              </p>
            </div>
            <div>{isLogin ? <Login></Login> : <Signup></Signup>}</div>
            <div className="line-default"></div>
            <div className="my-3 flex justify-center">
              <span>
                {isLogin ? (
                  <span>Bạn chưa có tài khoản?</span>
                ) : (
                  <span>Bạn đã có tài khoản?</span>
                )}
                &nbsp;
                <span className="text-primary cursor-pointer">
                  {isLogin ? (
                    <span onClick={() => setIsLogin(false)}>Đăng ký ở đây</span>
                  ) : (
                    <span onClick={() => setIsLogin(true)}>
                      Đăng nhập ở đây
                    </span>
                  )}
                </span>
              </span>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ButtonLoginHeader;
