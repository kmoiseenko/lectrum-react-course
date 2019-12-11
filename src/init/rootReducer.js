import { combineReducers } from 'redux';

import { studentReducer as student } from '../bus/student/reducer';
import { peopleReducer as people } from '../bus/people/People/reducer';
import { personReducer as person } from '../bus/people/Person/reducer';
import { filmsReducer as films } from '../bus/films/Films/reducer';
import { filmReducer as film } from '../bus/films/Film/reducer';

export const rootReducer = combineReducers({
    student,
    people,
    person,
    films,
    film
});