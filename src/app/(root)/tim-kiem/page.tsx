"use client";
import { IMovie } from "@/interface/iTopMovie";
import { useAppSelector } from "@/redux/store";
import { endPointSearchNameMovie } from "@/utils/api";
import { SearchOutlined } from "@ant-design/icons";
import Image from "next/image";
import React, { useState } from "react";

const SearchPage = () => {
  const [keywords, setKeywords] = useState("");
  console.log(keywords);
  const [movies, setMovies] = useState([]);
  const handleChangeValue = (e: any) => {
    setKeywords(e.target.value);
  };
  const handleSearch = async () => {
    const res = await fetch(`${endPointSearchNameMovie}${keywords}`);
    const data = await res.json();
    setMovies(data.results);
  };
  return (
    <div className="container-page my-10 ">
      <div className="w-[70%] mx-auto">
        <div className="relative">
          <input
            type="text"
            className="py-2 border-b-2 border-gray-300 w-full"
            onChange={handleChangeValue}
          />
          <button
            onClick={handleSearch}
            className="absolute top-2/4 right-0 -translate-y-2/4 bg-primary h-full w-20 rounded text-white"
          >
            <SearchOutlined />
          </button>
        </div>
        <div className="mt-4">
          <span>{movies?.length || "0"} </span>
          <span>kết quả tìm kiếm cho từ khóa: </span>
          <span className="text-primary">{keywords}</span>
        </div>
        <div className="mt-5 flex flex-col gap-y-2">
          {movies?.length > 0 &&
            movies.map((movie: IMovie) => (
              <Movie key={movie.id_phim} movie={movie}></Movie>
            ))}
        </div>
      </div>
    </div>
  );
};

const Movie = ({ movie }: { movie: IMovie }) => {
  return (
    <div className="shadow-md border border-gray-100 rounded flex  overflow-hidden ">
      <div className="relative w-16 h-16 ">
        <Image
          src={movie.hinh || "/images/imgnull.jpg"}
          alt=""
          fill
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3 flex items-center gap-x-5">
        <div className="flex flex-col ml-5 text-black43 w-96">
          <span className="font-medium">{movie.ten_phim || "unknow"}</span>
          <div className="flex gap-x-1">
            <span className="text-sm">{movie.dao_dien || "unknow"}</span>
          </div>
        </div>
        <div className="w-56">
          <span className="capitalize text-gray4A text-center">
            {movie.quoc_gia || "unknow"}
          </span>
        </div>
        <div>
          <span className="text-gray4A">
            {movie.thoi_luong || "0"}&nbsp;Phút
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
