import React from "react";

interface ButtonSecondaryProps {
  children: React.ReactNode;
  variant?: boolean;
}

const ButtonSecondary = ({ children, variant }: ButtonSecondaryProps) => {
  return (
    <button
      className={`py-1 px-3 sm:py-2 sm:px-4 rounded-md text-base font-semibold tracking-wide border-2 text-black ${
        variant ? "border-accent-secondary" : "border-accent-primary"
      }`}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
