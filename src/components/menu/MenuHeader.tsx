import React from "react";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import Link from "next/link";
const MenuHeader = () => {
  return (
    <div className="hidden lg:flex items-center gap-x-10">
      <div className="flex items-center gap-x-6  menu-header">
        <MovieItem />
        <CategoryItem />
        <EventItem />
      </div>
    </div>
  );
};

const MovieItem = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href="/movie/dang-chieu">Phim đang chiếu</Link>,
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Phim sắp chiếu
        </a>
      ),
    },
  ];
  return (
    <Dropdown menu={{ items }} placement="bottomLeft" arrow>
      <div className="flex items-center gap-x-1 cursor-pointer hover:text-primary hover:text-lg transition-all">
        <span>Phim</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-3 h-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </Dropdown>
  );
};
const CategoryItem = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Thể loại phim
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Diễn viên
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Đạo diễn
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Bình luận phim
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Blog điện ảnh
        </a>
      ),
    },
  ];
  return (
    <Dropdown menu={{ items }} placement="bottomLeft" arrow>
      <div className="flex items-center gap-x-1 cursor-pointer hover:text-primary hover:text-lg transition-all">
        <span>Góc điện ảnh</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-3 h-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </Dropdown>
  );
};
const EventItem = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <a href="/khuyen-mai">Ưu đãi</a>,
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Phim tháng
        </a>
      ),
    },
  ];
  return (
    <Dropdown menu={{ items }} placement="bottomLeft" arrow>
      <div className="flex items-center gap-x-1 cursor-pointer hover:text-primary hover:text-lg transition-all">
        <span>Sự kiện</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-3 h-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </Dropdown>
  );
};

export default MenuHeader;
