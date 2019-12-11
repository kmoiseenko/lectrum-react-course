import React from 'react';

import { usePeopleFetch } from './hooks/usePeopleFetch';

export const People = () => {
    const { isFetching, data, error } = usePeopleFetch();

    const errorMessageJSX = <p>Not found!</p>;
    const loaderJSX = <p>Loading data from API...</p>;
    const listJSX = data.map(({name}, index) => (
        <li key={index}>{name}</li>
    ));

    const manageJSX = () => {
        if (error.status === 404) {
            return errorMessageJSX;
        }

        return isFetching ? loaderJSX : listJSX;
    }

    return (
        <>
            <h1>People</h1>
            {manageJSX()}
        </>
    )
}