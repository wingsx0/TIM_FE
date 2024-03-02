import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const CouponList = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="container-page py-12">
      <div className="flex items-center gap-x-10 font-medium mb-11">
        <span className=" text-xl px-2 py-1 border-l-4 border-l-primary">
          TIN KHUYỄN MÃI
        </span>
      </div>
      <Slider {...settings}>
        <div>
          <div className="relative w-[272px] h-[180px]">
            <Image
              src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              fill
              className="w-full h-full object-cover rounded"
            />
          </div>
          <span></span>
        </div>
        <div>
          <div className="relative w-[272px] h-[180px]">
            <Image
              src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              fill
              className="w-full h-full object-cover rounded"
            />
          </div>
          <span></span>
        </div>
        <div>
          <div className="relative w-[272px] h-[180px]">
            <Image
              src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              fill
              className="w-full h-full object-cover rounded"
            />
          </div>
          <span></span>
        </div>
        <div>
          <div className="relative w-[272px] h-[180px]">
            <Image
              src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              fill
              className="w-full h-full object-cover rounded"
            />
          </div>
          <span></span>
        </div>
      </Slider>
    </div>
  );
};

export default CouponList;
