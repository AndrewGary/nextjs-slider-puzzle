import React, { useState } from "react";

export const Context = React.createContext();

const DifficultyContext = ({ children }) => {
    const [difficulty, setDifficulty] = useState(5);
    // const [ gameActive, setGameActive ] = useState(false);

    return (
            <Context.Provider value={[difficulty, setDifficulty]}>{children}</Context.Provider>
    )
}

export default DifficultyContext;