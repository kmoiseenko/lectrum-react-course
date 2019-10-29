import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { book } from './../../navigation/book';

export const PrivateRoute = ({ children, ...rest }) => {
    return (
        <Route {...rest}>
            {
                ({ location }) =>
                !!localStorage.isAuth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: book.login,
                            state: { from: location }
                        }}
                    />
                )
            }
        </Route>
    );
}