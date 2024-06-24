import React from 'react';
import {createBrowserRouter, Navigate, Outlet, RouteObject} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import {Abibas} from "../components/pages/Abibas";
import {Puma} from "../components/pages/Puma";
import {Prices} from "../components/pages/Prices";
import {Model} from "../components/pages/Model";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {ProtectedRoute} from "./ProtectedRoute";
import {Login} from "../components/pages/Login";


const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
    MODEL: '/:model/:id',
    PROTECTEDPAGE: '/protectedpage',
    ERROR: '/404',
    LOGIN: '/login'
} as const

const publicRoutes: RouteObject[] =[
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
    },
    {
        path: PATH.MODEL,
        element: <Model/>
    },
    {
        path: PATH.LOGIN,
        element: <Login/>
    },
    {
        path: PATH.ERROR,
        element: <Error404/>,
    },
]
const privateRoutes: RouteObject[] = [
    {
        path: PATH.PROTECTEDPAGE,
        element: (
                <ProtectedPage/>
        )
    },
]


export const PrivateRoutes = () => {
    const isAuth = false
    return isAuth ? <Outlet/> : <Navigate to="/login" />

};


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Navigate to={PATH.ERROR}/>,
        children: [
            {
                element: <PrivateRoutes/>,
                children: privateRoutes
            },
            ...publicRoutes,

        ],
    },



])

{/*    <Route path={'/:model/:id'} element={<Model/>}/>*/
}