"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";

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
    <div className="banner overflow-hidden">
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
  );
};

export default Banner;
