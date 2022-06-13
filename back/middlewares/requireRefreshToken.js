import { tokenVerificationErrors } from "../utils/tokenManager.js";
import jwt from "jsonwebtoken";

export const requireRefreshToken = (req, res, next) =>{
    try {
        const refreshTokenCookies = req.cookies.refreshToken;
        if(!refreshTokenCookies) return res.status(500).json({ error: "Falla en la regeneracion del token" });
        
        const { id } = jwt.verify(refreshTokenCookies, process.env.JWT_REFRESH);
        req.id = id;
        next();
    } catch (e) {
        return res
            .status(401)
            .json({ error: tokenVerificationErrors[e.message] });
    }
}