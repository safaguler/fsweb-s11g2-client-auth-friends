import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [data, setData] = useState(() => {
    const storredValue = JSON.parse(localStorage.getItem(key));
    if (storredValue) {
      return storredValue;
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });
  const handleChange = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setData(value);
  };
  return [data, handleChange];
};
