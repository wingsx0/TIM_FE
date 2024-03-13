import React from "react";
import ListMovie from "@/components/sections/ListMovie";
import BorderHeading from "@/components/text/BorderHeading";
import HeaderPage from "../HeaderPage";
import ContentMoviePage from "../contentMoviePage";
import InfoMoviePage from "../InfoMoviePage";
import ShowTimesPage from "../ShowTimesPage";
const DetailPage = () => {
  return (
    <>
      <HeaderPage></HeaderPage>
      <div className="container-page flex lg:flex-nowrap flex-wrap justify-between gap-x-8">
        <div>
          <InfoMoviePage></InfoMoviePage>
          <ContentMoviePage />
          <ShowTimesPage />
        </div>
        <ListMovie></ListMovie>
      </div>
    </>
  );
};

export default DetailPage;
