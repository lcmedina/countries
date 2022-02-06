import React, { useContext, useState } from "react";
const Theme = React.createContext();
const ThemeUpdate = React.createContext();

export const useTheme = () => {return useContext(Theme)};
export const UpdateTheme = () => {return useContext(ThemeUpdate)};


const ThemeProvider = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(false);
    const toggleTheme = () => setDarkTheme(prevDarkTheme => !prevDarkTheme)

    return ( 
        <Theme.Provider value={darkTheme}>
            <ThemeUpdate.Provider value={toggleTheme}>
                {children}
            </ThemeUpdate.Provider>
        </Theme.Provider>
     );
}
 
export default ThemeProvider;