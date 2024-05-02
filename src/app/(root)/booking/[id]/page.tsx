import React from "react";

import Ticket from "../Ticket";
import LeftBooking from "../LeftBooking";
import HeaderBooking from "../HeaderBooking";
import { endPointMovie } from "@/utils/api";

const page = async (props: any) => {
  const { params } = props;
  const id = params.id;
  const getMovie = async () => {
    const res = await fetch(`${endPointMovie}/${id}`, {
      method: "GET",
      next: { tags: ["list-movies"] },
    });
    return res.json();
  };

  const movie = await getMovie();
  return (
    <div className="bg-bgAccount">
      <div className="line-default"></div>
      <HeaderBooking></HeaderBooking>
      <div className="container-page rounded md:mb-8 mb-4 flex justify-between gap-x-4">
        <div className="w-[70%]">
          <LeftBooking></LeftBooking>
        </div>
        <Ticket movie={movie}></Ticket>
      </div>
    </div>
  );
};

export default page;
