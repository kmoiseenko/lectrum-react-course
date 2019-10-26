import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { News } from './../Components/News';

import { book } from './book';

export const Routes = () => (
    <Switch>
        <Route
            component={ News }
            path={ book.news }
        />
    </Switch>
);