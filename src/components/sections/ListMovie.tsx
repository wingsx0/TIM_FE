import Image from "next/image";
import React from "react";
import BorderHeading from "../text/BorderHeading";
import { endPointMovieLoai } from "@/utils/api";
import { IMovie } from "@/interface/iTopMovie";

const ListMovie = async () => {
  const res = await fetch(`${endPointMovieLoai}/1`);
  const data = await res.json();
  const newData = data.slice(0, 2);
  return (
    <div className="hidden lg:block">
      <BorderHeading uppercase>Phim đang chiếu</BorderHeading>
      <div className="flex flex-col gap-y-4">
        {data &&
          newData.map((movie: IMovie) => (
            <Card key={movie.id_phim} data={movie}></Card>
          ))}
      </div>
    </div>
  );
};

const Card = ({ data }: { data: IMovie }) => {
  return (
    <div>
      <div className="w-[334px] h-[223px] rounded relative mb-3">
        <Image
          src={data.hinh}
          alt=""
          fill
          className="w-full h-full object-cover rounded"
        />
      </div>
      <span className="font-medium">{data.ten_phim}</span>
    </div>
  );
};

export default ListMovie;
