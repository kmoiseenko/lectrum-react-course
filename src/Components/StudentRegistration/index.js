import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Navigation
import { history } from './../../navigation/history';
import { book } from './../../navigation/book';

// Styles
import './styles.scss';

export const StudentRegistration = () => {
    const getInitValues = () => {
        if (localStorage.student) {
            return JSON.parse(localStorage.student);
        } else {
            return {
                firstName: '',
                surname: '',
                age: '',
                email: '',
                sex: '',
                speciality: '',
                password: '',
                confirmPassword: ''
            }
        }
    }

    const getTextValues = () => {
        if (localStorage.student) {
            return {
                btn: 'Обновить данные',
                successMessage: 'Данные обновленны'
            }
        } else {
            return {
                btn: 'Submit',
                successMessage: 'Форма заполнена'
            }
        }
    }

    const initialValues = getInitValues();
    const textValues = getTextValues();
    const { formErrorRequired,
            formErrorAge,
            formErrorEmail, 
            formErrorPasswordLength, 
            formErrorPasswordDigitsLength,
            formErrorPasswordLettersLength ,
            formErrorPasswordsMustMacth
        } = {
            formErrorRequired: 'This field is required',
            formErrorAge: 'Age must be more then 6 and less then 60',
            formErrorEmail: 'This is not a valid email',
            formErrorPasswordLength: 'Password must have at least 10 symbols',
            formErrorPasswordDigitsLength: 'Password must have at least 3 digits',
            formErrorPasswordLettersLength: 'Password must have letters too',
            formErrorPasswordsMustMacth: 'Passwords must match'
        };
    const { designer, developer, writer } =  {
        designer: 'designer',
        developer: 'developer',
        writer: 'writer'
    };

    const handleFormSubmit = (values) => {
        console.log(values);
        localStorage.setItem('student', JSON.stringify(values));
        alert(textValues.successMessage);
        history.replace(book.student);
    }

    const studentSchema = Yup.object().shape({
        firstName: Yup.string()
            .required(formErrorRequired),
        surname: Yup.string()
            .required(formErrorRequired),
        age: Yup.number()
            .min(6, formErrorAge)
            .max(60, formErrorAge),
        email: Yup.string()
            .email(formErrorEmail)
            .required(formErrorRequired),
        sex: Yup.string()
            .required(formErrorRequired),
        speciality: Yup.string()
            .oneOf([
                designer,
                developer,
                writer
            ])
            .required(formErrorRequired),
        password: Yup.string()
            .required(formErrorRequired)
            .min(10, formErrorPasswordLength)
            .test('passwordDigitCheck', formErrorPasswordDigitsLength, (item) => {
                if (item) {
                    return item.replace(/[^0-9]/g, '').length >= 3 ? true : false;
                }
            })
            .test('passwordLettersCheck', formErrorPasswordLettersLength, (item) => {
                if (item) {
                    return item.replace(/[^A-Za-z]/g, '').length ? true : false;
                }
            }),
        confirmPassword: Yup.string()
            .required(formErrorRequired)
            .oneOf([
                Yup.ref('password')
            ], formErrorPasswordsMustMacth)
    });

    const isErrorClassName = (touched, errors, fieldName) => {
        return touched[fieldName] && errors[fieldName] ? 'error' : null
    }

    return (
        <section>
            <h1>This is student registration form</h1>

            <Formik
                initialValues={ initialValues }
                onSubmit={ handleFormSubmit }
                validationSchema={ studentSchema }
            >
                {(props) => {
                    const { errors, touched } = props;
                    return (
                        <Form>
                            <div>
                                <label
                                    className={ isErrorClassName(touched, errors, 'firstName') }
                                    htmlFor="firstName"
                                >
                                    First name
                                </label>
                                <Field
                                    type="text"
                                    id="firstName"
                                    className={ isErrorClassName(touched, errors, 'firstName') }
                                    name="firstName"
                                    placeholder="Enter your first name"
                                />
                                <ErrorMessage name="firstName" />
                            </div>
                            
                            <div>
                                <label 
                                    className={ isErrorClassName(touched, errors, 'surname') }
                                    htmlFor="surname"
                                >
                                    Surname
                                </label>
                                <Field
                                    type="text"
                                    id="surname"
                                    className={ isErrorClassName(touched, errors, 'surname') }
                                    name="surname"
                                    placeholder="Enter your surname"
                                />
                                <ErrorMessage name="surname" />
                            </div>

                            <div>
                                <label
                                    className={ isErrorClassName(touched, errors, 'age') }
                                    htmlFor="age"
                                >
                                    Age
                                </label>
                                <Field
                                    type="number"
                                    id="age"
                                    className={ isErrorClassName(touched, errors, 'age') }
                                    name="age"
                                    placeholder="Enter your age"
                                />
                                <ErrorMessage name="age" />
                            </div>

                            <div>
                                <label
                                    className={ isErrorClassName(touched, errors, 'email') }
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <Field
                                    type="email"
                                    id="email"
                                    className={ isErrorClassName(touched, errors, 'email') }
                                    name="email"
                                    placeholder="Enter your email"
                                />
                                <ErrorMessage name="email" />
                            </div>

                            <div>
                                <label
                                    className={ isErrorClassName(touched, errors, 'sex') }
                                >
                                    Choose your sex
                                </label>
                                <label htmlFor="male">Male</label>
                                <Field
                                    type="radio"
                                    id="male"
                                    className={ isErrorClassName(touched, errors, 'sex') }
                                    name="sex"
                                    value="Male"
                                />
                                <label htmlFor="female">Female</label>
                                <Field
                                    type="radio"
                                    id="female"
                                    className={ isErrorClassName(touched, errors, 'sex') }
                                    name="sex"
                                    value="Female"
                                />
                                <ErrorMessage name="sex" />
                            </div>

                            <div>
                                <label
                                    className={ isErrorClassName(touched, errors, 'speciality') }
                                    htmlFor="speciality"
                                >
                                    Choose your speciality
                                </label>
                                <Field
                                    as="select"
                                    name="speciality"
                                    id="speciality"
                                    className={ isErrorClassName(touched, errors, 'speciality') }
                                >
                                    <option value="">Choose your speciality</option>
                                    <option value={ designer }>{ designer }</option>
                                    <option value={ developer }>{ developer }</option>
                                    <option value={ writer }>{ writer }</option>
                                </Field>
                                <ErrorMessage name="speciality" />
                            </div>

                            <div>
                                <label
                                    className={ isErrorClassName(touched, errors, 'password') }
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <Field
                                    type="password"
                                    id="password"
                                    className={ isErrorClassName(touched, errors, 'password') }
                                    name="password"
                                    placeholder="Enter your password"
                                />
                                <ErrorMessage name="password" />
                            </div>

                            <div>
                                <label
                                    className={ isErrorClassName(touched, errors, 'confirmPassword') }
                                    htmlFor="confirmPassword"
                                >
                                    Confirm your password
                                </label>
                                <Field
                                    type="password"
                                    id="confirmPassword"
                                    className={ isErrorClassName(touched, errors, 'confirmPassword') }
                                    name="confirmPassword"
                                    placeholder="Confirm your password"
                                />
                                <ErrorMessage name="confirmPassword" />
                            </div>

                            <button className="app-btn" type="submit">{ textValues.btn }</button>
                        </Form>
                    )
                }}
            </Formik>
        </section>
    )
}