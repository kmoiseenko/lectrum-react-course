// Types
import { types } from './types';

import { api } from './../../../api';

export const filmsActions = Object.freeze({
    // Sync
    startFetching: () => {
        return {
            type: types.FILMS_START_FETCHING,
        }
    },
    stopFetching: () => {
        return {
            type: types.FILMS_STOP_FETCHING,
        }
    },
    fill: (payload) => {
        return {
            type: types.FILMS_FILL,
            payload
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.FILMS_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },
    // Async
    filmsFetchAsync: () => async (dispatch) => {
        dispatch({
            type: types.FILMS_FETCH_ASYNC
        });

        dispatch(filmsActions.startFetching());
        try {
            const response = await api.films.fetch();

            if (response.status === 200) {
                try {
                    const { results } = await response.json();

                    dispatch(filmsActions.fill(results));
                } catch(error) {
                    console.log(error);
                }
            } else {
                const error = {
                    status: response.status
                };

                dispatch(filmsActions.setFetchingError(error));
            }

            dispatch(filmsActions.stopFetching());
        } catch(error) {
            console.log(error);
        }
    }
});