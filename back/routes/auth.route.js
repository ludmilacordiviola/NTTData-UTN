import { Router } from "express";
import { 
    login, 
    register, 
    refreshToken, 
    getLogout, 
    getDataUser, 
    patchDataUser,
    patchSyllabus,
    getUserSyllabus,
    getUserEmail,
    patchEmail,
    patchPassword
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

router.get("/getDataUser",requireToken, getDataUser);

router.get("/getUserSallybus", requireBodyToken, getUserSyllabus);

router.get("/getUserEmail", requireBodyToken, getUserEmail);

router.get("/getLogout", getLogout);

router.patch("/patchEmail", requireRefreshToken, bodyEmailValidator, patchEmail);

router.patch("/patchPassword", requireRefreshToken, bodyPasswordValidator, patchPassword);

router.patch("/patchDataUser", requireBodyToken, bodyDataUserValidator, patchDataUser);

router.patch("/patchSallybus", requireBodyToken, patchSyllabus);

export default router;