import { useEffect, useMemo, useState } from "react";
import screenSizes from "./screenSizes";

const getCurrentBreakPoint = () => {
  if (window.innerWidth < screenSizes.sm) {
    return screenSizes.sm;
  } else if (
    window.innerWidth >= screenSizes.sm &&
    window.innerWidth <= screenSizes.md
  ) {
    return screenSizes.md;
  } else if (window.innerWidth > screenSizes.md) {
    return screenSizes.lg;
  }
};

const useResponsive = () => {
  const [currentSize, setCurrentSize] = useState(getCurrentBreakPoint());

  useEffect(() => {
    const resizeHandler = () => {
      const newSize = getCurrentBreakPoint();
      setCurrentSize((prevState) =>
        prevState !== newSize ? newSize : prevState
      );
    };

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return useMemo(() => currentSize, [currentSize]);
};

export default useResponsive;
