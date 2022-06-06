import { Router } from "express";
import { register } from "../controllers/auth.contoller.js";
import { body } from "express-validator";
import { validationResultExpress } from "../middlewares/validationResultExpress.js";

const router = Router();

router.post("/register", [
    body("name", "Complete el nombre")
        .exists()
        .matches(/^[A-Za-z]+$/)
        .trim()
        .isLength({min:3, max: 40}),
    body("surname", "Complete el apellido")
        .exists()
        .matches(/^[A-Za-z]+$/)
        .trim()
        .isLength({min:3, max: 40}),
    body("birthDate", "Fecha incorrecta, por favor complete nuevamente la fecha de nacimiento")
        .exists()
        .matches(/^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/)
        .trim()
        .isBefore(new Date().toLocaleDateString()),
    body("email", "Email o contraseña incorrectos, por favor intente de nuevo")
        .exists()
        .trim()
        .isLength({min:8, max: 320})
        .isEmail()
        .normalizeEmail(),
    body("password", "Contraseña o email incorrectos, por favor intente de nuevo")
        .isStrongPassword()
], 
    validationResultExpress
    ,register);

export default router;