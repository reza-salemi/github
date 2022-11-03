import {createContext, useState, useEffect, ReactNode} from 'react';

interface ThemeContextInterface {
  theme: string,
  setTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: '',
  setTheme: () => null,
});

export const ThemeProvider = ({children}: { children: ReactNode }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') ?? 'light');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const htmlElement = window.document.documentElement;
    console.log(theme);
    htmlElement.classList.remove(colorTheme);
    htmlElement.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [colorTheme, theme]);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};