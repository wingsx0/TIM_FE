"use client";
import BorderHeading from "@/components/text/BorderHeading";
import React from "react";
import Slider from "react-slick";
const ShowTimesPage = () => {
  return (
    <div className="mb-10">
      <BorderHeading uppercase={false}>Lịch chiếu</BorderHeading>
      <ListDate></ListDate>
      <div className="w-full h-1 my-4 bg-primary"></div>
      <div>
        <div className="text-black3">
          <p className="font-medium mb-6 capitalize">Infinity gala</p>
          <div className="flex items-center gap-x-5">
            <span className="capitalize block">2D Phụ Đề</span>
            <div className="flex flex-wrap items-center gap-3">
              <span className="border border-borderGray py-2 px-8 rounded hover:bg-primary hover:text-white hover:border-primary cursor-pointer ">
                16:00
              </span>
              <span className="border border-[#e5e7eb] py-2 px-8 rounded hover:bg-primary hover:text-white hover:border-primary cursor-pointer ">
                16:00
              </span>
              <span className="border border-[#e5e7eb] py-2 px-8 rounded hover:bg-primary hover:text-white hover:border-primary cursor-pointer ">
                16:00
              </span>
              <span className="border border-[#e5e7eb] py-2 px-8 rounded hover:bg-primary hover:text-white hover:border-primary cursor-pointer ">
                16:00
              </span>
              <span className="border border-[#e5e7eb] py-2 px-8 rounded hover:bg-primary hover:text-white hover:border-primary cursor-pointer ">
                16:00
              </span>
              <span className="border border-[#e5e7eb] py-2 px-8 rounded hover:bg-primary hover:text-white hover:border-primary cursor-pointer ">
                16:00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ListDate = () => {
  const NextArrow = (props: any) => {
    return (
      <div {...props}>
        {/* Thay thế nội dung SVG của bạn tại đây */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    );
  };
  const PrevArrow = (props: any) => {
    return (
      <div {...props}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

  const active = "text-white px-2 bg-secondary";
  return (
    <div className="w-96 md:w-[600px]">
      <Slider {...settings}>
        <div className="px-3">
          <div
            className={`flex flex-col items-center gap-y-1 py-3 rounded w-[80px] h-[65px] ${active}`}
          >
            <span>Hôm nay</span>
            <span>10/3</span>
          </div>
        </div>
        <div className="px-3">
          <div
            className={`flex flex-col items-center gap-y-1 py-3 rounded w-[80px] h-[65px] ${active}`}
          >
            <span>Hôm nay</span>
            <span>10/3</span>
          </div>
        </div>
        <div className="px-3">
          <div
            className={`flex flex-col items-center gap-y-1 py-3 rounded w-[80px] h-[65px] ${active}`}
          >
            <span>Hôm nay</span>
            <span>10/3</span>
          </div>
        </div>
        <div className="px-3">
          <div
            className={`flex flex-col items-center gap-y-1 py-3 rounded w-[80px] h-[65px] ${active}`}
          >
            <span>Hôm nay</span>
            <span>10/3</span>
          </div>
        </div>
        <div className="px-3">
          <div
            className={`flex flex-col items-center gap-y-1 py-3 rounded w-[80px] h-[65px] ${active}`}
          >
            <span>Hôm nay</span>
            <span>10/3</span>
          </div>
        </div>
        <div className="px-3">
          <div
            className={`flex flex-col items-center gap-y-1 py-3 rounded w-[80px] h-[65px] ${active}`}
          >
            <span>Hôm nay</span>
            <span>10/3</span>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ShowTimesPage;
