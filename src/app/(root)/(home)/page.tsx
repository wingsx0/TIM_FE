import Banner from "@/components/Banner";
import React from "react";
import BlogHomePage from "./blogHomePage";
import CouponList from "./couponList";
import FilmHomePage from "./filmHomePage";
import { endPointBanner, endPointMovieLoai } from "@/utils/api";
const HomePage = async () => {
  const resDC = await fetch(`${endPointMovieLoai}/1`);
  const dataDC = await resDC.json();
  const arrDC = dataDC.slice(0, 8);
  const resSC = await fetch(`${endPointMovieLoai}/2`);
  const dataSC = await resSC.json();
  const arrSC = dataSC.slice(0, 8);
  // fetch baner
  const resBanner = await fetch(endPointBanner);
  const dataBanner = await resBanner.json();
  return (
    <>
      <div className="relative md:mt-12 mt-0">
        <Banner data={dataBanner}></Banner>
        <FilmHomePage
          moviesDangChieu={arrDC}
          moviesSapChieu={arrSC}
        ></FilmHomePage>
        <div className="line-default"></div>
        <BlogHomePage></BlogHomePage>
        <div className="line-default"></div>
        <CouponList></CouponList>
      </div>
    </>
  );
};

export default HomePage;
