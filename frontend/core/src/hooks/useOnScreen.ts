import React, { useEffect, useState } from 'react';



export const useOnScreen = () => {
  // State and setter for storing whether element is visible
	const [isIntersecting, setIntersecting] = useState(false);
  const [ref, setRef] = useState(null)
  
  const rootMargin = "0px"
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref) {
      observer.observe(ref);
    }
		return () => {
			if (ref)
			{
				observer.unobserve(ref);
			}
    };
  }, [ref]); // Empty array ensures that effect is only run on mount and unmount
  return [setRef, isIntersecting];
}