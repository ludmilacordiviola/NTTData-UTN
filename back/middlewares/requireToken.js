import jwt from "jsonwebtoken";
import { tokenVerificationErrors } from "../utils/tokenManager.js";

export const requireToken = (req, res, next) => {
    try {
        let token = req.headers?.authorization;
        if(!token) return res.status(401).json({ error: "Fallo el token de la aplicacion" });
        
        token = token.split(" ")[1];
        const { id } = jwt.verify(token, process.env.JWT_SECRET);

        req.id = id;
        next();

    } catch (error) {
        console.log(error.message);
        return res
            .status(401)
            .send({ error: tokenVerificationErrors[error.message] });
    }
};