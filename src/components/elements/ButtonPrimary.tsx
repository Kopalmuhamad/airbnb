import React from "react";

interface ButtonPrimaryProps {
  children: React.ReactNode;
  variant?: "primary"|"secondary";
}

const ButtonPrimary = ({ children, variant}: ButtonPrimaryProps) => {
  return (
    <button
      className={` text-white text-base font-semibold
      ${
        variant === "primary"
          ? "py-2 px-4 rounded-md bg-accent-primary"
          : "py-2 px-4 rounded-md bg-accent-secondary"
      } 
      `}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
