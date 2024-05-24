import React from "react";

interface ButtonPrimaryProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void; // Tambahkan properti onClick
  type?: "submit" | "button";
}

const ButtonPrimary = ({
  children,
  variant,
  onClick,
  type,
}: ButtonPrimaryProps) => {
  return (
    <button
      type={type}
      className={` text-white text-base font-semibold
      ${
        variant === "primary"
          ? "py-2 px-4 rounded-md bg-accent-primary"
          : "py-2 px-4 rounded-md bg-accent-secondary"
      } 
      `}
      onClick={onClick} // Tambahkan event onClick
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
