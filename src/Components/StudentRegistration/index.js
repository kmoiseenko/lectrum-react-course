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
                speciality: ''
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
    const formErrorMessages = {
        required: 'This field is required',
        age: 'Age must be more then 6 and less then 60',
        email: 'This is not a valid email'
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
            .required(formErrorMessages.required),
        surname: Yup.string()
            .required(formErrorMessages.required),
        age: Yup.number()
            .min(6, formErrorMessages.age)
            .max(60, formErrorMessages.age),
        email: Yup.string()
            .email(formErrorMessages.email)
            .required(formErrorMessages.required),
        sex: Yup.string()
            .required(formErrorMessages.required),
        speciality: Yup.string()
            .oneOf([
                designer,
                developer,
                writer
            ])
            .required(formErrorMessages.required)
      });

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
                                    className={ touched.firstName && errors.firstName ? 'error' : null }
                                    htmlFor="firstName"
                                >
                                    First name
                                </label>
                                <Field
                                    type="text"
                                    id="firstName"
                                    className={ touched.firstName && errors.firstName ? 'error' : null }
                                    name="firstName"
                                    placeholder="Enter your first name"
                                />
                                <ErrorMessage name="firstName" />
                            </div>
                            
                            <div>
                                <label 
                                    className={ touched.surname && errors.surname ? 'error' : null }
                                    htmlFor="surname"
                                >
                                    Surname
                                </label>
                                <Field
                                    type="text"
                                    id="surname"
                                    className={ touched.surname && errors.surname ? 'error' : null }
                                    name="surname"
                                    placeholder="Enter your surname"
                                />
                                <ErrorMessage name="surname" />
                            </div>

                            <div>
                                <label
                                    className={ touched.age && errors.age ? 'error' : null }
                                    htmlFor="age"
                                >
                                    Age
                                </label>
                                <Field
                                    type="number"
                                    id="age"
                                    className={ touched.age && errors.age ? 'error' : null }
                                    name="age"
                                    placeholder="Enter your age"
                                />
                                <ErrorMessage name="age" />
                            </div>

                            <div>
                                <label
                                    className={ touched.email && errors.email ? 'error' : null }
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <Field
                                    type="email"
                                    id="email"
                                    className={ touched.email && errors.email ? 'error' : null }
                                    name="email"
                                    placeholder="Enter your email"
                                />
                                <ErrorMessage name="email" />
                            </div>

                            <div>
                                <label
                                    className={ touched.sex && errors.sex ? 'error' : null }
                                >
                                    Choose your sex
                                </label>
                                <label htmlFor="male">Male</label>
                                <Field
                                    type="radio"
                                    id="male"
                                    className={ touched.sex && errors.sex ? 'error' : null }
                                    name="sex"
                                    value="Male"
                                />
                                <label htmlFor="female">Female</label>
                                <Field
                                    type="radio"
                                    id="female"
                                    className={ touched.sex && errors.sex ? 'error' : null }
                                    name="sex"
                                    value="Female"
                                />
                                <ErrorMessage name="sex" />
                            </div>

                            <div>
                                <label
                                    className={ touched.speciality && errors.speciality ? 'error' : null }
                                    htmlFor="speciality"
                                >
                                    Choose your speciality
                                </label>
                                <Field
                                    as="select"
                                    name="speciality"
                                    id="speciality"
                                    className={ touched.speciality && errors.speciality ? 'error' : null }
                                >
                                    <option value="">Choose your speciality</option>
                                    <option value={ designer }>{ designer }</option>
                                    <option value={ developer }>{ developer }</option>
                                    <option value={ writer }>{ writer }</option>
                                </Field>
                                <ErrorMessage name="speciality" />
                            </div>

                            <button className="app-btn" type="submit">{ textValues.btn }</button>
                        </Form>
                    )
                }}
            </Formik>
        </section>
    )
}