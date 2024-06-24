import React from 'react';
import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import {Abibas} from "../components/pages/Abibas";
import {Puma} from "../components/pages/Puma";
import {Prices} from "../components/pages/Prices";

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
} as const

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Navigate to={'/404'}/>,
        children: [
            {
                path: PATH.ADIDAS,
                element: <Adidas/>
            },
            {
                path: PATH.ABIBAS,
                element: <Abibas/>
            },
            {
                path: PATH.PUMA,
                element: <Puma/>
            },
            {
                path: PATH.PRICES,
                element: <Prices/>
            }
        ],
    },
    {
        path: '/404',
        element: <Error404/>,
    },

])