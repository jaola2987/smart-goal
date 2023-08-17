import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [lightTheme, setLightTheme] = useState(true);
  return (
    <ThemeContext.Provider
      value={{
        lightTheme,
        toggleTheme: () => setLightTheme(!lightTheme),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
