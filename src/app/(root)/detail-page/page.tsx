import React from "react";
import Image from "next/image";
import { ClockIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import ButtonText from "@/components/button//ButtonText";
import ListMovie from "@/components/sections/ListMovie";
import BorderHeading from "@/components/text/BorderHeading";
const DetailPage = () => {
  return (
    <>
      <div className="h-[510px] mb-8 text-black43">
        <iframe
          src="https://www.youtube.com/embed/F478PvRt74Y?si=I5FA6MQERl6tmLVV"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="container-page flex  justify-between gap-x-8">
        <div className="">
          <div className="flex gap-8 mb-5">
            <div className="w-[300px] h-[450px] rounded relative shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1688151049001-522f61b0ebee?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                fill
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="text-black3 flex flex-col gap-y-4 ">
              <h1 className="text-4xl font-semibold">
                Người Nhện: Không Còn Nhà
              </h1>
              <div className="flex items-center gap-x-6">
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-6 h-6 text-primary" />
                  <span className="font-semibold">157 Phút</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-6 h-6 text-primary" />
                  <span className="font-semibold">15/12/2023</span>
                </div>
              </div>
              <div className="flex items-center gap-x-1">
                <StarIcon className="h-9 w-9 text-yellow-400" />
                <span className="text-4xl font-semibold">9.0</span>
              </div>
              <span className="text-gray4A">Quốc gia: Mỹ</span>
              <span className="text-gray4A">Nhà sản xuất: Sony Pictures</span>
              <div className="flex flex-col gap-y-6">
                <span className="text-gray4A">
                  <span>Thể loại:</span> <ButtonText>Hành động</ButtonText>
                </span>
                <span className="text-gray4A">
                  <span>Đạo diễn:</span> <ButtonText>Jon Watts</ButtonText>
                </span>
                <div className="text-gray4A flex items-center gap-x-1">
                  <span>Diễn viên:</span>
                  <div className="flex items-center gap-x-2">
                    <ButtonText>Tom Holland</ButtonText>
                    <ButtonText>Zendaya</ButtonText>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <BorderHeading uppercase={false}>Nội dung phim</BorderHeading>
            <p className="text-sm ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
              illum ullam harum optio laborum minus itaque obcaecati cumque quis
              deleniti molestias exercitationem, hic aspernatur consectetur
              voluptates, minima dicta! Unde, nam? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Pariatur illum ullam harum optio
              laborum minus itaque obcaecati cumque quis deleniti molestias
              exercitationem, hic aspernatur consectetur voluptates, minima
              dicta! Unde, nam? Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Pariatur illum ullam harum optio laborum minus
              itaque obcaecati cumque quis deleniti molestias exercitationem,
              hic aspernatur consectetur voluptates, minima dicta! Unde, nam?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
              illum ullam harum optio laborum minus itaque obcaecati cumque quis
              deleniti molestias exercitationem, hic aspernatur consectetur
              voluptates, minima dicta! Unde, nam?
            </p>
          </div>
          <div>
            <BorderHeading uppercase={false}>Lịch chiếu</BorderHeading>
            <div className="flex gap-x-3">
              <div className="flex flex-col items-center gap-y-1 py-3 rounded text-white px-2 bg-secondary">
                <span>Hôm nay</span>
                <span>19/12</span>
              </div>
              <div className="flex flex-col items-center gap-y-1 py-3 rounded text-white px-2 bg-secondary">
                <span>Hôm nay</span>
                <span>19/12</span>
              </div>
              <div className="flex flex-col items-center gap-y-1 py-3 rounded text-white px-2 bg-secondary">
                <span>Hôm nay</span>
                <span>19/12</span>
              </div>
            </div>
            <div className="w-full h-1 my-4 bg-primary"></div>
            <div>
              <BorderHeading uppercase={false}>Lịch chiếu</BorderHeading>
              <div></div>
            </div>
          </div>
        </div>
        <ListMovie></ListMovie>
      </div>
    </>
  );
};

export default DetailPage;
