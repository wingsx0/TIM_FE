import React from "react";

const ButtonText = ({ children }: { children: string }) => {
  return (
    <span className="px-3 py-1 rounded border border-black3 hover:border-primary cursor-pointer lg:text-base text-xs">
      {children}
    </span>
  );
};

export default ButtonText;
