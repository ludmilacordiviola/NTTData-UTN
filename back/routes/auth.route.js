import { Router } from "express";
import { login, register, refreshToken, logout, dataUser, infoUser} from "../controllers/auth.contoller.js";
import { requireRefreshToken } from "../middlewares/requireRefreshToken.js";
import { requireToken } from "../middlewares/requireToken.js";
import { bodyRegisterValidator, bodyDataUserValidator } from "../middlewares/validatorUser.js";

const router = Router();

router.post("/register", 
            bodyRegisterValidator, 
            bodyDataUserValidator,
            register
);

router.post("/login",
            bodyRegisterValidator,
            login       
);

//router.get("/protected", requireToken, infoUser);

router.get("/logout", logout);

router.get("/dataUser/:id", dataUser);

router.post("/refresh", requireRefreshToken, refreshToken);

export default router;