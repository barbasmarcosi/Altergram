import { useState, useEffect } from 'react';

const useIntersectionObserver = (element, initialValue) => {
  const [onViewPort, setOnViewPort] = useState(initialValue);
  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setOnViewPort(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    });
  }, [element]);
  return [onViewPort, setOnViewPort];
};

export default useIntersectionObserver;
