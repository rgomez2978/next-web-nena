/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useCallback } from 'react';

const useIntersectionObserver = (myRef, animate, options = {}) => {
  const observerCallback = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(animate);
    } else {
      entry.target.classList.remove(animate);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, options);

    if (myRef.current) {
      observer.observe(myRef.current);
    }

    return () => {
      if (myRef.current) {
        observer.unobserve(myRef.current);
      }
    };
  }, [myRef, observerCallback, options]);
};

export default useIntersectionObserver;