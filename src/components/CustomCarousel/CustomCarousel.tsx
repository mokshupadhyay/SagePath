import React, { useState, useRef, useEffect, useCallback, TouchEvent, MouseEvent } from 'react';
import { useTheme } from "@/context/ThemeContext";
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface ImageType {
  src: string | StaticImport;
  alt: string;
}

interface CustomCarouselProps {
  images: ImageType[];
  onSlideChange: (index: number) => void;
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ images, onSlideChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { isDarkMode } = useTheme();

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, []);

  const startTimer = useCallback(() => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        onSlideChange(newIndex);
        return newIndex;
      });
    }, 2000);
  }, [images.length, onSlideChange, stopTimer]);

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [startTimer, stopTimer]);

  useEffect(() => {
    const handleDragStart = (clientX: number, clientY: number) => {
      setIsDragging(true);
      setStartX(clientX);
      setStartY(clientY);
      setIsScrolling(false);
      stopTimer();
    };

    const handleDragMove = (clientX: number, clientY: number) => {
      if (!isDragging) return;
      const diffX = startX - clientX;
      const diffY = startY - clientY;

      if (!isScrolling) {
        if (Math.abs(diffY) > Math.abs(diffX)) {
          setIsScrolling(true);
          setIsDragging(false);
          return;
        }

        if (Math.abs(diffX) > 50) {
          if (diffX > 0 && currentIndex < images.length - 1) {
            setCurrentIndex(prevIndex => prevIndex + 1);
            onSlideChange(currentIndex + 1);
            setIsDragging(false);
          } else if (diffX < 0 && currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
            onSlideChange(currentIndex - 1);
            setIsDragging(false);
          }
        }
      }
    };

    const handleDragEnd = () => {
      setIsDragging(false);
      setIsScrolling(false);
      startTimer();
    };

    // Correctly type the event handlers for touch and mouse events
    const handleTouchStart = (e: TouchEvent) => handleDragStart(e.touches[0].clientX, e.touches[0].clientY);
    const handleTouchMove = (e: TouchEvent) => {
      if (!isScrolling) {
        e.preventDefault();
      }
      handleDragMove(e.touches[0].clientX, e.touches[0].clientY);
    };
    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => handleDragStart(e.clientX, e.clientY);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault();
        handleDragMove(e.clientX, e.clientY);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('touchstart', handleTouchStart as unknown as EventListener, { passive: false });
      carousel.addEventListener('touchmove', handleTouchMove as unknown as EventListener, { passive: false });
      carousel.addEventListener('touchend', handleDragEnd);
      carousel.addEventListener('mousedown', handleMouseDown as unknown as EventListener); // Fix here
      window.addEventListener('mousemove', handleMouseMove as unknown as EventListener);  // Fix here
      window.addEventListener('mouseup', handleDragEnd);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('touchstart', handleTouchStart as unknown as EventListener);
        carousel.removeEventListener('touchmove', handleTouchMove as unknown as EventListener);
        carousel.removeEventListener('touchend', handleDragEnd);
        carousel.removeEventListener('mousedown', handleMouseDown as unknown as EventListener); // Fix here
        window.removeEventListener('mousemove', handleMouseMove as unknown as EventListener);  // Fix here
        window.removeEventListener('mouseup', handleDragEnd);
      }
    };
  }, [
    isDragging,
    isScrolling,
    startX,
    startY,
    currentIndex,
    images.length,
    onSlideChange,
    startTimer,
    stopTimer,
  ]);

  const renderImage = (image: ImageType, index: number) => {
    return (
      <Image
        src={image.src}
        alt={image.alt || `Slide ${index + 1}`}
        layout="fill"
        objectFit="cover"
      />
    );
  };

  return (
    <div
      className={`relative w-full h-full border border-transparent rounded-lg overflow-hidden cursor-grab active:cursor-grabbing ${
        isDarkMode ? 'bg-white' : 'bg-white'
      }`}
      ref={carouselRef}
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
    >
      <div
        className="flex h-full transition-transform duration-300 ease-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            {renderImage(image, index)}
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex
                ? (isDarkMode ? 'bg-purple-400' : 'bg-purple-400')
                : (isDarkMode ? 'bg-gray-300' : 'bg-gray-300')
            }`}
            onClick={() => {
              setCurrentIndex(index);
              onSlideChange(index);
              stopTimer();
              startTimer();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
