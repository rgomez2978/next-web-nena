/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

function useIntersectionObserverDynamic(ref, options = {}, onIntersect) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
      if (onIntersect && typeof onIntersect === 'function') {
        onIntersect(entry.isIntersecting);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options, ref, onIntersect]);

  return isIntersecting;
}