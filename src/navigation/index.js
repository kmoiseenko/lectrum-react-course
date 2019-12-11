import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import { News } from './../Components/News';
import { PrivateRoute } from './PrivateRoute';
import { LoginPage } from './../Components/LoginPage';
import { Student } from './../Components/Student';
import { StudentRegistration } from './../Components/StudentRegistration';
import { People } from './../bus/people/People/index';
import { Person } from './../bus/people/Person/index';
import { Films } from './../bus/films/Films/index';
import { Film } from './../bus/films/Film/index';
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
            component={ Student }
            path= { book.student }
            exact
        />
        <Route
            component={ StudentRegistration }
            path= { book.studentRegistration }
            exact
        />
        <Route
            component={ People }
            path= { book.people }
            exact
        />
        <Route
            component={ Person }
            path= { book.person }
            exact
        />
        <Route
            component={ Films }
            path= { book.films }
            exact
        />
        <Route
            component={ Film }
            path= { book.film }
            exact
        />
        <Redirect to={ book.news } />
    </Switch>
);