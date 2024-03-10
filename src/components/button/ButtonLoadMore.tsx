import Link from "next/link";
import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const ButtonLoadMore = ({ link }: { link: string }) => {
  return (
    <Link
      href={link}
      className="flex items-center gap-x-1 border border-primary text-primary py-2 px-6 lg:px-7 rounded hover:text-white hover:bg-primary transition-all"
    >
      <span className="text-sm lg:text-base">Xem thêm</span>
      <ChevronRightIcon className="w-4 h-4 lg:w-6 lg:h-6" />
    </Link>
  );
};

export default ButtonLoadMore;
