import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const themeContext = createContext(null);
export default themeContext;

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(async () => {
    const storedTheme = await AsyncStorage.getItem("theme");
    if (storedTheme == null) {
      setTheme("light");
    } else {
      setTheme(storedTheme);
    }
    console.log(theme, storedTheme);
    await AsyncStorage.setItem("theme", theme);
  }, []);

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
}
