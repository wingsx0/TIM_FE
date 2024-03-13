import Image from "next/image";
import React from "react";
import BorderHeading from "../text/BorderHeading";

const ListMovie = () => {
  return (
    <div className="hidden lg:block">
      <BorderHeading uppercase>Phim đang chiếu</BorderHeading>
      <div className="flex flex-col gap-y-4">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div>
      <div className="w-[334px] h-[223px] rounded relative mb-3">
        <Image
          src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          className="w-full h-full object-cover rounded"
        />
      </div>
      <span className="font-medium">Người nhện: Không còn nhà</span>
    </div>
  );
};

export default ListMovie;
