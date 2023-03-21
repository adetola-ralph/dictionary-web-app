import { useEffect, useState } from "react";

export const useSetDarkMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const htmlTag = document.querySelector('html');

  useEffect(() => {
    if (darkMode) {
      htmlTag?.classList.add('dark');
    } else {
      htmlTag?.classList.remove('dark');
    }
  }, [darkMode]);

  return {
    darkMode,
    setDarkMode,
  }
}