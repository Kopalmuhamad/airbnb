import React from "react";

interface LabelProps {
  children: React.ReactNode;
}

const Label = ({ children }: LabelProps) => {
  return <label className="text-base font-medium sm:text-lg">{children}</label>;
};

export default Label;
