import * as Yup from 'yup';

export const { 
    formErrorRequired,
    formErrorName,
    formErrorSurname,
    formErrorAge,
    formErrorEmail,
    formErrorPasswordLength,
    formErrorPasswordDigitsLength,
    formErrorPasswordLettersLength,
    formErrorPasswordsMustMacth
} = {
    formErrorRequired: 'This field is required',
    formErrorName: 'Name filed length must be more then 2 and less then 40',
    formErrorSurname: 'Surname field length must be more then 2 and less then 40',
    formErrorAge: 'Age must be more then 6 and less then 60',
    formErrorEmail: 'This is not a valid email',
    formErrorPasswordLength: 'Password must have at least 10 symbols',
    formErrorPasswordDigitsLength: 'Password must have at least 3 digits',
    formErrorPasswordLettersLength: 'Password must have letters too',
    formErrorPasswordsMustMacth: 'Passwords must match'
};

export const jobs = {
    designer: 'designer',
    developer: 'developer',
    writer: 'writer'
};

export const sex = {
    male: 'male',
    female: 'female'
};

export const valueLength = {
    firstNameMin: 2,
    firstNameMax: 40,
    surnameMin: 2,
    surnameMax: 40,
    ageMin: 6,
    ageMax: 60,
    passwordMin: 10,
    passwordMinDigitLength: 3
};

export const passwordRegExp = {
    general: new RegExp(/[^A-Za-z]/g),
    digit: new RegExp(/[^0-9]/g)
};

export const studentSchema = Yup.object().shape({
    firstName: Yup.string()
        .required(formErrorRequired)
        .min(valueLength.firstNameMin, formErrorName)
        .max(valueLength.firstNameMax, formErrorName),
    surname: Yup.string()
        .required(formErrorRequired)
        .min(valueLength.surnameMin, formErrorSurname)
        .max(valueLength.surnameMax, formErrorSurname),
    age: Yup.number()
        .min(valueLength.ageMin, formErrorAge)
        .max(valueLength.ageMax, formErrorAge),
    email: Yup.string()
        .email(formErrorEmail)
        .required(formErrorRequired),
    sex: Yup.string()
        .required(formErrorRequired)
        .oneOf([
            sex.male,
            sex.female,
        ]),
    speciality: Yup.string()
        .oneOf([
            jobs.designer,
            jobs.developer,
            jobs.writer
        ])
        .required(formErrorRequired),
    password: Yup.string()
        .required(formErrorRequired)
        .min(valueLength.passwordMin, formErrorPasswordLength)
        .test('passwordDigitCheck', formErrorPasswordDigitsLength, (item) => {
            if (item) {
                return item.replace(passwordRegExp.digit, '').length >= valueLength.passwordMinDigitLength ? true : false;
            }
        })
        .matches(passwordRegExp.general, formErrorPasswordLettersLength),
    confirmPassword: Yup.string()
        .required(formErrorRequired)
        .oneOf([
            Yup.ref('password')
        ], formErrorPasswordsMustMacth)
});