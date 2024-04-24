import Card from "@/components/Card";
import { IMovie } from "@/interface/iTopMovie";
import { endPointMovieLoai } from "@/utils/api";
import Link from "next/link";
import React from "react";
const page = async () => {
  const res = await fetch(`${endPointMovieLoai}/1`);
  const data = await res.json();

  return (
    <div className="container-page my-12">
      <div className="flex items-center gap-x-10 font-medium mb-11">
        <span className=" text-xl px-2 py-1 border-l-4 border-l-primary">
          PHIM
        </span>
        <span className="cursor-pointer relative transition-all  text-primary">
          <span>Đang chiếu</span>
          <div className="absolute w-7 h-[2px] rounded after:content-[''] -bottom-2 left-2/4 -translate-x-2/4 bg-primary"></div>
        </span>
        <Link href={"/movie/sap-chieu"} className="cursor-pointer">
          <span>Sắp chiếu</span>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-x-9 gap-y-7">
        {data &&
          data.map((movie: IMovie) => (
            <Card key={movie.id_phim} data={movie} />
          ))}
      </div>
    </div>
  );
};

export default page;
