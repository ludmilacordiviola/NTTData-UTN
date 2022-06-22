import { body, param } from "express-validator";
import { validationResultExpress } from "../middlewares/validationResultExpress.js";

export const bodySyllubus = [
    body("title", "No es un titulo")
        .exists()
        /* .matches(/^[A-Za-z]+$/) */
        .trim()
        .isLength({min:3, max: 40}),
    body("description", "No es una descripcion")
        .exists()
        /* .matches(/^[A-Za-z]+$/) */
        .trim()
        .isLength({min:3, max: 120}),
    body("questionnarie.*.question", "No es una pregunta")
        .exists()
        /* .matches(/^[A-Za-z]+$/) */
        .trim()
        .isLength({min:3, max: 120}),
    validationResultExpress
    
];



