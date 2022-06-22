import { body, param } from "express-validator";
import { validationResultExpress } from "../middlewares/validationResultExpress.js";
import axios from "axios";

export const paramLinkValidator = [
    param("id", "Formato no válido (expressValidator)")
        .trim()
        .notEmpty()
        .escape(),
    validationResultExpress,
]; 

export const bodyTextValidator = (bodys, text) =>{
    return [
        body(bodys, `Complete el ${text}`)
            .exists()
            .matches(/^[A-Za-z]+$/)
            .trim()
            .isLength({min:3, max: 40})
    ]
};

//validacion REGISTER
//aqui deberian ir todos los valores del registro? nombre, apellido, email y contraseña? 
export const bodyRegisterValidator = [
    body("names", "No es un nombre")
        .trim()
        .notEmpty()
        .exists(),
    body("surname", "No es un apellido")
        .trim()
        .notEmpty()
        .exists(),
    body("birthDate", "Fecha incorrecta, por favor complete nuevamente la fecha de nacimiento")
        .exists()
        .matches(/^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/)
        .trim()
        /*.isBefore(new Date().toLocaleDateString())//TODO*/ ,
    body("email", "Email o contraseña incorrectos, por favor intente de nuevo")
        .exists()
        .trim()
        .isLength({min:8, max: 320})
        .isEmail()
        .normalizeEmail(),
    body("password", "Contraseña o email incorrectos, por favor intente de nuevo")
        .trim()
        .isLength({ min: 6 })
        .isStrongPassword(),
    body("password", "Formato de password incorrecta")
        .custom(
            (value, { req }) => {
                if (value !== req.body.repassword) {
                    throw new Error("No coinciden las contraseñas");
                }
                return value;
            }
        ),
    validationResultExpress,
];

//validacion LOGIN, solo valores email y contraseña
export const bodyLoginValidator = [
    body("email", "Formato de email incorrecto")
        .trim()
        .isEmail()
        .normalizeEmail(),
    body("password", "Mínimo 6 carácteres")
        .trim()
        .isLength({ min: 6 }),
    validationResultExpress,
];

//validaciones LINK
export const bodyLinkValidator = [
    body("longLink", "formato link incorrecto")
        .trim()
        .notEmpty()
        .custom(async (value) => {
            try {
                if (!value.startsWith("https://")) {
                    value = "https://" + value;
                }
                await axios.get(value);
                return value;
            } catch (error) {
                // console.log(error);
                throw new Error("not found longlink 404");
            }
        }),
    validationResultExpress,
];













/*
//validar fecha de nacimiento?
export const bodyBirthDateValidator = [
body("birthDate", "Fecha incorrecta, por favor complete nuevamente la fecha de nacimiento")
    .exists()
    .matches(/^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/)
    .trim()
    //.isBefore(new Date().toLocaleDateString())//TODO
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
]; */