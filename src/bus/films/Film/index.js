import React from 'react';

import { useFilmFetch } from './hooks/useFilmFetch';

export const Film = () => {
    const { isFetching, data, error } = useFilmFetch();

    const errorMessage = error.status === 404 && (
        <p>Not found!</p>
    );

    const loader = isFetching && (
        <p>Loading data from API...</p>
    );
    
    const FilmJSX = () => {
        let result = [];

        for (let key in data) {
            let value = data[key];

            result.push(<li key={ key }>{ key }: { value }</li>);
        }

        return result;
    }

    const list = isFetching || FilmJSX();

    return (
        <>
            <h1>Film</h1>
            {errorMessage}
            {loader}
            {list}
        </>
    )
}