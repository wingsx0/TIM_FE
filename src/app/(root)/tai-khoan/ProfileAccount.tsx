import React, { useState } from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import { Radio } from "antd";
import type { RadioChangeEvent } from "antd";

const ProfileAccount = () => {
  const [value, setValue] = useState("nam");
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="p-6">
      <form action="">
        <div className="flex justify-between items-center gap-4 flex-wrap mb-4">
          <div className="flex flex-col justify-between gap-y-2 w-[360px] ">
            <label htmlFor="" className="font-medium text-lg text-black3">
              Họ và tên
            </label>
            <div className="flex items-center gap-x-2 text-gray4A bg-[#f2f2f2] rounded py-2 px-3">
              <UserIcon className="w-5 h-5" />
              <input
                type="text"
                placeholder="Phạm Quang Minh"
                className="text-ms w-full"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-2 w-[360px] ">
            <label htmlFor="" className="font-medium text-lg text-black3">
              Họ và tên
            </label>
            <div className="flex items-center gap-x-2 text-gray4A bg-[#f2f2f2] rounded py-2 px-3">
              <UserIcon className="w-5 h-5" />
              <input
                type="text"
                placeholder="Phạm Quang Minh"
                className="text-ms w-full"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-2 w-[360px] ">
            <label htmlFor="" className="font-medium text-lg text-black3">
              Họ và tên
            </label>
            <div className="flex items-center gap-x-2 text-gray4A bg-[#f2f2f2] rounded py-2 px-3">
              <UserIcon className="w-5 h-5" />
              <input
                type="text"
                placeholder="Phạm Quang Minh"
                className="text-ms w-full"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-2 w-[360px] ">
            <label htmlFor="" className="font-medium text-lg text-black3">
              Họ và tên
            </label>
            <div className="flex items-center gap-x-2 text-gray4A bg-[#f2f2f2] rounded py-2 px-3">
              <UserIcon className="w-5 h-5" />
              <input
                type="text"
                placeholder="Phạm Quang Minh"
                className="text-ms w-full"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-2 w-[360px] ">
            <label htmlFor="" className="font-medium text-lg text-black3">
              Giới tính
            </label>
            <Radio.Group onChange={onChange} value={value} disabled>
              <Radio value={"nam"}>Nam</Radio>
              <Radio value={"nu"}>Nữ</Radio>
            </Radio.Group>
          </div>
          <div className="flex flex-col justify-between gap-y-2 w-[360px] ">
            <label htmlFor="" className="font-medium text-lg text-black3">
              Họ và tên
            </label>
            <div className="flex items-center gap-x-2 text-gray4A bg-[#f2f2f2] rounded py-2 px-3">
              <UserIcon className="w-5 h-5" />
              <input
                type="text"
                placeholder="Phạm Quang Minh"
                className="text-ms w-full"
              />
            </div>
          </div>
        </div>
        <div className="text-right">
          <button className="bg-primary py-2 px-6 rounded text-white font-medium">
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileAccount;
