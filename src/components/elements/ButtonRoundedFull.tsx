import React from "react";

interface ButtonRoudedFullProps {
  children: React.ReactNode;
  variant?: "primary"|"secondary";
  ghost?:boolean
}

const ButtonRoundedFull = ({ children,variant, ghost=false }: ButtonRoudedFullProps) => {
  return <button className={`rounded-full p-4 ${variant === "primary" ? "bg-accent-primary": "bg-accent-secondary" } ${ghost && "bg-transparent"}`}>{children}</button>;
};

export default ButtonRoundedFull;
