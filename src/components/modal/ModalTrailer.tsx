import React from "react";

const ModalTrailer = ({ link }: { link: string }) => {
  return (
    <div className="min-w-[400px] w-full h-[70vh]">
      <iframe
        className="w-full h-full"
        src={link}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ModalTrailer;
