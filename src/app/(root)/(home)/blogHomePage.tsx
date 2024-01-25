import ButtonLoadMore from "@/components/button/ButtonLoadMore";
import Image from "next/image";
import React, { useState } from "react";

const BlogHomePage = () => {
  const [activeBlog, setActiveBlog] = useState(true);
  return (
    <div className="container-page py-16 text-lg font-medium">
      <div className="flex items-center gap-x-10 font-medium mb-11">
        <span className=" text-xl px-2 py-1 border-l-4 border-l-primary">
          GÓC ĐIỆN ẢNH
        </span>
        <span
          className={`cursor-pointer relative transition-all ${
            activeBlog ? "relative text-primary" : ""
          }`}
          onClick={() => setActiveBlog(true)}
        >
          <span>Bình luận phim</span>
          <div
            className={`${
              activeBlog
                ? "absolute w-7 h-[2px] rounded after:content-[''] -bottom-2 left-2/4 -translate-x-2/4 bg-primary"
                : ""
            }`}
          ></div>
        </span>
        <span
          className={`cursor-pointer relative transition-all ${
            activeBlog ? "" : "relative text-primary"
          }`}
          onClick={() => setActiveBlog(false)}
        >
          <span>Góc điện ảnh</span>
          <div
            className={`${
              activeBlog
                ? ""
                : "absolute w-7 h-[2px] rounded after:content-[''] -bottom-2 left-2/4 -translate-x-2/4 bg-primary"
            }`}
          ></div>
        </span>
      </div>
      <div>
        <div className={`flex flex-col ${activeBlog ? "" : "hidden"}`}>
          <div className="flex justify-between">
            <div className="w-[612px]">
              <div className="w-full h-[400px] relative mb-5">
                <Image
                  src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  fill
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <p>
                [Review] Migration: Nhà Vịt Có Đủ Sức Thành Hiện Tượng Như
                Minions?
              </p>
              <div></div>
            </div>
            <div className="flex gap-y-4 flex-col">
              <div className="flex w-[612px] gap-x-5 ">
                <div className="relative w-[195px] h-[130px]">
                  <Image
                    src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    fill
                    className="w-full h-full rounded object-cover"
                  />
                </div>
                <p>[Review] Aquaman And The Lost Kingdom: Tạm Biệt DCEU!</p>
              </div>
              <div className="flex w-[612px] gap-x-5">
                <div className="relative w-[195px] h-[130px]">
                  <Image
                    src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    fill
                    className="w-full h-full rounded object-cover"
                  />
                </div>
                <p>[Review] Aquaman And The Lost Kingdom: Tạm Biệt DCEU!</p>
              </div>
              <div className="flex w-[612px] gap-x-5">
                <div className="relative w-[195px] h-[130px]">
                  <Image
                    src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    fill
                    className="w-full h-full rounded object-cover"
                  />
                </div>
                <p>[Review] Aquaman And The Lost Kingdom: Tạm Biệt DCEU!</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <ButtonLoadMore link=""></ButtonLoadMore>
          </div>
        </div>
        <div className={`flex flex-col ${activeBlog ? "hidden" : ""}`}>
          <div className="flex justify-between">
            <div className="w-[612px]">
              <div className="w-full h-[400px] relative mb-5">
                <Image
                  src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  fill
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <p>
                [Review] Migration: Nhà Vịt Có Đủ Sức Thành Hiện Tượng Như
                Minions?
              </p>
              <div></div>
            </div>
            <div className="flex gap-y-4 flex-col">
              <div className="flex w-[612px] gap-x-5 ">
                <div className="relative w-[195px] h-[130px]">
                  <Image
                    src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    fill
                    className="w-full h-full rounded object-cover"
                  />
                </div>
                <p>[Review] Aquaman And The Lost Kingdom: Tạm Biệt DCEU!</p>
              </div>
              <div className="flex w-[612px] gap-x-5">
                <div className="relative w-[195px] h-[130px]">
                  <Image
                    src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    fill
                    className="w-full h-full rounded object-cover"
                  />
                </div>
                <p>[Review] Aquaman And The Lost Kingdom: Tạm Biệt DCEU!</p>
              </div>
              <div className="flex w-[612px] gap-x-5">
                <div className="relative w-[195px] h-[130px]">
                  <Image
                    src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    fill
                    className="w-full h-full rounded object-cover"
                  />
                </div>
                <p>[Review] Aquaman And The Lost Kingdom: Tạm Biệt DCEU!</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <ButtonLoadMore link=""></ButtonLoadMore>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHomePage;
