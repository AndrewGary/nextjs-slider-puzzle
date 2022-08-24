import React, { useState } from "react";

export const Context = React.createContext();

const SettingsContext = ({ children }) => {
    const [settings, setSettings] = useState({
        difficulty: ['Easy', 'Medium', 'Hard'],
        user: 'Andrew',
        colsAndRows: 5,
        boardArray: []
    });

    return (
            <Context.Provider value={[settings, setSettings]}>{children}</Context.Provider>
    )
}

export default SettingsContext;