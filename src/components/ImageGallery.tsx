"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageGallery({ images, eventTitle }: { images: string[], eventTitle: string }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!images || images.length === 0) return null;

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const modalContent = selectedIndex !== null ? (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-500/80 p-4 sm:p-8 backdrop-blur-sm"
      onClick={() => setSelectedIndex(null)}
    >
      {/* Close Button */}
      <button 
        className="absolute top-4 right-4 md:top-6 md:right-6 text-charcoal hover:text-primary bg-white/80 hover:bg-white p-3 rounded-full transition-colors z-[10000] shadow-md"
        onClick={(e) => {
          e.stopPropagation();
          setSelectedIndex(null);
        }}
        aria-label="Close"
      >
        <X size={28} />
      </button>
      
      <div 
        className="relative max-w-5xl max-h-full w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev Button */}
        {images.length > 1 && (
          <button 
            className="absolute left-2 sm:left-4 md:-left-8 text-charcoal hover:text-primary bg-white/80 hover:bg-white p-2 sm:p-3 rounded-full transition-colors z-[10000] shadow-md"
            onClick={goToPrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
        )}

        <img 
          src={images[selectedIndex]} 
          alt="Enlarged event photo" 
          className="max-w-full max-h-full object-contain rounded-md shadow-2xl" 
        />

        {/* Next Button */}
        {images.length > 1 && (
          <button 
            className="absolute right-2 sm:right-4 md:-right-8 text-charcoal hover:text-primary bg-white/80 hover:bg-white p-2 sm:p-3 rounded-full transition-colors z-[10000] shadow-md"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        )}
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <div 
            key={idx} 
            className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-sm bg-gray-100 cursor-pointer group"
            onClick={() => setSelectedIndex(idx)}
          >
            <img 
              src={src} 
              alt={`${eventTitle} photo ${idx + 1}`} 
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              loading="lazy" 
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
        ))}
      </div>

      {mounted && modalContent && createPortal(modalContent, document.body)}
    </>
  );
}
