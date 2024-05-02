"use client";
import BorderHeading from "@/components/text/BorderHeading";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
const ShowTimesPage = ({ xuatchieu }: { xuatchieu: any }) => {
  return (
    <div className="mb-10">
      <BorderHeading uppercase={false}>Lịch chiếu</BorderHeading>
      <div className="w-full h-1 my-4 bg-primary"></div>
      <div className="text-black3">
        <p className="font-medium mb-6 capitalize">Infinity gala</p>
        <div className="flex items-center gap-x-5 mb-2">
          <span className="capitalize block">2D Phụ Đề</span>
        </div>
      </div>
      <ListDate xuatchieu={xuatchieu}></ListDate>
    </div>
  );
};

const ListDate = ({ xuatchieu }: { xuatchieu: any }) => {
  const NextArrow = (props: any) => {
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
    slidesToShow: 2,
    slidesToScroll: 2,
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
    <div className="w-full md:w-[600px]">
      <div className="flex flex-col gap-y-2">
        {xuatchieu?.length > 0 &&
          xuatchieu.map((item: any) => (
            <div key={item.id_xuat_chieu} className="flex items-center">
              <div className="px-3">
                <div
                  className={`flex flex-col items-center gap-y-1 py-3 rounded w-[80px] h-[65px] ${active}`}
                >
                  <span>{item.bat_dau}</span>
                </div>
              </div>
              <div className="flex items-centere gap-x-2">
                <Link
                  href={`/booking/${item.id_phim}`}
                  className="border border-borderGray py-2 px-8 rounded hover:bg-primary hover:text-white hover:border-primary cursor-pointer"
                >
                  16:00
                </Link>
              </div>
            </div>
          ))}
      </div>
      <div></div>
    </div>
  );
};

export default ShowTimesPage;
