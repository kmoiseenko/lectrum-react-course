// Types
import { types } from './types';

const initialState = {
    firstName: '',
    surname: '',
    age: '',
    email: '',
    sex: '',
    speciality: '',
    password: '',
    confirmPassword: ''
};

export const studentReducer = ( state = initialState, { type, payload } ) => {
    switch (type) {
        case types.SET_STUDENT:
            return { ...state, ...payload };

        default:
            return state;
    }
}