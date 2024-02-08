'use client';

import { useEffect, useState } from 'react';

type WindowSize = {
  width: number;
  height: number;
};

export const useWindowSize = () => {
  if (typeof window !== 'undefined') {
    const [windowSize, setWindowSize] = useState<WindowSize>({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    useEffect(() => {
      const handleResize = () =>
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return windowSize;
  }
  return { width: 0, height: 0 };
};
