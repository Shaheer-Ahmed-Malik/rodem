"use client"
// components/CustomCursor.tsx
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState('#000000'); // Default cursor color

  // Function to get background color under cursor
  const getBackgroundColor = (x: number, y: number): string => {
    const element = document.elementFromPoint(x, y);
    if (!element) return '#ffffff'; // Default to white if no element is found

    const style = window.getComputedStyle(element);
    return style.backgroundColor || '#ffffff'; // Default to white if no background color is found
  };

  // Function to calculate contrasting color
  const getContrastColor = (bgColor: string): string => {
    // Convert hex or rgb to rgba
    const rgba = bgColor.match(/\d+/g)?.map(Number) || [255, 255, 255, 1];
    const [r, g, b] = rgba;

    // Calculate luminance (perceived brightness)
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Return black or white based on luminance
    return luminance > 0.5 ? '#000000' : '#ffffff';
  };

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setPosition({ x, y });

      // Get background color under cursor
      const bgColor = getBackgroundColor(x, y);

      // Calculate contrasting cursor color
      const contrastColor = getContrastColor(bgColor);
      setCursorColor(contrastColor);
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div
      className="fixed w-8 h-8 border-2 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out z-[9999]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        borderColor: cursorColor,
        backgroundColor: cursorColor === '#000000' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
      }}
    />
  );
};

export default CustomCursor;
