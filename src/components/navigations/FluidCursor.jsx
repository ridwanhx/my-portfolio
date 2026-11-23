'use client';
import { useEffect, useState } from 'react';

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
    if (isMobileOrTablet) return;

    let cancelled = false;
    let idleId;
    let timeoutId;

    const start = () => {
      if (cancelled || !document.getElementById('fluid')) return;
      import('../../hooks/use-FluidCursor').then((mod) => {
        if (!cancelled) mod.default();
      });
    };

    const schedule = () => {
      if ('requestIdleCallback' in window) {
        idleId = window.requestIdleCallback(start, { timeout: 3000 });
      } else {
        timeoutId = setTimeout(start, 1500);
      }
    };

    if (document.readyState === 'complete') {
      schedule();
    } else {
      window.addEventListener('load', schedule, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener('load', schedule);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, [isMobileOrTablet]);

  if (isMobileOrTablet) return null;

  return (
    <div className="fixed top-0 left-0 z-50 pointer-events-none">
      <canvas id="fluid" className="w-screen h-screen" />
    </div>
  );
};

export default FluidCursor;