import { useEffect, useRef } from "react";

const useKeyDown = (keyName: string, callback: Function) => {
  const ref = useRef<any | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === keyName) {
        callback && callback(ref.current);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return ref;
};

export default useKeyDown;
