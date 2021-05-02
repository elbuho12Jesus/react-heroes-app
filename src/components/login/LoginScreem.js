import React, { useContext } from 'react';
import {AuthContext} from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreem = ({history}) => {
    const {dispatch} = useContext(AuthContext);
    const handleLogin=()=>{
        const lastPath=localStorage.getItem('lastpath') || '/';
        const action={
            type: types.login,
            payload: {
                name: "Jesus Miguel Adrian Matos"
            }            
        }
        dispatch(action);
        history.replace(lastPath);
    }
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
