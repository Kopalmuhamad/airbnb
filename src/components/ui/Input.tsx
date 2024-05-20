import React from "react";

interface InputProps {
  type: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const Input: React.FC<InputProps> = (props) => {
    const { type, placeholder, onChange, value } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className="w-full py-1 px-4 rounded-md border-2 text-base font-medium sm:text-lg border-black"
    />
  );
};

export default Input;
