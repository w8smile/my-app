import React from 'react';
import {adidasArr, AdidasItem} from "./Adidas";
import { useParams } from "react-router-dom";
import {pumaArr, PumaItem} from "./Puma";

type CrossModels = {
    [key: string ] : (AdidasItem[] | PumaItem [])
}

const crossModels: CrossModels = {
    adidas: adidasArr,
    puma: pumaArr
}

export const Model = () => {
    const {model, id} = useParams();
    // const currentModel = adidasArr.find(el=>el.id===num)
    const currentModel = model ? crossModels[model].find((el)=>el.id===Number(id)) : null

    return (
        <>
            {currentModel ? (
                <>
                    <div>
                        <img src={currentModel?.picture} />
                    </div>
                    <h1>{currentModel?.model}</h1>
                    <h2>{currentModel?.collection}</h2>
                    <h3>{currentModel?.price}</h3>
                    <img
                        src={currentModel?.picture}
                        alt={currentModel?.model}
                        style={{width: '600px', height: 'auto', marginRight: '10px'}}
                    />
                </>
            ) : (
                <h1>Модель отсутствует</h1>
            )}
        </>
    );
};

export default Model;
