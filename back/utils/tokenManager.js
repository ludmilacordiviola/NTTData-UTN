import jwt from "jsonwebtoken";

export const generateToken = (id) => {
    const expiresIn= 60 * 15;
    try {
        const token = jwt.sign({id}, process.env.JWT_SECRET, { expiresIn });
        return {token, expiresIn};
    } catch (e) {
        console.error(e.name + ': ' + e.message);
        throw new Error("Fallo de la aplicacion");
    }
}

export const tokenVerificationErrors = {
    "invalid signature": "La firma del JWT no es válida",
    "jwt expired": "JWT expirado",
    "invalid token": "Token no válido",
    "No Bearer": "Utiliza formato Bearer",
    "jwt malformed": "JWT formato no válido",
};