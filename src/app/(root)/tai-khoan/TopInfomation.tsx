"use client";
import React from "react";
import Image from "next/image";
import { GiftIcon } from "@heroicons/react/24/solid";
import { useAppSelector } from "@/redux/store";
import { IUser } from "@/interface/IUser";
import { endPointUsers } from "@/utils/api";
const TopInfomation = () => {
  const [user, setUser] = React.useState({
    ho_ten: "",
    email: "",
    sdt: "",
    password: "",
    gioi_tinh: "",
    avatar: "",
  });
  const idUser = localStorage.getItem("idUser");
  React.useEffect(() => {
    async function getUser() {
      const res = await fetch(endPointUsers);
      const data = await res.json();
      const user = data.find((user: IUser) => user.id_thanh_vien == idUser);
      setUser(user);
    }
    getUser();
  }, [idUser]);
  return (
    <div className="flex items-center gap-x-4 px-10 py-5 border-b border-b-black43">
      <div className="relative w-20 h-20">
        <Image
          src={user?.avatar || "/images/backgroud.png"}
          alt=""
          fill
          className="w-full h-full object-cover rounded-full "
        />
      </div>
      <div>
        <span className="font-medium text-lg">{user?.ho_ten || "Unknow"}</span>
        <div className="flex items-center gap-x-2 mt-1">
          <GiftIcon className="w-6 h-6 text-primary"></GiftIcon>
          <span>0 stars</span>
        </div>
      </div>
    </div>
  );
};

export default TopInfomation;
