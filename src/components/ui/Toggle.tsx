import React from "react";

interface ToggleProps {
  children: React.ReactNode;
  variant?: boolean;
  onClick?: () => void;
  responsive?: boolean;
}

const Toggle = ({ children, variant, onClick, responsive }: ToggleProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-full ${
        variant ? "bg-gray-300" : "bg-transparent"
      } ${responsive ? "lg:hidden" : ""}`}
    >
      {children}
    </button>
  );
};

export default Toggle;
