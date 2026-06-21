import { useState, useEffect, useRef } from 'react';

const useFollowerCursor = () => {
  const mousePosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  const borderDotPosition = useRef({ x: 0, y: 0 });

  const [renderPos, setRenderPos] = useState({
    dot: { x: 0, y: 0 },
    border: { x: 0, y: 0 },
  });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const DOT_SMOOTHNESS = 0.2;
  const BORDER_DOT_SMOOTHNESS = 0.1;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    
    const handleMediaChange = (e) => {
      setIsDesktop(e.matches);
    };

    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    if (!mediaQuery.matches) {
      return () => mediaQuery.removeEventListener('change', handleMediaChange);
    }

    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);

    const interactiveElements = document.querySelectorAll(
      'a, button, img, input, textarea, select, [data-hover="true"]'
    );
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    let animationId;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      dotPosition.current.x = lerp(dotPosition.current.x, mousePosition.current.x, DOT_SMOOTHNESS);
      dotPosition.current.y = lerp(dotPosition.current.y, mousePosition.current.y, DOT_SMOOTHNESS);

      borderDotPosition.current.x = lerp(borderDotPosition.current.x, mousePosition.current.x, BORDER_DOT_SMOOTHNESS);
      borderDotPosition.current.y = lerp(borderDotPosition.current.y, mousePosition.current.y, BORDER_DOT_SMOOTHNESS);

      setRenderPos({
        dot: { x: dotPosition.current.x, y: dotPosition.current.y },
        border: { x: borderDotPosition.current.x, y: borderDotPosition.current.y },
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
      cancelAnimationFrame(animationId);
    };
  }, []);

  return { renderPos, isHovering, isDesktop };
};

export default useFollowerCursor;