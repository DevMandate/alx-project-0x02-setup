import React from 'react';
import { type ButtonProps } from '@/interfaces';

export const Button: React.FC<ButtonProps> = ({ size, shape, label, onClick }) => {
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const className = `${sizeClasses[size]} ${shape} bg-blue-500 text-white hover:bg-blue-600 transition`;

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};
