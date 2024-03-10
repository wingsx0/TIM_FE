import React from "react";

const ModalTrailer = () => {
  return (
    <div className="min-w-[400px] h-[80vh]">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/_inKs4eeHiI?si=1q0S5LqIKArg2GVo"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ModalTrailer;
