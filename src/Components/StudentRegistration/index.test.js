import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {
    valueLength,
    sex,
    jobs,
    passwordRegExp,
    formErrorName,
    formErrorSurname,
    formErrorAge,
    formErrorPasswordLength,
    formErrorPasswordDigitsLength,
    formErrorPasswordLettersLength,
    formErrorPasswordsMustMacth
} from './helper';
import { StudentRegistration } from './';

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

const fieldsAmount = Object.keys(testInitialState).length;

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
        <Provider store={ testStore }>
            <StudentRegistration />
        </Provider>
    );

    const form = container.find('form');
    const formFields = container.find('.form-item');
    const formBtn = container.find('.form-btn');
    const firstNameField = container.find('#firstName');
    const surnameField = container.find(('#surname'));
    const ageField = container.find('#age');
    const emailField = container.find('#email');
    const sexField = container.find('[name="sex"]');
    const specialityField = container.find('#speciality');
    const passwordField = container.find('#password');
    const confirmPasswordField = container.find('#confirmPassword');

    return {
        container,
        form,
        formFields,
        formBtn,
        firstNameField,
        surnameField,
        ageField,
        emailField,
        sexField,
        specialityField,
        passwordField,
        confirmPasswordField
    };
}

describe('StudentRegistration component', () => {
    test('StudentRegistration component should render without crashing', () => {
        const div = document.createElement('div');

        mount(
            <Provider store={ testStore }>
                <StudentRegistration />
            </Provider>
        , div);
    });

    test('StudentRegistration component should have form', () => {
        const { form } = init();
        
        expect(form.exists()).toEqual(true);
    });

    test(`StudentRegistration component form should have ${fieldsAmount} fields`, () => {
        const { formFields } = init();
        
        expect(formFields).toHaveLength(fieldsAmount);
    });

    test('StudentRegistration component should have button in form', () => {
        const { formBtn } = init();
        
        expect(formBtn.exists()).toEqual(true);
    });

    test(`${formErrorName}`, () => {
        const { firstNameField } = init();
        const value = firstNameField.find('input').props().value;
        
        expect(value.length).toBeGreaterThanOrEqual(valueLength.firstNameMin);
        expect(value.length).toBeLessThanOrEqual(valueLength.firstNameMax);
    });

    test(`${formErrorSurname}`, () => {
        const { surnameField } = init();
        const value = surnameField.find('input').props().value;

        expect(value.length).toBeGreaterThanOrEqual(valueLength.surnameMin);
        expect(value.length).toBeLessThanOrEqual(valueLength.surnameMax);
    });

    test(`${formErrorAge}`, () => {
        const { ageField } = init();
        const value = Number(ageField.find('input').props().value);

        expect(value).toBeGreaterThanOrEqual(valueLength.surnameMin);
        expect(value).toBeLessThanOrEqual(valueLength.surnameMax);
    });

    test(`Email value should be valid`, () => {
        const { emailField } = init();
        const value = emailField.find('input').props().value;
        const reg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        expect(value).toMatch(reg);
    });

    test(`Sex value should be ${sex.male} or ${sex.female}`, () => {
        const { sexField } = init();
        const checkedRadio = sexField.find('input[type="radio"]').filterWhere(item => {
            return item.props().checked ? item : null;
        });
        const value = checkedRadio.props().value;

        expect(checkedRadio.exists()).toEqual(true);
        expect(value).toBe(sex[value]);
    });

    test(`Speciality value should be one of these - ${jobs.developer}/${jobs.writer}/${jobs.designer}`, () => {
        const { specialityField } = init();
        const value = specialityField.find('select').props().value;
        
        expect(value).toBe(jobs[value]);
    });

    test(`${formErrorPasswordLength}`, () => {
        const { passwordField } = init();
        const value = passwordField.find('input').props().value;

        expect(value.length).toBeGreaterThanOrEqual(valueLength.passwordMin);
    });

    test(`${formErrorPasswordDigitsLength}`, () => {
        const { passwordField } = init();
        const value = passwordField.find('input').props().value;
        const digitsLength = value.replace(passwordRegExp.digit, '').length;

        expect(digitsLength).toBeGreaterThanOrEqual(valueLength.passwordMinDigitLength);
    });

    test(`${formErrorPasswordLettersLength}`, () => {
        const { passwordField } = init();
        const value = passwordField.find('input').props().value;
        const charsLength = value.replace(passwordRegExp.general, '').length;

        expect(charsLength).toBeGreaterThanOrEqual(1);
    });

    test(`${formErrorPasswordsMustMacth}`, () => {
        const { passwordField, confirmPasswordField } = init();
        const password = passwordField.find('input').props().value;
        const confirmPassword = confirmPasswordField.find('input').props().value;

        expect(confirmPassword).toBe(password);
    });
});