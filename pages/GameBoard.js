import { useContext, useState, useEffect } from "react";

import BoardPiece from "../components/BoardPiece";

import { Context } from "../contexts/SettingsContext";

const GameBoard = props => {

    const [settings, setSettings] = useContext(Context);



    useEffect(() => {
        
        const createBoardArray = async () => {
            const tempArray = [];
            const itterations = settings.colsAndRows * settings.colsAndRows;
            for(let i = 0; i < itterations; i++){
                tempArray.push(<BoardPiece rowsAndCols={setSettings.colsAndRows} index={i}/>)
            }

            setSettings({
                ...settings,
                boardArray: [...tempArray]
            })
        }
        createBoardArray();
    }, [])

    useEffect(() => {
        console.log('settings changed');
        console.log(settings);
    }, [settings])

    return(
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="flex flex-wrap w-600 h-600 border border-black">
                {settings.boardArray.length ? settings.boardArray.map(piece => piece) : 'loading'}
            </div>
        </div>
    )
}

export default GameBoard;