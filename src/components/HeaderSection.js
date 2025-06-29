import React from 'react';

export default function HeaderSection({ title, logo }) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 border-b border-gray-300">
      <img src={logo} alt="Logo" className="h-12" />
      <h1 className="text-xl font-bold text-center flex-1">{title}</h1>
    </div>
  );
}