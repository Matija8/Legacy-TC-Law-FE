import { useState, useEffect } from 'react';

function getWindowDimensions() {
  try {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  } catch (err) {}
  return {
    width: 300,
    height: 300,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
