"use client";
import Banner from "@/components/Banner";
import ButtonLoadMore from "@/components/button/ButtonLoadMore";
import Image from "next/image";
import React, { useState } from "react";
import BlogHomePage from "./blogHomePage";
import CouponList from "./couponList";
import Card from "@/components/Card";
const HomePage = () => {
  const [active, setActive] = useState(true);

  return (
    <>
      <div className="relative">
        <Banner></Banner>
        <div className="container-page px-[18px] py-6 mt-7">
          <div className="flex items-center gap-x-10 font-medium mb-11">
            <span className=" text-xl px-2 py-1 border-l-4 border-l-primary">
              PHIM
            </span>
            <span
              className={`cursor-pointer relative transition-all ${
                active ? "relative text-primary" : ""
              }`}
              onClick={() => setActive(true)}
            >
              <span>Đang chiếu</span>
              <div
                className={`${
                  active
                    ? "absolute w-7 h-[2px] rounded after:content-[''] -bottom-2 left-2/4 -translate-x-2/4 bg-primary"
                    : ""
                }`}
              ></div>
            </span>
            <span
              className={`cursor-pointer relative transition-all ${
                active ? "" : "relative text-primary"
              }`}
              onClick={() => setActive(false)}
            >
              <span>Sắp chiếu</span>
              <div
                className={`${
                  active
                    ? ""
                    : "absolute w-7 h-[2px] rounded after:content-[''] -bottom-2 left-2/4 -translate-x-2/4 bg-primary"
                }`}
              ></div>
            </span>
          </div>
          <div>
            <div className={`${active ? "" : "hidden"}`}>
              <div className="flex flex-col items-center">
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
                <ButtonLoadMore link=""></ButtonLoadMore>
              </div>
            </div>
            <div className={`${active ? "hidden" : ""}`}>
              <div className="flex flex-col items-center">
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mb-10">
                  <div className="w-[291px] h-[436px] relative">
                    <Image
                      src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      fill
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="w-[291px] h-[436px] relative">
                    <Image
                      src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      fill
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="w-[291px] h-[436px] relative">
                    <Image
                      src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      fill
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="w-[291px] h-[436px] relative">
                    <Image
                      src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      fill
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="w-[291px] h-[436px] relative">
                    <Image
                      src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      fill
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="w-[291px] h-[436px] relative">
                    <Image
                      src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      fill
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="w-[291px] h-[436px] relative">
                    <Image
                      src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      fill
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="w-[291px] h-[436px] relative">
                    <Image
                      src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      fill
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
                <ButtonLoadMore link=""></ButtonLoadMore>
              </div>
            </div>
          </div>
        </div>
        <div className="line-default"></div>
        <BlogHomePage></BlogHomePage>
        <div className="line-default"></div>
        <CouponList></CouponList>
      </div>
    </>
  );
};

export default HomePage;
