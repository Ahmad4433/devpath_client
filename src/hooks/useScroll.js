import { useEffect } from "react";
const useScroll = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
};

export default useScroll;
