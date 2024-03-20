"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import MenuHeader from "./menu/MenuHeader";
import { usePathname } from "next/navigation";
// menu hidden
import { CloseOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import ButtonLoginHeader from "./button/ButtonLoginHeader";

type MenuItem = Required<MenuProps>["items"][number];

const Header = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  React.useEffect(() => {
    setShowMenu(false);
  }, [pathname]);
  return (
    // md:mb-12 mb-0
    <header className="bg-white text-black43">
      {showMenu && (
        <div
          className="bg-[#343a40] opacity-60 fixed top-0 right-0 bottom-0 left-0 z-[1020] overflow-hidden w-screen h-screen transition-all duration-500 ease-in-out block screen1200:hidden"
          onClick={() => setShowMenu(false)}
        ></div>
      )}

      <div className="container-page">
        <div className="flex items-center justify-between px-4 py-5">
          <Link href={"/"} className="">
            <svg
              width="92"
              height="32"
              viewBox="0 0 92 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_33_114)">
                <path
                  d="M10 14.4V9.6V0H14.4V24H10V14.4Z"
                  fill="url(#paint0_linear_33_114)"
                />
              </g>
              <path d="M0 4.8V0H4.8V4.8H0Z" fill="url(#paint1_linear_33_114)" />
              <path
                d="M19.2 24V19.2H24V24H19.2Z"
                fill="url(#paint2_linear_33_114)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.6 9.6V0H24V14.4H14.4V24H0V9.6H9.6ZM4.8 14.4V19.2H9.6V14.4H4.8ZM14.4 9.6V4.8H19.2V9.6H14.4Z"
                fill="url(#paint3_linear_33_114)"
              />
              <path
                d="M30.316 7.7H32.136V17.5H30.316V7.7ZM43.4947 7.7V17.5H41.9967L36.5927 10.864V17.5H34.7867V7.7H36.2847L41.6887 14.336V7.7H43.4947ZM47.9407 9.226V12.208H52.6727V13.748H47.9407V17.5H46.1207V7.7H53.2747V9.226H47.9407ZM55.0348 7.7H56.8548V17.5H55.0348V7.7ZM68.2135 7.7V17.5H66.7155L61.3115 10.864V17.5H59.5055V7.7H61.0035L66.4075 14.336V7.7H68.2135ZM70.8394 7.7H72.6594V17.5H70.8394V7.7ZM77.2981 9.24H74.0501V7.7H82.3661V9.24H79.1181V17.5H77.2981V9.24ZM87.8233 14.042V17.5H86.0033V14.07L82.1533 7.7H84.0993L86.9693 12.474L89.8673 7.7H91.6593L87.8233 14.042Z"
                fill="url(#paint4_linear_33_114)"
              />
              <defs>
                <filter
                  id="filter0_d_33_114"
                  x="6"
                  y="0"
                  width="12.3999"
                  height="32"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_33_114"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_33_114"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_33_114"
                  x1="12.2"
                  y1="0"
                  x2="12.2"
                  y2="24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1DD4AA" />
                  <stop offset="1" stopColor="#02B5E2" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_33_114"
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1DD4AA" />
                  <stop offset="1" stopColor="#02B5E2" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_33_114"
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1DD4AA" />
                  <stop offset="1" stopColor="#02B5E2" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_33_114"
                  x1="24"
                  y1="0"
                  x2="0"
                  y2="24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1DD4AA" />
                  <stop offset="1" stopColor="#02B5E2" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_33_114"
                  x1="29"
                  y1="12"
                  x2="92"
                  y2="12"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1DD4AA" />
                  <stop offset="1" stopColor="#02B5E2" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
          {/* Menu */}
          <MenuHeader />
          {/* Search */}
          <InputSearch />
          {/* button login */}
          <ButtonLoginHeader></ButtonLoginHeader>
          <Bars3Icon
            className="w-6 h-6 lg:hidden"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        {showMenu && (
          <nav className="fixed pr-4 md:px-11 z-[1030] block w-[287px] md:w-[346px] top-0 bottom-0 h-full bg-white transition-all duration-500 ease-in-out pl-8 pt-6 overflow-hidden translate-x-[0] right-0 screen1200:hidden">
            <div className="flex justify-end">
              <div
                className="cursor-pointer"
                onClick={() => setShowMenu(false)}
              >
                <CloseOutlined style={{ fontSize: "16px", color: "#08c" }} />
              </div>
            </div>
            <MenuHidden></MenuHidden>
          </nav>
        )}
      </div>
    </header>
  );
};

const MenuHidden = () => {
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: MenuProps["items"] = [
    getItem("Phim", "sub1", <MinusCircleOutlined />, [
      getItem(<Link href="/movie/dang-chieu">Phim đang chiếu</Link>, "1", null),
      getItem(<Link href="/movie/sap-chieu">Phim sắp chiếu</Link>, "2", null),
    ]),

    getItem("Góc điện ảnh", "sub2", <AppstoreOutlined />, [
      getItem(<Link href="">Thể loại phim</Link>, "5"),
      getItem(<Link href="">Diễn viên</Link>, "6"),
      getItem(<Link href="">Đạo diễn</Link>, "7"),
      getItem(<Link href="">Blog điện ảnh</Link>, "8"),
    ]),

    { type: "divider" },

    getItem("Sự kiện", "sub4", <SettingOutlined />, [
      getItem(<Link href="/khuyen-mai">Ưu đãi</Link>, "9"),
      getItem(<Link href="/movie/top-phim">Top phim tháng</Link>, "10"),
    ]),
  ];
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};

const InputSearch = () => {
  return (
    <div className="bg-white px-4 py-1 flex items-center rounded text-black3 text-sm">
      <input type="text" placeholder="Tìm kiếm...." />
      <span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.0667 12L6.86667 7.8C6.53333 8.06667 6.15 8.27778 5.71667 8.43333C5.28333 8.58889 4.82222 8.66667 4.33333 8.66667C3.12222 8.66667 2.09733 8.24711 1.25867 7.408C0.42 6.56889 0.000444444 5.544 0 4.33333C0 3.12222 0.419556 2.09733 1.25867 1.25867C2.09778 0.42 3.12267 0.000444444 4.33333 0C5.54444 0 6.56956 0.419556 7.40867 1.25867C8.24778 2.09778 8.66711 3.12267 8.66667 4.33333C8.66667 4.82222 8.58889 5.28333 8.43333 5.71667C8.27778 6.15 8.06667 6.53333 7.8 6.86667L12 11.0667L11.0667 12ZM4.33333 7.33333C5.16667 7.33333 5.87511 7.04178 6.45867 6.45867C7.04222 5.87556 7.33378 5.16711 7.33333 4.33333C7.33333 3.5 7.04178 2.79178 6.45867 2.20867C5.87556 1.62556 5.16711 1.33378 4.33333 1.33333C3.5 1.33333 2.79178 1.62511 2.20867 2.20867C1.62556 2.79222 1.33378 3.50044 1.33333 4.33333C1.33333 5.16667 1.62511 5.87511 2.20867 6.45867C2.79222 7.04222 3.50044 7.33378 4.33333 7.33333Z"
            fill="#333333"
          />
        </svg>
      </span>
    </div>
  );
};

export default Header;
