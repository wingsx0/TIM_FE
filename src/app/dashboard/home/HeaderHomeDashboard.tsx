import {
  GiftOutlined,
  ProductOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import React from "react";
interface IItem {
  key: number;
  icon: React.ReactNode;
  num: number;
  title: string;
  color: string;
  bgColor: string;
}

const items: IItem[] = [
  {
    key: 1,
    icon: <ProductOutlined />,
    num: 10,
    title: "Phim đang chiếu",
    color: "#fb9440",
    bgColor: "rgba(251,148,64,0.6)",
  },
  {
    key: 2,
    icon: <ProductOutlined />,
    num: 18,
    title: "Phim đang chiếu",
    color: "#144e32",
    bgColor: "rgba(113,203,0,0.5)",
  },
  {
    key: 3,
    icon: <GiftOutlined />,
    num: 6,
    title: "Phiếu giảm giá",
    color: "#f07b7b",
    bgColor:
      "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(240,123,123,1) 100%)",
  },
  {
    key: 4,
    icon: <UnorderedListOutlined />,
    num: 6,
    title: "Banner",
    color: "#109bb0",
    bgColor:
      "radial-gradient(circle, rgba(233,236,243,1) 0%, rgba(16,155,176,1) 100%)",
  },
];
const HeaderHomeDashboard = () => {
  return (
    <div className="grid grid-cols-4 gap-x-5">
      {items && items.map((item) => <ItemHeader key={item.key} item={item} />)}
    </div>
  );
};
const ItemHeader = ({ item }: { item: IItem }) => {
  const { icon, num, title, color, bgColor } = item;
  return (
    <div className="flex items-center justify-center rounded gap-x-3 py-3 px-2 bg-white">
      <span
        className="p-3 rounded-full opacity-95 text-2xl text-white"
        style={{ backgroundColor: color }}
      >
        {icon}
      </span>
      <div className="flex flex-col items-center text-base text-black43 min-w-28">
        <span className="text-4xl font-bold">{num < 10 ? `0${num}` : num}</span>
        <span className="font-medium">{title}</span>
      </div>
    </div>
  );
};

export default HeaderHomeDashboard;
