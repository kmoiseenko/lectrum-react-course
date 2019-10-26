import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { News } from './../Components/News';
import { Unknown } from './../Components/Unknown';

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
            component={ Unknown }
            path={ book.unknown }
        />
        <Redirect to={ book.unknown } />
    </Switch>
);