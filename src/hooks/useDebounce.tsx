import { useRef, useCallback } from "react";

export default function useDebounce<T extends (...args: any[]) => void>(
  fn: any,
  delay: number
): T {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debounceFn = useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        fn(...args);
      }, delay);
    },
    [delay, fn]
  );

  return debounceFn as T;
}
