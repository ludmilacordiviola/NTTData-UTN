import jwt from "jsonwebtoken";

export const generateToken = (id, res) => {
    const expiresIn= 60 * 15;
    try {
        const token = jwt.sign({id}, process.env.JWT_SECRET, { expiresIn });
        return {token, expiresIn};
    } catch (e) {
        return res
            .status(401)
            .json({ error: tokenVerificationErrors[e.message] });
    }
}

export const generateRefreshToken = (id, res) =>{
    const expiresIn = 60 * 60 * 24 * 30;
    try {
        const refreshToken = jwt.sign({id}, process.env.JWT_REFRESH, { expiresIn });
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: !(process.env.MODO === "developer"),
            expires: new Date(Date.now() + expiresIn * 1000)
        });
        
    } catch (e) {
        return res
            .status(401)
            .json({ error: tokenVerificationErrors[e.message] });
    }
}

export const tokenVerificationErrors = {
    "invalid signature": "La firma del JWT no es válida",
    "jwt expired": "JWT expirado",
    "invalid token": "Token no válido",
    "No Bearer": "Utiliza formato Bearer",
    "jwt malformed": "JWT formato no válido",
};