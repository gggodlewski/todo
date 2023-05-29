import { useState, useEffect } from "react";

export const useLocalStorage = (key) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const data = window.localStorage.getItem(key);
    if (data) {
      setValue(JSON.parse(data));
    }
  }, []);

  return { value, setValue };
};
