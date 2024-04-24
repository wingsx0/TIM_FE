"use client";
import Card from "@/components/Card";
import ButtonLoadMore from "@/components/button/ButtonLoadMore";
import { IMovie } from "@/interface/iTopMovie";
import React, { useState } from "react";
interface IProps {
  moviesDangChieu: IMovie[];
  moviesSapChieu: IMovie[];
}
const FilmHomePage = (props: IProps) => {
  const { moviesDangChieu, moviesSapChieu } = props;
  const [active, setActive] = useState(true);
  return (
    <div className="container-page my-2 mx-auto md:py-12 md:px-4 text-lg font-medium">
      <div className="flex items-center gap-x-10 font-medium mb-11">
        <span className=" text-xl px-2 py-1 border-l-4 border-l-primary">
          PHIM
        </span>
        <span
          className={`cursor-pointer relative transition-all ${
            active ? "relative text-primary" : ""
          }`}
          onClick={() => setActive(true)}
        >
          <span className="text-sm md:text-base">Đang chiếu</span>
          <div
            className={`${
              active
                ? "absolute w-7 h-[2px] rounded after:content-[''] -bottom-2 left-2/4 -translate-x-2/4 bg-primary"
                : ""
            }`}
          ></div>
        </span>
        <span
          className={`cursor-pointer relative transition-all ${
            active ? "" : "relative text-primary"
          }`}
          onClick={() => setActive(false)}
        >
          <span className="text-sm md:text-base">Sắp chiếu</span>
          <div
            className={`${
              active
                ? ""
                : "absolute w-7 h-[2px] rounded after:content-[''] -bottom-2 left-2/4 -translate-x-2/4 bg-primary"
            }`}
          ></div>
        </span>
      </div>
      <div>
        <div className={`${active ? "" : "hidden"}`}>
          <FilmDangChieu data={moviesDangChieu}></FilmDangChieu>
        </div>
        <div className={`${active ? "hidden" : ""}`}>
          <FilmSapChieu data={moviesSapChieu}></FilmSapChieu>
        </div>
      </div>
    </div>
  );
};

const FilmDangChieu = ({ data }: { data: IMovie[] }) => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-y-10 gap-x-6 gap-y-10 pb-6">
        {data &&
          data.map((movie: IMovie) => (
            <Card key={movie.id_phim} data={movie} />
          ))}
      </div>
    </div>
  );
};

const FilmSapChieu = ({ data }: { data: IMovie[] }) => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-y-12 gap-x-6 gap-y-10 pb-6">
        {data &&
          data.map((movie: IMovie) => (
            <Card key={movie.id_phim} data={movie} />
          ))}
      </div>
    </div>
  );
};

export default FilmHomePage;
