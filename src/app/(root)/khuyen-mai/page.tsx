import ButtonText from "@/components/button/ButtonText";
import ListMovie from "@/components/sections/ListMovie";
import BorderHeading from "@/components/text/BorderHeading";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="line-default"></div>
      <div className="container-page mt-7 flex lg:flex-nowrap flex-wrap justify-between gap-x-8 mb-10">
        <div className="detail-page-right px-8">
          <BorderHeading uppercase>Ưu đãi</BorderHeading>
          <div className="grid grid-cols-3 gap-y-6">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
        <ListMovie></ListMovie>
      </div>
    </>
  );
};

const Card = () => {
  return (
    <Link
      href=""
      className="relative w-[255px] h-[380px] overflow-hidden group transition-all"
    >
      <Image
        src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        fill
        className="w-full h-full object-cover rounded"
      />
      <div className="absolute top-0 left-0 group-hover:translate-y-[0] translate-y-[120%] w-full h-full z-10 bg-blackA4 rounded flex items-center justify-center px-2 transition ease-in-out delay-150">
        <p className="text-white text-center">
          Galaxy Sala Ưu Đãi 50% Bắp Nước
        </p>
      </div>
    </Link>
  );
};

export default page;
