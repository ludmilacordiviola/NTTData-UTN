import { Router } from "express";
import { 
    login, 
    register, 
    refreshToken, 
    logout, 
    getdataUser, 
    setdataUser,
    setUserSyllabus
} from "../controllers/auth.contoller.js";
import { requireRefreshToken } from "../middlewares/requireRefreshToken.js";
import { requireToken, requireBodyToken } from "../middlewares/requireToken.js";
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

router.get("/dataUser",requireToken, getdataUser);

router.patch("/dataUser", requireBodyToken, bodyDataUserValidator, setdataUser);

router.patch("/userSallybus", setUserSyllabus);

router.post("/refresh", requireRefreshToken, refreshToken);

router.get("/logout", logout);

export default router;