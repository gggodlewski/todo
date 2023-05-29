import { useState, useEffect } from "react";

export const useMediaQuery = (queryString) => {
  const [matches, setMatches] = useState();

  useEffect(() => {
    const screen = window.matchMedia(queryString).matches;
    const checkScreenSize = () => {
      setMatches(screen.matches);
    };
    checkScreenSize();
    screen.addEventListener("change", checkScreenSize);

    return () => {
      screen.removeEventListener("change", checkScreenSize);
    };
  }, [queryString]);

  return matches;
};
