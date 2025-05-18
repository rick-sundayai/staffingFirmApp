import React from 'react';

interface BookDemoButtonProps {
  className?: string;
}

export function BookDemoButton({ className = '' }: BookDemoButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-primary rounded-md shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors ${className}`}
    >
      Book a Demo
    </button>
  );
}
