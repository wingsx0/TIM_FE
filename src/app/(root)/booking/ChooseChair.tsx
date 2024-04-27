import React from "react";
import Room from "./Room";

const ChooseChair = () => {
  return (
    <div>
      <div className="md:col-span-2 flex items-center gap-x-14 py-4 px-6 bg-white">
        <label className="md:text-base text-sm font-medium inline-block mt-2">
          Đổi suất chiếu
        </label>
        <div className="flex items-center gap-x-3 flex-wrap w-[70%] gap-y-3">
          <span className="px-4 py-2 text-sm font-medium rounded border border-borderGray cursor-pointer hover:bg-primary hover:text-white">
            12:15
          </span>
          <span className="px-4 py-2 text-sm font-medium rounded border border-borderGray bg-primary text-white cursor-pointer">
            12:15
          </span>
        </div>
      </div>
      <div className="mt-8 bg-white py-4 px-6">
        <Room></Room>
        <p className="text-center text-xs text-gray4A">Màn hình</p>
        <div className="border-2 border-primary mt-3"></div>
        <div className="text-sm flex md:flex-row flex-col-reverse justify-between items-center py-9 gap-2">
          <div className="flex gap-5">
            <div>
              <span className="w-5 h-5 rounded bg-gray-300 inline-block align-middle"></span>
              <span className="ml-2">Ghế đã bán</span>
            </div>
            <div>
              <span className="w-5 h-5 rounded bg-primary inline-block align-middle"></span>
              <span className="ml-2">Ghế đang chọn</span>
            </div>
          </div>
          <div>
            <span className="w-5 h-5 rounded border border-grey-20 inline-block align-middle"></span>
            <span className="ml-2">Ghế đơn</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseChair;
