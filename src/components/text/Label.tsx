import React from "react";

const Label = ({ children }: { children: React.ReactNode }) => {
  return <label className="font-medium">{children}</label>;
};

export default Label;
