import React, { useState } from 'react';
import { FiSun } from 'react-icons/fi';
import { HiMoon } from 'react-icons/hi';

export default function SwipeThemeToggle({ toggleTheme, isDark }) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const maxSwipeDistance = 24;

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;

    if (Math.abs(deltaX) > maxSwipeDistance) {
      toggleTheme();
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => setIsDragging(false);

  const handleClick = () => {
    if (!isDragging) toggleTheme();
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
      className={`relative w-14 h-8 px-1 rounded-full cursor-pointer flex items-center justify-start
        transition-all duration-300 overflow-hidden
        ${isDark
          ? 'bg-gradient-to-r from-purple-500 to-blue-500'
          : 'bg-gray-300 dark:bg-white/30'}
      `}
      role="switch"
      aria-checked={isDark}
      tabIndex={0}
      title="Swipe or click to toggle theme"
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick()}
    >
      <div
        className={`absolute w-6 h-6 rounded-full shadow-md flex items-center justify-center transition-transform duration-500
          transform-gpu bg-white
          ${isDark ? 'translate-x-6 rotate-[360deg]' : 'translate-x-0 rotate-0'}
        `}
      >
        {isDark ? (
          <HiMoon className="text-indigo-400 drop-shadow-[0_0_6px_rgba(139,92,246,0.7)]" />
        ) : (
          <FiSun className="text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.7)]" />
        )}
      </div>
    </div>
  );
}
