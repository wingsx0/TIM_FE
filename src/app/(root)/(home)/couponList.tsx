"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const CouponList = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="container-page my-6 lg:my-12">
      <div className="flex items-center gap-x-10 font-medium mb-11">
        <span className=" text-xl px-2 py-1 border-l-4 border-l-primary">
          TIN KHUYỄN MÃI
        </span>
      </div>
      <Slider {...settings}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Slider>
    </div>
  );
};
const Card = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="relative w-32 h-20 md:w-40 md:h-28 lg:w-56 lg:h-36 xl:w-72 xl:h-44 px-3">
        <Image
          src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          className="w-full h-full object-cover rounded"
        />
      </div>
      <span className="text-xs font-medium lg:text-base hidden md:block">
        Quà tặng vui vẻ cho dịp cuối tuần
      </span>
    </div>
  );
};
export default CouponList;
