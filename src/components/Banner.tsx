"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import FastBuy from "./FastBuy";
import Link from "next/link";

const Banner = () => {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    // centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="relative">
      <div className="banner overflow-hidden z-0">
        <Slider {...settings}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Slider>
      </div>
    </div>
  );
};
const Card = () => {
  return (
    <Link href="">
      <div className="w-full md:px-6">
        <div className="relative h-64 xl:h-[362px]">
          <Image
            src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            fill
            className="w-full h-full object-cover md:rounded"
          />
        </div>
      </div>
    </Link>
  );
};

export default Banner;
