import * as Yup from 'yup';

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

export const jobs = {
    designer: 'designer',
    developer: 'developer',
    writer: 'writer'
};

export const sex = {
    male: 'male',
    female: 'female'
}

export const studentSchema = Yup.object().shape({
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
        .min(10, formErrorPasswordLength)
        .test('passwordDigitCheck', formErrorPasswordDigitsLength, (item) => {
            if (item) {
                return item.replace(/[^0-9]/g, '').length >= 3 ? true : false;
            }
        })
        .matches(/[^A-Za-z]/g, formErrorPasswordLettersLength),
    confirmPassword: Yup.string()
        .required(formErrorRequired)
        .oneOf([
            Yup.ref('password')
        ], formErrorPasswordsMustMacth)
});