import React from "react";

interface LabelProps {
  children: React.ReactNode;
  light?: boolean;
  normal?: boolean;
  bold?: boolean;
}

const Label = ({ children, light, normal = true, bold }: LabelProps) => {
  return (
    <label
      className={`text-base ${light && "font-normal"} ${
        normal && "font-semibold"
      } ${bold && "font-bold"} sm:text-lg`}
    >
      {children}
    </label>
  );
};

export default Label;
