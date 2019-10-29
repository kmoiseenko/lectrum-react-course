import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export const LoginPage = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleLoginClick = () => {
        localStorage.setItem('isAuth', true);
        history.replace(from);
    }

    return (
        <button onClick={ () => handleLoginClick() }>Log in</button>
    );
}