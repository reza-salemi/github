import {createContext, useState, useEffect, ReactNode} from 'react';

interface ThemeContextInterface {
  theme: string,
  setTheme: (theme: string) => void
}

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const currentTheme = window.localStorage.getItem('current-theme');
    if (typeof currentTheme === 'string') {
      return currentTheme;
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  return 'light';
};

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: '',
  setTheme: () => null,
});

export const ThemeProvider = ({children}: { children: ReactNode }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const checkTheme = (existing: string) => {
    const htmlElement = window.document.documentElement;
    const isDark = existing === 'dark';

    htmlElement.classList.remove(isDark ? 'light' : 'dark');
    htmlElement.classList.add(existing);

    localStorage.setItem('current-theme', existing);
  };

  useEffect(() => {
    checkTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};