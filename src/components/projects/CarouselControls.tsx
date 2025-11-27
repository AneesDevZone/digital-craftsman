import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselControlsProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
  onPageClick: (page: number) => void;
}

export function CarouselControls({ currentPage, totalPages, onPrevious, onNext, onPageClick }: CarouselControlsProps) {
  return (
    <div className="flex items-center justify-between max-w-lg mx-auto animate-fade-in-up delay-300">
      
      {/* Navigation Arrows */}
      <div className="flex gap-3">
        <button
          onClick={onPrevious}
          disabled={currentPage === 0}
          aria-label="Previous Page"
          className={`
            p-3.5 rounded-full border transition-all duration-300 hover:scale-110 shadow-md
            ${currentPage === 0 
              ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:shadow-lg active:scale-95'
            }
          `}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={onNext}
          disabled={currentPage === totalPages - 1}
          aria-label="Next Page"
          className={`
            p-3.5 rounded-full border transition-all duration-300 hover:scale-110 shadow-md
            ${currentPage === totalPages - 1 
              ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:shadow-lg active:scale-95'
            }
          `}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Page Indicators */}
      <div className="flex gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => onPageClick(index)}
            aria-label={`Go to page ${index + 1}`}
            className={`
              transition-all duration-300 rounded-full
              ${index === currentPage 
                ? 'w-10 h-3 bg-gradient-to-r from-blue-600 to-purple-600 shadow-inner' 
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }
            `}
          />
        ))}
      </div>

      {/* Page Counter */}
      <div className="hidden sm:block text-sm text-gray-600 font-semibold bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm">
        {currentPage + 1} of {totalPages}
      </div>
    </div>
  );
}