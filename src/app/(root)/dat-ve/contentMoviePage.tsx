import BorderHeading from "@/components/text/BorderHeading";
import React from "react";

const ContentMoviePage = ({ content }: { content: string }) => {
  return (
    <div className="mb-4">
      <BorderHeading uppercase={false}>Nội dung phim</BorderHeading>
      <p className="text-sm ">{content}</p>
    </div>
  );
};

export default ContentMoviePage;
