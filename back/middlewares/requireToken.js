import jwt from "jsonwebtoken";

export const requireToken = (req, res, next) => {
    try {
        let token = req.headers?.authorization;
        if(!token) return res.status(401).json({ error: "Fallo del token de la aplicacion" });
        
        token= token.split(" ")[1];
       
        const { uid } = jwt.verify(token, process.env.JWT_SECRET);
        req.uid = uid;

        next();
    } catch (e) {
        console.error(e.name + ': ' + e.message);
        throw new Error("Fallo de la aplicacion");
    }
}