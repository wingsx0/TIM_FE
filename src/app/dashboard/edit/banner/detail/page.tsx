import Image from "next/image";
import React from "react";
import ButtonPut from "./ButtonPut";

const page = () => {
  return (
    <div>
      <div className="flex gap-x-10">
        <div className="relative overflow-hidden w-96 h-48 rounded">
          <Image
            src="https://cdn.galaxycine.vn/media/2024/3/21/demon-slayer-kimetsu-no-yaiba-on-stage-mugen-train-arc-4-1_1710999294803.jpg"
            alt=""
            fill
            className="w-full h-full object-cover"
          ></Image>
        </div>
        <div className="text-black43 font-normal">
          <div className="flex items-center gap-x-2">
            <span className="text-lg font-medium">Tiêu đề:</span>
            <span>Hello word</span>
          </div>
          <div className="flex items-center gap-x-2">
            <span className="text-lg font-medium">Đường dẫn:</span>
            <span>Hello word</span>
          </div>
          <div className="flex items-center gap-x-2">
            <span className="text-lg font-medium">Nội dung:</span>
            <span>Hello word</span>
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center gap-x-2">
        <ButtonPut></ButtonPut>
        <button className="block font-medium text-lg text-white px-20 rounded py-2 bg-red-500">
          xóa
        </button>
      </div>
    </div>
  );
};

export default page;
