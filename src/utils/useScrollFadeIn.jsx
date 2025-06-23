import { useEffect, useRef, useState } from "react";

export default function useScrollFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: `transition-opacity duration-700 ease-out ${
      visible ? 'opacity-200 translate-y-0' : 'opacity-0 translate-y-6'
    }`,
  };
}
