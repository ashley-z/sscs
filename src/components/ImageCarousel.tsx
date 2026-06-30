"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CarouselImage } from '@/data/carousel';

export default function ImageCarousel({ images }: { images: CarouselImage[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line
    onSelect();
    emblaApi.on('select', onSelect);
    
    let intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    const onPointerDown = () => clearInterval(intervalId);
    const onPointerUp = () => {
      clearInterval(intervalId);
      intervalId = setInterval(() => emblaApi.scrollNext(), 4000);
    };

    emblaApi.on('pointerDown', onPointerDown);
    emblaApi.on('pointerUp', onPointerUp);
    
    const rootNode = emblaApi.rootNode();
    rootNode.addEventListener('mouseenter', onPointerDown);
    rootNode.addEventListener('mouseleave', onPointerUp);

    return () => {
      clearInterval(intervalId);
      emblaApi.off('select', onSelect);
      emblaApi.off('pointerDown', onPointerDown);
      emblaApi.off('pointerUp', onPointerUp);
      rootNode.removeEventListener('mouseenter', onPointerDown);
      rootNode.removeEventListener('mouseleave', onPointerUp);
    };
  }, [emblaApi, onSelect]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative max-w-5xl mx-auto md:px-4">
      <div className="overflow-hidden md:rounded-xl shadow-sm" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {images.map((image, index) => (
            <div className="flex-[0_0_100%] min-w-0 relative h-[240px] md:h-[460px] bg-gradient-to-br from-charcoal to-primary-dark flex items-center justify-center" key={index}>
              <div className="text-center p-6 text-white absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display text-2xl md:text-3xl font-bold opacity-80 mb-2">{image.caption || "Event Photo"}</span>
                <span className="text-sm opacity-60">({image.alt})</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={scrollPrev}
        className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-charcoal p-2 rounded-full shadow-md transition-transform hover:scale-105 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={scrollNext}
        className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-charcoal p-2 rounded-full shadow-md transition-transform hover:scale-105 z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="flex justify-center gap-2 mt-4 absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === selectedIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
