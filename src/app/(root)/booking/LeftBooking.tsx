"use client";
import React from "react";
import ChooseChair from "./ChooseChair";
import Pay from "./Pay";
import { useAppSelector } from "@/redux/store";

const LeftBooking = () => {
  const [isNextPay, setIsNextPay] = React.useState(false);
  const { tabs } = useAppSelector((state) => state.roomReducer);
  let isTrue = tabs[1].isActive;
  React.useEffect(() => {
    if (isTrue) {
      setIsNextPay(true);
    }
  }, [isTrue]);
  return <>{isNextPay ? <Pay /> : <ChooseChair />}</>;
};

export default LeftBooking;
