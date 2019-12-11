// Types
import { types } from './types';

import { api } from './../../../api';

export const personActions = Object.freeze({
    // Sync
    startFetching: () => {
        return {
            type: types.PERSON_START_FETCHING,
        }
    },
    stopFetching: () => {
        return {
            type: types.PERSON_STOP_FETCHING,
        }
    },
    fill: (payload) => {
        return {
            type: types.PERSON_FILL,
            payload
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.PERSON_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },
    // Async
    personFetchAsync: (id) => async (dispatch) => {
        dispatch({
            type: types.PERSON_FETCH_ASYNC
        });

        dispatch(personActions.startFetching());
        const response = await api.person.fetch(id);
        
        if (response.status === 200) {
            const result = await response.json();

            dispatch(personActions.fill(result));
        } else {
            const error = {
                status: response.status
            };

            dispatch(personActions.setFetchingError(error));
        }

        dispatch(personActions.stopFetching());
    }
});