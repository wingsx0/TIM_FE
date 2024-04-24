import React from "react";
import FormPostMovie from "./FormPostMovie";
import { endPointMovieTheLoai } from "@/utils/api";
type FieldType = {
  id_loai?: number;
  ten_phim?: string;
  id_the_loai?: number;
  ngay_chieu?: string;
  quoc_gia?: string;
  nha_sx?: string;
  noi_dung?: string;
  hinh?: string;
  trailer?: string;
  tuoi?: string;
  dao_dien?: string;
};
import { FormProps } from "antd";

const page = async () => {
  return (
    <div className="bg-white py-3 rounded">
      <FormPostMovie></FormPostMovie>
    </div>
  );
};

export default page;
