import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { Router } from 'react-router-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { history } from './../../navigation/history';
import { Student } from './';

Enzyme.configure({ adapter: new Adapter() });

const testInitialState = {
    firstName: 'Name',
    surname: 'Surname',
    age: '18',
    email: 'some@gmail.com',
    sex: 'male',
    speciality: 'developer',
    password: '1234567890q',
    confirmPassword: '1234567890q'
};

const fieldsAmount = Object.keys(testInitialState).length - 2;

const student = () => {
    return testInitialState;
};

const testRootReducer = combineReducers({
    student
});

const testStore = createStore(
    testRootReducer
);

const init = () => {
    const container = mount(
        <Provider store={testStore}>
            <Router history={history}>
                <Student />
            </Router>
        </Provider>
    );
    const { firstName } = container.props().store.getState().student;
    const studentFound = container.find('#test__student-found');
    const studentNotFound = container.find('#test__student-not-found');
    const studentInfoList = container.find('#test__student-info-list');

    return {
        container,
        firstName,
        studentFound,
        studentNotFound,
        studentInfoList
    };
}

describe('Student component', () => {
    const { firstName } = init();

    test('Student component should render without crashing.', () => {
        const div = document.createElement('div');

        mount(
            <Provider store={testStore}>
                <Router history={history}>
                    <Student />
                </Router>
            </Provider>
        , div);
    });

    if (!firstName) {
        test('Some kind of section with warning text should appear, if there is no student.', () => {
            const { studentNotFound } = init();

            expect(studentNotFound.exists()).toEqual(true);
        });
    }

    if (firstName) {
        test('Some kind of section with student info should appear, if there is a student.', () => {
            const { studentFound } = init();

            expect(studentFound.exists()).toEqual(true);
        });
    }

    test('Amount of the rendered items in student info section should be the same as amount of keys in test Initial State object, except password fields.', () => {
        const { studentInfoList } = init();
        const listLength = studentInfoList.find('li').length;

        expect(listLength).toEqual(fieldsAmount);
    });
});