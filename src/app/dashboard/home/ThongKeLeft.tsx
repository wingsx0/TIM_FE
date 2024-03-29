"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Hành động",
    "Kinh dị",
    "Tâm lý",
    "Hoạt hình",
    "Tình cảm",
    "Hài hước",
    "Giả tưởng",
  ],
  datasets: [
    {
      label: "%",
      data: [12, 19, 3, 5, 2, 3, 1],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 4,
    },
  ],
};
const ThongKeLeft = () => {
  return (
    <>
      <div className="bg-white rounded py-4 px-3">
        <div className="flex justify-center mb-3">
          <span className="font-medium text-black43">
            Thống kê lượt xem theo thể loại
          </span>
        </div>
        <Pie data={data} />
      </div>
    </>
  );
};

export default ThongKeLeft;
