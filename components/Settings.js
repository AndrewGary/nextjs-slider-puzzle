import React, { useContext } from "react";
import { Context } from "../contexts/DifficultyContext";

const Settings = () =>{

    const [difficulty, setDifficulty] = useContext(Context);

    return(
        <div>
            <div>
                Slider Puzzle
            </div>
            <div>
                {difficulty}
                <button>Difficulty</button>
                <button>Start Game</button>
            </div>
        </div>
    )
}

export default Settings;