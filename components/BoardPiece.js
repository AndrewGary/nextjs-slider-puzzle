import { useState, useContext, useEffect } from "react";
import { Context } from "../contexts/SettingsContext";

const BoardPiece = ({index}) => {

    const [settings] = useContext(Context);

    // let classes;

    useEffect(() => {
        if(settings.colsAndRows === 4){
            console.log('setting classes')
            setClasses('w-1/4 h-1/4');
        }else if(settings.colsAndRows === 5){
            console.log('setting classes')
            setClasses('w-1/5 h-1/5')
            // classes = 'w-1/5 h-1/5'
        }else if(settings.colsAndRows === 6){
            console.log('setting classes')
            setClasses('w-1/6 h-1/6')
        }else{
            console.log('setting classes to empty')
            setClasses('');
        }
    }, [settings])


    const [classes, setClasses] = useState('');
    return(
        <div className={`border border-black ${classes}`}>
            {index}
        </div>
    )
}

export default BoardPiece;