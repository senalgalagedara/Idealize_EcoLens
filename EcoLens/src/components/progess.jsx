import React from 'react';

export function Progress({ value }) {
  return (
    <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
      <div
        className="h-full bg-green-500 transition-all duration-500"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
