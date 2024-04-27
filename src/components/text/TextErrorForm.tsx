import React from "react";

const TextErrorForm = ({ children }: { children: React.ReactNode }) => {
  return <p className="mt-1 text-xs text-red-500">{children}</p>;
};

export default TextErrorForm;
