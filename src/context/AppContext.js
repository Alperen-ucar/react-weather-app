import { useState, useEffect } from 'react';
import { createContext } from 'react';

const MyContext = createContext();

export const AppProvider = ({children}) => {
    const [theme, setTheme] = useState("dark");
    
    const values = {
        theme,
        setTheme,
    }
    return <MyContext.Provider value={values}>{children}</MyContext.Provider>
}

export default MyContext;