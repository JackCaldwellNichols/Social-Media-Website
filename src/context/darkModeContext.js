import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({children}) => {

    const [theme, setTheme] = useState('light')

    useEffect (()=> {
        document.body.className = theme;
    }, [theme])
    
    const toggleTheme = () => {
        if(theme === 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }

    return (
        <DarkModeContext.Provider value={{theme, toggleTheme}}>{children}</DarkModeContext.Provider>
    )
}

