import { useEffect, useRef, useState } from "react";

/**
 * Hook que observa quando um elemento entra na viewport
 * e retorna uma ref + flag indicando visibilidade.
 * Usado para animações de revelação ao rolar a página.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  threshold: number = 0.15
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
