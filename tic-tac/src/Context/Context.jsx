import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState('dark') ;
    const change_theme = () =>{


        if(theme === 'dark'){
            setTheme('light');
            localStorage.setItem('theme' , 'light') ;
        }
        else{
            setTheme('dark');
            localStorage.setItem('theme' , 'dark') ;
        }
    }

    useEffect(()=>{
        const storedTheme = localStorage.getItem('theme');
        if(storedTheme == 'dark'){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }

    }, []);

    return (
        <ThemeContext.Provider value={{theme, change_theme}}>
            {children}
        </ThemeContext.Provider>
    )

};