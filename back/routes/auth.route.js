import { Router } from "express";
import { login, register, refreshToken, logout, infoUser} from "../controllers/auth.contoller.js";
import { requireRefreshToken } from "../middlewares/requireRefreshToken.js";
import { requireToken } from "../middlewares/requireToken.js";
import { validationResultExpress } from "../middlewares/validationResultExpress.js";
import { bodyTextValidator, bodyRegisterValidator, bodyLoginValidator, } from "../middlewares/validatorUser.js";
//import { bodyTextValidator, bodyBirthDateValidator, bodyEmailValidator, bodyPasswordValidator } from "../middlewares/validatorUser.js";

const router = Router();

router.post("/register", 
            bodyTextValidator,
            /* bodyTextValidator("names", "nombre"),
            bodyTextValidator("surname", "apellido"), */
            bodyRegisterValidator
            /* bodyBirthDateValidator,
            bodyEmailValidator,
            bodyPasswordValidator */, 
            validationResultExpress,
            register
);

router.post("/login",
            bodyLoginValidator,
            /* bodyEmailValidator,
            bodyPasswordValidator, */
            validationResultExpress,
            login       
);

router.get("/protected", requireToken, infoUser);

router.get("/logout", logout);

router.post("/refresh", requireRefreshToken, refreshToken);

export default router;