import React from 'react';

import { usePersonFetch } from './hooks/usePersonFetch';

export const Person = () => {
    const { isFetching, data, error } = usePersonFetch();

    const errorMessage = error.status === 404 && (
        <p>Not found!</p>
    );

    const loader = isFetching && (
        <p>Loading data from API...</p>
    );
    
    const PersonJSX = () => {
        const result = [];

        for (let key in data) {
            let value = data[key];

            result.push(<li key={ key }>{ key }: { value }</li>);
        }

        return result;
    }

    const list = isFetching || PersonJSX();

    return (
        <>
            <h1>Person</h1>
            {errorMessage}
            {loader}
            {list}
        </>
    )
}