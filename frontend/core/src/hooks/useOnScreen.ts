import React, { useEffect, useState, useRef } from 'react';

 
export const useOnScreen = (options, ref) => {
  // State and setter for storing whether element is visible
	const [isIntersecting, setIntersecting] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries
    setIntersecting(entry.isIntersecting)
  }

  useEffect(() => {

    if (ref == null) return
    
    const observer = new IntersectionObserver(callbackFunction, options)
    if (ref.current) observer.observe(ref.current)
    
    return () => {
      if(ref.current) observer.unobserve(ref.current)
    }
  }, [ref,options])
  

  // const rootMargin = "0px"
  // console.log("usescreen called ")


  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       // Update our state when observer callback fires
  //       setIntersecting(entry.isIntersecting);
  //     },
  //     {
  //       rootMargin,
  //     }
  //   );
  //   if (ref) {
  //     observer.observe(ref);
  //   }
	// 	return () => {
	// 		if (ref)
	// 		{
	// 			observer.unobserve(ref);
	// 		}
  //   };
  // }, [ref]); // Empty array ensures that effect is only run on mount and unmount
  
  
  return [ref, isIntersecting];
}