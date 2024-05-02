import React from "react";
import ListMovie from "@/components/sections/ListMovie";
import BorderHeading from "@/components/text/BorderHeading";
import HeaderPage from "../HeaderPage";
import ContentMoviePage from "../contentMoviePage";
import InfoMoviePage from "../InfoMoviePage";
import ShowTimesPage from "../ShowTimesPage";
import {
  endPointMovie,
  endPointMovieTheLoai,
  endPointXuatChieu,
} from "@/utils/api";

const DetailPage = async (props: any) => {
  const { params } = props;
  const id = params.id;
  const res = await fetch(`${endPointMovie}/${id}`);
  const data = await res.json();
  const resTheLoai = await fetch(`${endPointMovieTheLoai}/${data.id_the_loai}`);
  const dataTheLoai = await resTheLoai.json();
  async function getData() {
    try {
      const res = await fetch(`${endPointXuatChieu}/${id}`, {
        method: "GET",
        next: { tags: ["list-xuatchieu"] },
      });
      return res.json();
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }
  const xuatChieu = await getData();
  return (
    <>
      <HeaderPage image={data.hinh} link={data.trailer}></HeaderPage>
      <div className="container-page flex lg:flex-nowrap flex-wrap justify-between gap-x-8">
        <div>
          <InfoMoviePage data={data} theloai={dataTheLoai}></InfoMoviePage>
          <ContentMoviePage content={data.noi_dung} />
          <ShowTimesPage xuatchieu={xuatChieu} />
        </div>
        <ListMovie></ListMovie>
      </div>
    </>
  );
};

export default DetailPage;
