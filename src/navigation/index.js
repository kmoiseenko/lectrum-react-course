import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { News } from './../Components/News';
import { PrivateRoute } from './PrivateRoute';
import { LoginPage } from './../Components/LoginPage';
import { StudentRegistration } from './../Components/StudentRegistration';
import { Page404 } from './../Components/Page404';

import { book } from './book';

export const Routes = () => (
    <Switch>
        <Route
            component={ News }
            path={ book.news }
            exact
        />
        <Route
            component={ Page404 }
            path={ book.page404 }
        />
        <PrivateRoute 
            path={ book.newsId }
            exact
        >
            <News />
        </PrivateRoute>
        <Route
            component={ LoginPage }
            path= { book.login }
        />
        <Route
            component={ StudentRegistration }
            path= { book.studentRegistration }
        />
        <Redirect to={ book.news } />
    </Switch>
);