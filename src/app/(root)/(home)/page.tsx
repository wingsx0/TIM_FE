"use client";
import Banner from "@/components/Banner";
import React, { useState } from "react";
import BlogHomePage from "./blogHomePage";
import CouponList from "./couponList";
import FilmHomePage from "./filmHomePage";
const HomePage = () => {
  return (
    <>
      <div className="relative md:mt-12 mt-0">
        <Banner></Banner>
        <FilmHomePage></FilmHomePage>
        <div className="line-default"></div>
        <BlogHomePage></BlogHomePage>
        <div className="line-default"></div>
        <CouponList></CouponList>
      </div>
    </>
  );
};

export default HomePage;
