import { useEffect, useRef } from "react";

const useOutClick = (callback: Function) => {
  const ref = useRef<any | null>(null);

  useEffect(() => {
    const handleOutClick = (event: any) => {
      if (!ref.current?.contains(event.target)) {
        callback && callback();
      }
    };

    window.addEventListener("mousedown", handleOutClick);

    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  return ref;
};

export default useOutClick;
