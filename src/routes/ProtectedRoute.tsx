import React, {ReactElement, ReactNode} from 'react';
import {Navigate} from "react-router-dom";

type Props = {
    children: ReactElement
}

export const ProtectedRoute = ({children}: Props) => {
    const login = false
    return login ? children : <Navigate to="/error" />

};
