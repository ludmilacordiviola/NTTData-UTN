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


//validacion REGISTER
//aqui deberian ir todos los valores del registro? nombre, apellido, email y contraseña? 
export const bodyDataUserValidator = [
    body("names", "No es un nombre")
        .exists()
        .matches(/^[A-Za-z]+$/)
        .trim()
        .isLength({min:3, max: 40}),
    body("surname", "No es un apellido")
        .exists()
        .matches(/^[A-Za-z]+$/)
        .trim()
        .isLength({min:3, max: 40}),
    body("birthDate", "Fecha incorrecta, por favor complete nuevamente la fecha de nacimiento")
        .exists()
        .matches(/^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/)
        .trim(),
        //.isBefore(new Date()), hacer validacion custom
        validationResultExpress
];
export const bodyRegisterValidator = [
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
    validationResultExpress
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
    validationResultExpress
];










