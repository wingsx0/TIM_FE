import { DatePicker, DatePickerProps, TimePicker } from "antd";
import React from "react";
import type { Dayjs } from "dayjs";
const ModalPutMovie = () => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(dateString);
  };
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-col gap-y-1">
        <label htmlFor="">Tên phim</label>
        <input
          type="text"
          placeholder="Nhập tên phim"
          className="border border-borderGray rounded px-5 py-2"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <label htmlFor="">Thời lượng</label>
        <input
          type="text"
          placeholder="Nhập tên phim"
          className="border border-borderGray rounded px-5 py-2"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <label htmlFor="">Ngày chiếu</label>
        {/* <DatePicker onChange={onChange} className="px-5 py-2" /> */}
      </div>
      <div className="flex flex-col gap-y-1">
        <label htmlFor="">Thời lượng</label>
        <input
          type="number"
          placeholder="Nhập Thời lượng phim"
          className="border border-borderGray rounded px-5 py-2"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <label htmlFor="">Quốc gia</label>
        <input
          type="text"
          placeholder="Nhập quốc gia sản xuất phim"
          className="border border-borderGray rounded px-5 py-2"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <label htmlFor="">Quốc gia</label>
        <input
          type="text"
          placeholder="Nhập quốc gia sản xuất phim"
          className="border border-borderGray rounded px-5 py-2"
        />
      </div>
    </div>
  );
};

export default ModalPutMovie;
