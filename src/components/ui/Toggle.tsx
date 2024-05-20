import React from "react";

interface ToggleProps {
  children: React.ReactNode;
  variant?: boolean;
}

const Toggle = ({ children, variant }: ToggleProps) => {
  return (
    <button
      className={`p-2 rounded-full ${
        variant ? "bg-gray-300" : "bg-transparent"
      }`}
    >
      {children}
    </button>
  );
};

export default Toggle;
