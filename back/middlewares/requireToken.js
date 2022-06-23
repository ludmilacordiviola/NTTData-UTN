import jwt from "jsonwebtoken";
import { tokenVerificationErrors } from "../utils/tokenManager.js";

export const requireToken = (req, res, next) => {
    try {
        let token = req.headers?.authorization;

        if (!token) throw new Error("No Bearer");

        token = token.split(" ")[1];
        const { uid } = jwt.verify(token, process.env.JWT_SECRET);

        req.uid = uid;

        next();
    } catch (error) {
        console.log(error.message);
        return res
            .status(401)
            .send({ error: tokenVerificationErrors[error.message] });
    }
};

export const requireBodyToken = (req, res, next) => {
    try {
        let {token} = req.body;
        if(!token) return res.status(401).json({ error: "Fallo el token de la aplicacion" });
       
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