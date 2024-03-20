import BorderHeading from "@/components/text/BorderHeading";
import {
  UnorderedListOutlined,
  VideoCameraAddOutlined,
} from "@ant-design/icons";
import Link from "next/link";

interface IMenuItem {
  key: number;
  name: string;
  icon: React.ReactNode;
  backgroud: string;
  href: string;
  hoverColor: string;
}

const dataMenu: IMenuItem[] = [
  {
    key: 1,
    name: "Thêm phim",
    icon: <VideoCameraAddOutlined />,
    backgroud: "",
    href: "",
    hoverColor: "",
  },
  {
    key: 2,
    name: "Danh sách phim",
    icon: <UnorderedListOutlined />,
    backgroud: "bg-secondary",
    hoverColor: "",
    href: "/dashboard/edit/phim/dang-chieu/danh-sach",
  },
];
const Page = () => {
  return (
    <>
      <div className="mb-10">
        <BorderHeading uppercase>Phim đang chiếu</BorderHeading>
      </div>
      <div className="grid grid-cols-2 gap-20 px-10">
        {dataMenu.length > 0 &&
          dataMenu.map((item) => <MenuItem key={item.key} item={item} />)}
      </div>
    </>
  );
};

const MenuItem = ({ item }: { item: IMenuItem }) => {
  return (
    <Link
      href={item.href}
      className={`text-2xl font-semibold  py-9 flex flex-col items-center justify-center rounded ${
        item.backgroud ? `${item.backgroud}` : "bg-primary"
      } text-white hover:md:scale-105 hover:bg-opacity-85 hover:text-secondary  transition-all duration-300 ease-in-out`}
    >
      {item.icon}
      <span>{item.name}</span>
    </Link>
  );
};

export default Page;
