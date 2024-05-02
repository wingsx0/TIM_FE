import { IUser } from "@/interface/IUser";
import { useAppSelector } from "@/redux/store";
import { endPointUsers } from "@/utils/api";
import {
  DingdingOutlined,
  FireFilled,
  GithubFilled,
  LogoutOutlined,
  StarFilled,
} from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AccountBox = () => {
  const [user, setUser] = React.useState({ avatar: "", ho_ten: "" });
  const router = useRouter();
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
  const handleOnClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("idUser");
    router.replace("/");
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link href="/tai-khoan" className="flex items-center gap-x-3">
          <GithubFilled />
          <span>Tài Khoản</span>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex items-center gap-x-3" onClick={handleOnClick}>
          <LogoutOutlined />
          <span>Đăng Xuất</span>,
        </div>
      ),
    },
  ];
  return (
    <Dropdown
      menu={{ items }}
      placement="bottomLeft"
      arrow
      className="cursor-pointer"
    >
      <div className="flex itmes-center gap-x-4 text-black3">
        <div className="relative rounded-full w-12 h-12 overflow-hidden">
          <Image
            src={user?.avatar || "/images/backgroud.png"}
            alt="avatar"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <DingdingOutlined className="text-primary" />
            <span className="text-sm font-medium capitalize ">
              {user?.ho_ten}
            </span>
          </div>
          <div className="flex items-center gap-x-2">
            <StarFilled className="text-primary" />
            <span className="font-medium">0 star</span>
          </div>
        </div>
      </div>
    </Dropdown>
  );
};

export default AccountBox;
