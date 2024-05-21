import React from "react";

interface ButtonPrimaryProps {
  children: React.ReactNode;
  variant?: boolean;
}

const ButtonPrimary = ({ children, variant }: ButtonPrimaryProps) => {
  return (
    <button
      className={`py-1 px-4 rounded-md text-base font-semibold tracking-wide text-white ${
        variant ? "bg-accent-secondary" : "bg-accent-primary"
      } sm:py-2`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
