import { useEffect, useRef, useState } from "react";

export default function useAnimation(threshold = 0.1, delay = 0) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    let timeoutId;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => {
            setIsVisible(true);
          }, delay);
        } else {
          clearTimeout(timeoutId);
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(currentRef);

    return () => {
      clearTimeout(timeoutId);
      observer.unobserve(currentRef);
    };
  }, [threshold, delay]);

  return [ref, isVisible];
}
