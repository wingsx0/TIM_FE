"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { title } from "process";
import Image from "next/image";
import { topMovie } from "@/data/dataTopMovie";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Dataset {
  label?: string; // Label là tùy chọn, vì label có thể không tồn tại trong một số trường hợp
  data: number[];
  borderColor: string;
  backgroundColor: string;
  tension: number;
}
const ThongKeMovie = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };
  const dataMovies = [
    {
      label: "2023",
      data: [100, 200, 150, 400],
    },
    {
      label: "2024",
      data: [400, 300, 150, 500, 200],
    },
  ];
  const data: { labels: string[]; datasets: Dataset[] } = {
    labels: [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12",
    ],
    datasets: [
      {
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.4,
        data: [],
      },
      {
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.4,
        data: [],
      },
    ],
  };
  data.datasets.forEach((dataset, index) => {
    if (dataMovies[index]) {
      dataset.label = dataMovies[index].label;
      dataset.data = dataMovies[index].data;
    }
  });
  const arrMovie = topMovie.sort((a, b) => b.view - a.view);

  return (
    <>
      <div className="p-3 bg-white rounded">
        <Line options={options} data={data} />
      </div>
      <div className="mt-6 flex flex-col bg-white rounded p-3">
        {arrMovie &&
          arrMovie.map((movie, index) => (
            <Card key={movie.id} movie={movie} index={index}></Card>
          ))}
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

export default ThongKeMovie;
