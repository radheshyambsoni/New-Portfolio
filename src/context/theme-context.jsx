import React, { useEffect, useState } from 'react';

const ThemeContext = React.createContext({
    theme: false,
    themeChangeHandler: () => { },
});

export const ThemeContextProvider = (props) => {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [theme, setTheme] = useState(getCurrentTheme);
    const themeChangeHandler = () => {
        setTheme(prevTheme => {
            if (!prevTheme) {
                document.documentElement.style.setProperty('--bg', 'linear-gradient(136deg, #2e5889d0, #118578d0, #935a0bd0, #6a3d7cd0, #a35050d0, #939696d0) 0% 0% / 1200% 1200%');
            } else {
                document.documentElement.style.setProperty('--bg', 'linear-gradient(136deg, #4484ced0, #1ad7c0d0, #ff9b11d0, #9b59b6d0, #ff7f7fd0, #ecf0f1d0) 0% 0% / 1200% 1200%');
            }
            return !prevTheme;
        });
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