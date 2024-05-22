import React from "react";

interface ButtonPrimaryProps {
  children: React.ReactNode;
  variant?: boolean;
  rounded?: boolean;
}

const ButtonPrimary = ({ children, variant, rounded }: ButtonPrimaryProps) => {
  return (
    <button
      className={`py-1 px-4 text-base font-semibold tracking-wide text-white ${
        variant ? "bg-accent-secondary" : "bg-accent-primary"
      } ${rounded ? "rounded-full flex items-center justify-center":"rounded-md"} sm:py-2`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
