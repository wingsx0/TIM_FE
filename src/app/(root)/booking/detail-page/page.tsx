import React from "react";

import Ticket from "../Ticket";
import LeftBooking from "../LeftBooking";
import HeaderBooking from "../HeaderBooking";

const page = () => {
  return (
    <div className="bg-bgAccount">
      <div className="line-default"></div>
      <HeaderBooking></HeaderBooking>
      <div className="container-page rounded md:mb-8 mb-4 flex justify-between gap-x-4">
        <div className="w-[70%]">
          <LeftBooking></LeftBooking>
        </div>
        <Ticket></Ticket>
      </div>
    </div>
  );
};

export default page;
