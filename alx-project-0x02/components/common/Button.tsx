import React from "react";
import { type ButtonProps } from "@/interfaces";

const Button = ({ size, shape, children }: ButtonProps) => {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const className = `bg-blue-500 text-white ${sizeClasses[size]} ${shape}`;

  return <button className={className}>{children}</button>;
};

export default Button;
