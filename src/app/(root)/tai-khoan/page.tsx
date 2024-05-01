import React from "react";
import TopInfomation from "./TopInfomation";
import MidInfomation from "./MidInfomation";
import BotInfomation from "./BotInfomation";
import { usePathname } from "next/navigation";
import LeftAccount from "./LeftAccount";
import { useAppSelector } from "@/redux/store";

const Page = () => {
  return (
    <div className="bg-bgAccount pt-10 pb-16 text-black3">
      <div className="container-page flex gap-x-16">
        <div className="w-96 bg-white rounded shadow-lg">
          <div className="px-6 py-4">
            <TopInfomation />
            <MidInfomation />
            <BotInfomation />
          </div>
        </div>
        <LeftAccount />
      </div>
    </div>
  );
};

export default Page;
