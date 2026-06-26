import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    const toggleTheme = ()=>{
        setTheme((prev) => prev ==='light' ? 'dark' : 'light');
        console.log(theme)
    }
    useEffect(() => {

        localStorage.setItem('theme',theme)
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
    },[theme])

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme = () => useContext(ThemeContext)