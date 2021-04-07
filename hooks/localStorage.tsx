import { useState } from "react";

export default function useLocalStorage(key: string, initialValue) {
  const readFromLocalStorage = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  };

  const writeToLocalStorage = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const [storedValue, setStoredValue] = useState(readFromLocalStorage);

  const setValue = (value) => {
    writeToLocalStorage(value);
    setStoredValue(value);
  };

  return [storedValue, setValue];
}
