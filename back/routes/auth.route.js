import { Router } from "express";
import { 
    login, 
    register, 
    refreshToken, 
    logout, 
    getdataUser, 
    setdataUser,
    setUserSyllabus,
    getUserSyllabus,
    getUserEmail,
    setUserEmail,
    userPassword
} from "../controllers/auth.contoller.js";
import { requireRefreshToken } from "../middlewares/requireRefreshToken.js";
import { requireToken, requireBodyToken } from "../middlewares/requireToken.js";
import { 
    bodyEmailValidator,
    bodyPasswordValidator, 
    bodyDataUserValidator 
} from "../middlewares/validatorUser.js";

const router = Router();

router.post("/register", 
            bodyEmailValidator,
            bodyPasswordValidator,
            bodyDataUserValidator,
            register
);

router.post("/login",
            bodyEmailValidator,
            bodyPasswordValidator,
            login       
);

router.post("/refresh", requireRefreshToken, refreshToken);

router.get("/dataUser",requireToken, getdataUser);

router.get("/userSallybus", requireBodyToken, getUserSyllabus);

router.get("/userEmail", requireBodyToken, getUserEmail);

router.get("/logout", logout);

router.patch("/userEmail", requireRefreshToken, bodyEmailValidator, setUserEmail);

router.patch("/userPassword", requireRefreshToken, bodyPasswordValidator, userPassword);

router.patch("/dataUser", requireBodyToken, bodyDataUserValidator, setdataUser);

router.patch("/userSallybus", requireBodyToken, setUserSyllabus);

export default router;