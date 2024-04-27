import React, { useState } from "react";
import { Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import Image from "next/image";
const Pay = () => {
  return (
    <div>
      <div className="bg-white p-4 text-black43 mb-8">
        <p className="text-lg mb-4">Khuyến mãi</p>
        <div className="flex items-end gap-8">
          <div>
            <label
              className="inline-block mb-1 text-black-10 text-sm font-bold"
              htmlFor="voucher-code"
            >
              Mã khuyến mãi
            </label>
            <input
              id="voucher-code"
              type="text"
              className="border w-full py-2 px-4 border-gray-300"
              name="barcode"
            />
          </div>
          <button className="bg-primary text-white text-sm rounded px-12 py-2 h-10">
            Áp Dụng
          </button>
        </div>
      </div>
      <div className="bg-white p-4 text-black43">
        <p className="text-lg mb-4">Phương thức thanh toán</p>
        <ChoosePay></ChoosePay>
      </div>
    </div>
  );
};

const ChoosePay = () => {
  const [value, setValue] = useState("momo");
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <Radio.Group
      onChange={onChange}
      value={value}
      className="flex flex-col gap-y-3"
    >
      <div className="flex items-center gap-x-2">
        <Radio value={"momo"}></Radio>
        <div className="w-[50px] h-[50px] rounded relative">
          <Image
            src="https://pic2.zhimg.com/v2-0501ad3f863015ccc4b5e894e28a6749_b.jpg"
            alt=""
            fill
            className="w-full h-full object-cover rounded"
          />
        </div>
        <span className="text-black43 text-lg">Ví điện tử momo</span>
      </div>
      <div className="flex items-center gap-x-2">
        <Radio value={"vnpay"}></Radio>
        <div className="w-[50px] h-[50px] rounded relative border border-gray-200">
          <Image
            src="https://vnpay.vn/s1/statics.vnpay.vn/2023/9/06ncktiwd6dc1694418196384.png"
            alt=""
            fill
            className="w-full h-full object-cover rounded"
          />
        </div>
        <span className="text-black43 text-lg">Ví điện tử VNPay</span>
      </div>
    </Radio.Group>
  );
};
export default Pay;
