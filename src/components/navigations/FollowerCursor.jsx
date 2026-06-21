'use client';

import { useEffect } from 'react';
import useNeonCursor from '../../hooks/use-FollowerCursor';

const FollowerCursor = () => {
  const { renderPos, isHovering, isDesktop } = useNeonCursor();

  useEffect(() => {
    if (!isDesktop) return;

    const originalStyle = window.getComputedStyle(document.documentElement).cursor;

    return () => {
      document.documentElement.style.cursor = originalStyle;
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden lg:block">
      <div
        className="absolute rounded-full bg-black dark:bg-white"
        style={{
          width: '8px',
          height: '8px',
          transform: 'translate(-50%, -50%)',
          left: `${renderPos.dot.x}px`,
          top: `${renderPos.dot.y}px`,
        }}
      />

      <div
        className="absolute rounded-full border border-black dark:border-white"
        style={{
          width: isHovering ? '44px' : '28px',
          height: isHovering ? '44px' : '28px',
          transform: 'translate(-50%, -50%)',
          left: `${renderPos.border.x}px`,
          top: `${renderPos.border.y}px`,
          transition: 'width 0.3s, height 0.3s',
        }}
      />
    </div>
  );
};

export default FollowerCursor;