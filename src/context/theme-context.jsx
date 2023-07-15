import React, { useState } from 'react';

const ThemeContext = React.createContext({
    theme: false,
    themeChangeHandler: () => { },
});

export const ThemeContextProvider = (props) => {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [theme, setTheme] = useState(getCurrentTheme);
    const themeChangeHandler = () => {
        setTheme(prevTheme => !prevTheme);
    }

    return (
        <ThemeContext.Provider
            value={{
                theme: theme,
                themeChangeHandler: themeChangeHandler,
            }}
        >
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;