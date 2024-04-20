import React from 'react';
import { adidasArr } from "./Adidas";
import { useParams } from "react-router-dom";
import {pumaArr} from "./Puma";

export const PumaModels = () => {
    const params = useParams();
    let num = Number(params.id);
    const currentModel = pumaArr.find(el=>el.id===num)

    return (
        <>
            {currentModel ? (
                <>
                    <div>
                        <img src={currentModel.picture} />
                    </div>
                    <h1>{currentModel.model}</h1>
                    <h2>{currentModel.collection}</h2>
                    <h3>{currentModel.price}</h3>
                </>
            ) : (
                <h1>Модель отсутствует</h1>
            )}
        </>
    );
};

