import React from 'react';

interface CardProps {
  title: string;
  content: string;
}

export const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="max-w-sm rounded-lg border overflow-hidden shadow-lg bg-amber-500">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {content}
        </p>
      </div>
    </div>
  );
};
