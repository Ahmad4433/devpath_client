import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-HXZKSHXYZH", {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

export default useAnalytics;
