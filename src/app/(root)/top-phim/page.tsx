"use client";
import ListMovie from "@/components/sections/ListMovie";
import BorderHeading from "@/components/text/BorderHeading";
import React from "react";
import { topMovie } from "@/data/dataTopMovie";
import Image from "next/image";

const page = () => {
  const arrMovie = topMovie.sort((a, b) => b.view - a.view);
  return (
    <>
      <div className="line-default"></div>
      <div className="container-page mt-7 flex lg:flex-nowrap flex-wrap justify-between gap-x-8 mb-10">
        <div className="detail-page-right px-8">
          <BorderHeading uppercase>Top phim</BorderHeading>
          <div>
            {/* <Line options={options} data={data} /> */}
            <div className="mt-16 flex flex-col">
              {arrMovie &&
                arrMovie.map((movie, index) => (
                  <Card key={movie.id} movie={movie} index={index}></Card>
                ))}
            </div>
          </div>
        </div>
        <ListMovie />
      </div>
    </>
  );
};

const Card = ({ movie, index }: { movie: any; index: number }) => {
  const { image, country, director, duration, name } = movie;
  return (
    <div className="flex items-center text-sm py-6 border-b border-b-gray4A">
      <span className={`number ${index < 3} ? is-top-${index + 1} : ""`}>
        {index + 1}
      </span>
      <div className="relative w-10 h-10 rounded">
        <Image
          src={image}
          alt={name}
          fill
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div className="flex flex-col ml-5 text-black43 w-96">
        <span className="font-medium">{name}</span>
        <div className="flex gap-x-1">
          <span>{director}</span>
        </div>
      </div>
      <div className="w-56">
        <span className="capitalize text-gray4A text-center">{country}</span>
      </div>
      <div>
        <span className="text-gray4A">{duration}&nbsp;Phút</span>
      </div>
    </div>
  );
};

export default page;
