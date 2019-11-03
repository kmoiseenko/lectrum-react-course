import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Navigation
import { book } from './../../navigation/book';

export const Student = () => {
    const {
        firstName,
        surname,
        age,
        email,
        sex,
        speciality
    } = useSelector((state) => state.student);

    const studentJSX = () => {
        return (
            <>
                <h1>Student profile</h1>
                <p>Student first name: { firstName }</p>
                <p>Student surname: { surname }</p>
                <p>Student age: { age }</p>
                <p>Student email: { email }</p>
                <p>Student sex: { sex }</p>
                <p>Student speciality: { speciality }</p>
            </>
        )
    }

    const studentIsNotCreatedJSX = () => {
        return (
            <p>
                Студент еще не создан, вы можете создать студента по этому&nbsp;
                <Link to={ book.studentRegistration}>адресу</Link>
            </p>
        )
    }

    const pageContentJSX = () => {
        return firstName ? studentJSX() : studentIsNotCreatedJSX();
    }

    return (
        pageContentJSX()
    )
}