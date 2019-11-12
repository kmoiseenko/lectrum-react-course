// Types
import { types } from './types';

import { api } from './../../../api';

export const filmActions = Object.freeze({
    // Sync
    startFetching: () => {
        return {
            type: types.FILM_START_FETCHING,
        }
    },
    stopFetching: () => {
        return {
            type: types.FILM_STOP_FETCHING,
        }
    },
    fill: (payload) => {
        return {
            type: types.FILM_FILL,
            payload
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.FILM_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },
    // Async
    filmFetchAsync: (id) => async (dispatch) => {
        dispatch({
            type: types.FILM_FETCH_ASYNC
        });

        dispatch(filmActions.startFetching());
        const response = await api.film.fetch(id);
        
        if (response.status === 200) {
            const result = await response.json();

            dispatch(filmActions.fill(result));
        } else {
            const error = {
                status: response.status
            };

            dispatch(filmActions.setFetchingError(error));
        }

        dispatch(filmActions.stopFetching());
    }
});