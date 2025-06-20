import React from 'react';

export function Button({ children, onClick, disabled, variant = 'default' }) {
  const baseStyle = 'px-4 py-2 rounded-xl font-medium transition';
  const variants = {
    default: 'bg-green-600 hover:bg-green-700 text-white',
    destructive: 'bg-red-600 hover:bg-red-700 text-white',
  };
  const style = `${baseStyle} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  return (
    <button onClick={onClick} className={style} disabled={disabled}>
      {children}
    </button>
  );
}
