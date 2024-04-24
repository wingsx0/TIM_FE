"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import { IBanner } from "@/interface/iBanner";

const Banner = ({ data }: { data: IBanner[] }) => {
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
          {data &&
            data.map((banner: IBanner) => (
              <Card key={banner.id} data={banner} />
            ))}
        </Slider>
      </div>
    </div>
  );
};
const Card = ({ data }: { data: IBanner }) => {
  return (
    <Link href={data.link}>
      <div className="w-full md:px-6">
        <div className="relative h-64 xl:h-[362px]">
          <Image
            src={data.img}
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
