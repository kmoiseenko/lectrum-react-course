import React from 'react';
import { Formik, Form, Field } from 'formik';

export const StudentRegistration = () => {
    const initialValues = {
        firstName: '',
        surname: '',
        age: '',
        email: '',
        sex: '',
        speciality: ''
    }

    const handleFormSubmit = (values) => {
        console.log(values);
        alert('Форма заполнена');
    }

    return (
        <section>
            <h1>This is student registration form</h1>

            <Formik
                initialValues={ initialValues }
                onSubmit={ handleFormSubmit }
            >
                <Form>
                    <div>
                        <label htmlFor="firstName">First name</label>
                        <Field
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Enter your first name"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="surname">Surname</label>
                        <Field
                            type="text"
                            id="surname"
                            name="surname"
                            placeholder="Enter your surname"
                        />
                    </div>

                    <div>
                        <label htmlFor="age">Age</label>
                        <Field
                            type="number"
                            id="age"
                            name="age"
                            placeholder="Enter your age"
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your Email"
                        />
                    </div>

                    <div>
                        <label>Choose your sex</label>
                        <label htmlFor="male">Male</label>
                        <Field
                            type="radio"
                            id="male"
                            name="sex"
                            value="Male"
                        />
                        <label htmlFor="female">Female</label>
                        <Field
                            type="radio"
                            id="female"
                            name="sex"
                            value="Female"
                        />
                    </div>

                    <div>
                        <label htmlFor="speciality">Choose your speciality</label>
                        <Field as="select" name="speciality" id="speciality">
                            <option disabled>Choose your speciality</option>
                            <option value="designer">Designer</option>
                            <option value="developer">Developer</option>
                            <option value="writer">Writer</option>
                        </Field>
                    </div>

                    <button className="app-btn" type="submit">Submit</button>
                </Form>
            </Formik>
        </section>
    )
}