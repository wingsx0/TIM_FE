import React, { ReactPropTypes } from "react";

const BorderHeading = ({
  children,
  uppercase,
}: {
  children: string;
  uppercase: boolean | undefined;
}) => {
  return (
    <h3
      className={`font-medium text-lg pl-2 border-l-4 border-l-primary mb-6 ${
        uppercase ? "uppercase" : "capitalize"
      }`}
    >
      {children}
    </h3>
  );
};

export default BorderHeading;
