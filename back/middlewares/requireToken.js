import jwt from "jsonwebtoken";
import { tokenVerificationErrors } from "../utils/tokenManager";

export const requireToken = (req, res, next) => {
    try {
        let token = req.headers?.authorization;
        if(!token) return res.status(401).json({ error: "Fallo el token de la aplicacion" });
        
        token= token.split(" ")[1];
       
        const { id } = jwt.verify(token, process.env.JWT_SECRET);
        req.id = id;

        next();
    } catch (e) {
        return res
            .status(401)
            .json({ error: tokenVerificationErrors[e.message] });
    }
}