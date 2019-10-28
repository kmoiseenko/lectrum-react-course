import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { News } from './../Components/News';
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
            component={ News }
            path={ book.newsId }
            exact
        />
        <Route
            component={ Page404 }
            path={ book.page404 }
        />
        <Redirect to={ book.news } />
    </Switch>
);