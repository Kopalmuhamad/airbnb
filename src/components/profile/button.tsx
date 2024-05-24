import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'ghost' | 'destructive';
}

export const Button: React.FC<ButtonProps> = ({ children, variant, className, ...props }) => {
  const baseStyle = 'py-2 px-4 rounded focus:outline-none focus:ring';
  const variantStyle = variant === 'destructive' ? 'bg-red-500 text-white' : 'bg-transparent text-blue-500';
  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};
