import React from "react";
import HeaderHomeDashboard from "./HeaderHomeDashboard";
import ThongKeMovie from "./ThongKeMovie";

const page = () => {
  return (
    <>
      <HeaderHomeDashboard />
      <div className="mt-6 flex items-start justify-between">
        <div className="home-left">
          <ThongKeMovie />
        </div>
        <div className="home-right"></div>
      </div>
    </>
  );
};

export default page;
