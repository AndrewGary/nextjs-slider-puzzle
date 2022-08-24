import React, { useState } from "react";

export const Context = React.createContext();

const SettingsContext = ({ children }) => {
    const [settings, setSettings] = useState({
        difficulty: ['Easy', 'Medium', 'Hard'],
        user: 'Andrew',
    });

    return (
            <Context.Provider value={[settings, setSettings]}>{children}</Context.Provider>
    )
}

export default SettingsContext;