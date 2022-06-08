import { body } from "express-validator";

export const bodyTextValidator = (bodys, text) =>{
    return [
        body(bodys, `Complete el ${text}`)
            .exists()
            .matches(/^[A-Za-z]+$/)
            .trim()
            .isLength({min:3, max: 40})
    ]
}

export const bodyBirthDateValidator = [
    body("birthDate", "Fecha incorrecta, por favor complete nuevamente la fecha de nacimiento")
        .exists()
        .matches(/^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/)
        .trim()
        .isBefore(new Date().toLocaleDateString())
];

export const bodyEmailValidator = [
    body("email", "Email o contraseña incorrectos, por favor intente de nuevo")
        .exists()
        .trim()
        .isLength({min:8, max: 320})
        .isEmail()
        .normalizeEmail()
];

export const bodyPasswordValidator = [
    body("password", "Contraseña o email incorrectos, por favor intente de nuevo")
        .isStrongPassword()
];