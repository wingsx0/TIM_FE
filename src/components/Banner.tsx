"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import FastBuy from "./FastBuy";

const Banner = () => {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    // centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="relative">
      <div className="banner overflow-hidden z-0">
        <Slider {...settings}>
          <div className="w-[360px] xl:px-6">
            <div className="relative h-64 xl:h-[362px]">
              <Image
                src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image"
                fill
                className="w-full h-full object-cover xl:rounded"
              />
            </div>
          </div>
          <div className="w-[360px] xl:px-6">
            <div className="relative h-64 xl:h-[362px]">
              <Image
                src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image"
                fill
                className="w-full h-full object-cover xl:rounded"
              />
            </div>
          </div>
          <div className="w-[360px] xl:px-6">
            <div className="relative h-64 xl:h-[362px]">
              <Image
                src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image"
                fill
                className="w-full h-full object-cover xl:rounded"
              />
            </div>
          </div>
        </Slider>
      </div>
      <div className="absolute bottom-0 left-2/4 -translate-x-2/4 translate-y-2/4 z-10">
        {/* <FastBuy></FastBuy> */}
      </div>
    </div>
  );
};

export default Banner;
