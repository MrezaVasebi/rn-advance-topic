import React, { createContext, useState } from "react";

export type ThemeType = "light" | "dark";

interface ITheme {
  theme: ThemeType;
  toggleTheme: (value: ThemeType) => void;
}

export const ThemeContext = createContext<ITheme | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");
  const toggleTheme = (value: ThemeType) => setTheme(value);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
