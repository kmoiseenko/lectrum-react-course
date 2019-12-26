import { combineReducers, createStore } from 'redux';

import { studentReducer as student } from './../../bus/student/reducer';
import { peopleReducer as people } from './../../bus/people/People/reducer';
import { personReducer as person } from './../../bus/people/Person/reducer';
import { filmsReducer as films } from './../../bus/films/Films/reducer';
import { filmReducer as film } from './../../bus/films/Film/reducer';

import { store } from './../store'

export const referenceRootReducer = combineReducers({
    student,
    people,
    person,
    films,
    film
});

const referenctStore = createStore(referenceRootReducer);

describe("Store:", () => {
    test("Should have valid state shape", () => {
        expect(store.getState()).toEqual(referenctStore.getState());
    });
});