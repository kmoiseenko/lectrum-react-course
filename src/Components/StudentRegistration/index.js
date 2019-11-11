import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

// Navigation
import { history } from './../../navigation/history';
import { book } from './../../navigation/book';

// Bus
import { studentActions } from './../../bus/student/actions'

// Helper
import { studentSchema, sex, jobs } from './helper';

// Styles
import './styles.scss';

export const StudentRegistration = () => {
    const dispatch = useDispatch();
    const initialValues = useSelector((state) => state.student);
    const [successMessage, setSuccessMessage] = useState();
    const [btnText, setBtnText] = useState();
    const [isFormFilled, setFormFilled] = useState(false);

    useEffect(() => {
        if (initialValues.firstName) {
            setSuccessMessage('Данные обновлены');
            setBtnText('Обновить данные');
        } else {
            setSuccessMessage('Форма заполнена');
            setBtnText('Submit');
        }
    }, [initialValues]);

    const handleFormSubmit = (values) => {
        dispatch(studentActions.setStudent(values));
        setFormFilled(true);
        history.replace(book.student);
    }

    const isErrorClassName = (touched, errors, fieldName) => {
        return touched[fieldName] && errors[fieldName] ? 'error' : null;
    }

    const test = () => {
        if (isFormFilled) {
            return successMessage;
        } else {
            return (
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
                                        value={ sex.male }
                                    />
                                    <label htmlFor="female">Female</label>
                                    <Field
                                        type="radio"
                                        id="female"
                                        className={ isErrorClassName(touched, errors, 'sex') }
                                        name="sex"
                                        value={ sex.female }
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
                                        <option value={ jobs.designer }>{ jobs.designer }</option>
                                        <option value={ jobs.developer }>{ jobs.developer }</option>
                                        <option value={ jobs.writer }>{ jobs.writer }</option>
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

                                <button className="app-btn" type="submit">{ btnText }</button>
                            </Form>
                        )
                    }}
                </Formik>
            );
        }
    }

    return (
        <section>
            <>
                <h1>This is student registration form</h1>
                { test() }
            </>
        </section>
    )
}