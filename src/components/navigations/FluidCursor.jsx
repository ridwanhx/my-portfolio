'use client';
import { useEffect, useState } from 'react';
import fluidCursor from '../../../src/hooks/use-FluidCursor';

const FluidCursor = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const mediaTouch = window.matchMedia('(pointer: coarse)');
    const mediaWidth = window.matchMedia('(max-width: 1024px)');

    const checkDevice = () => {
      setIsMobileOrTablet(mediaTouch.matches || mediaWidth.matches);
    };

    checkDevice();

    mediaTouch.addEventListener('change', checkDevice);
    mediaWidth.addEventListener('change', checkDevice);

    return () => {
      mediaTouch.removeEventListener('change', checkDevice);
      mediaWidth.removeEventListener('change', checkDevice);
    };
  }, []);

  useEffect(() => {
    if (!isMobileOrTablet) {
      fluidCursor();
    }
  }, [isMobileOrTablet]);

  if (isMobileOrTablet) return null;

  return (
    <div className="fixed top-0 left-0 z-50 pointer-events-none">
      <canvas id="fluid" className="w-screen h-screen" />
    </div>
  );
};

export default FluidCursor;