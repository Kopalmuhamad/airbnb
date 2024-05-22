import React from "react";

interface InputProps {
  type: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  ghost?: boolean;
  nonePadding?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  const { type, placeholder, onChange, value, ghost, nonePadding } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={`w-full py-1 px-4 rounded-md  text-base font-medium sm:text-lg  border-black bg-white border-2 ${
        ghost && "border-0 bg-transparent outline-none"
      } ${nonePadding && "px-0"}`}
    />
  );
};

export default Input;
