import React, { useContext, useState } from "react";
import { Context } from "../contexts/SettingsContext";
import Link from "next/link";

const Settings = () => {
  const [settings, setSettings] = useContext(Context);

  const [difficultyLevel, setDifficultyLevel] = useState(1);

  const { difficulty } = settings;

  const handleDifficultyChange = () => {
    if(difficultyLevel === 2){
        setDifficultyLevel(0);
    }else{
        setDifficultyLevel(difficultyLevel + 1);
    }
    if(settings.colsAndRows === 6){
      setSettings({
        ...settings,
        colsAndRows: 4
      })
    }else{
      setSettings({
        ...settings,
        colsAndRows: settings.colsAndRows + 1
      })
    }
  };

  return (
    <div className="flex flex-col w-full items-center justify-center h-screen">
      <div className="flex flex-col justify-evenly items-center border border-black w-2/5 h-2/5">
        <div>Slider Puzzle</div>
        <div className="flex w-full h-1/3 bg-orange-100">
          <div className="flex w-1/2 justify-center items-center">
            <button className="flex justify-evenly items-center border border-orange-600 bg-orange-400 w-2/3 h-4/6 rounded-md" onClick={handleDifficultyChange}><span>Difficulty:</span><span>{difficulty[difficultyLevel]}</span></button>
          </div>
          <div className="flex w-1/2 justify-center items-center">
            <button className="border border-orange-600 bg-orange-400 w-2/3 h-4/6 rounded-md">Change Image</button>
          </div>
        </div>
        <Link href='/GameBoard'>
          <a className="border border-black">Start Game</a>
        </Link>
      </div>
    </div>
  );
};

export default Settings;
