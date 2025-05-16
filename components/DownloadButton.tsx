import React from 'react';

interface BookDemoButtonProps {
  className?: string;
}

export const BookDemoButton = ({ className = '' }: BookDemoButtonProps) => {
  return (
    <a 
      href="#book-demo" 
      className={`inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 ${className}`}
    >
      <span>Book a Demo</span>
      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </a>
  );
};

// Keep the old component name for backward compatibility if needed
export const DownloadButton = BookDemoButton;
