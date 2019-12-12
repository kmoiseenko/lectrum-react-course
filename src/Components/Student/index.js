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
            <section id="test__student-found">
                <h1>Student profile</h1>
                <ul id="test__student-info-list">
                    <li><p>Student first name: {firstName}</p></li>
                    <li><p>Student surname: {surname}</p></li>
                    <li><p>Student age: {age}</p></li>
                    <li><p>Student email: {email}</p></li>
                    <li><p>Student sex: {sex}</p></li>
                    <li><p>Student speciality: {speciality}</p></li>
                </ul>
            </section>
        )
    }

    const studentIsNotCreatedJSX = () => {
        return (
            <section id="test__student-not-found">
                <p>
                    Студент еще не создан, вы можете создать студента по этому&nbsp;
                    <Link to={book.studentRegistration}>адресу</Link>
                </p>
            </section>
        )
    }

    const managePageContentJSX = () => {
        return firstName ? studentJSX() : studentIsNotCreatedJSX();
    }

    return (
        managePageContentJSX()
    )
}