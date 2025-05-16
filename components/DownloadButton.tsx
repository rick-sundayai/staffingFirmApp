import React from 'react';

interface DownloadButtonProps {
  className?: string;
}

export const DownloadButton = ({ className = '' }: DownloadButtonProps) => {
  return (
    <a 
      href="#download" 
      className={`inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ${className}`}
    >
      <span>Download Now</span>
      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    </a>
  );
};
