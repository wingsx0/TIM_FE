import { endPointMovie, endPointXuatChieu } from "@/utils/api";
import React from "react";
import TableXuatChieu from "./TableXuatChieu";

const PageXuatChieu = async () => {
  async function getData() {
    try {
      const resXuatChieu = await fetch(endPointXuatChieu, {
        method: "GET",
        next: { tags: ["list-xuatchieu"] },
      });

      const resPhim = await fetch(endPointMovie, {
        method: "GET",
        next: { tags: ["list-phim"] },
      });

      if (!resXuatChieu.ok || !resPhim.ok) {
        throw new Error("Failed to fetch data");
      }

      const xuatChieuData = await resXuatChieu.json();
      const phimData = await resPhim.json();

      const phimNameMap: { [id_phim: number]: string } = {};
      phimData.forEach((phim: { id_phim: number; ten_phim: string }) => {
        phimNameMap[phim.id_phim] = phim.ten_phim;
      });

      // Thay thế id_phim bằng tên phim
      const newData = xuatChieuData.map((xuatChieu: { id_phim: number }) => {
        const tenPhim = phimNameMap[xuatChieu.id_phim];
        return {
          ...xuatChieu,
          ten_phim: tenPhim, // Thêm trường mới "ten_phim" vào đối tượng
        };
      });

      return newData;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }

  // Gọi hàm getData và sử dụng dữ liệu trả về
  const data = await getData();
  console.log(data);
  return (
    <div className="bg-white p-10">
      <TableXuatChieu data={data} />
    </div>
  );
};

export default PageXuatChieu;
