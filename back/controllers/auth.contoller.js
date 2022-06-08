import { User } from "../models/User.js";
import { generateRefreshToken, generateToken, tokenVerificationErrors } from "../utils/tokenManager.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const {names, surname, birthDate, email, password} = req.body;
        
        let user = await User.findOne({ email });
            if (user) return res.status(400).json({ error: "Su email ya se encuentra registrado" });

        user = new User({names, surname, birthDate, email, password});
            await user.save();

        const {token, expiresIn}= generateToken(user.id, res);
        generateRefreshToken(user.id, res)
        
        return res.status(201).json({token, expiresIn});
    } catch (e) {
        return res.status(500).json({ error: "Falla de la aplicacion" });
    }
};

export const login = async (req, res) =>{
    try {
        const {email, password} = req.body;

        const user = await User.findOne({ email });
            if (!user) return res.status(400).json({ error: "Su email no se encuentra registrado" });
        
        const respondPassword = await User.comparePassword(password);
            if (!respondPassword) return res.status(400).json({ error: "Email o Contraseña incorrectos, intente nuevamente" });
            
        const {token, expiresIn}= generateToken(user.id, res);
        generateRefreshToken(user.id, res)
        
        return res.status(201).json({token, expiresIn});
    } catch (e) {
        console.log(e)
        return res.status(500).json({ error: "Falla de la aplicacion" });
    }
}

export const logout = (req, res) => {
    res.clearCookie("refreshToken");
    res.json({ ok: true });
};

export const refreshToken = (req, res) => {
    try {
        const refreshTokenCookies = req.cookies.refreshToken;
        if(!refreshTokenCookies) return res.status(500).json({ error: "Falla en la regeneracion del token" });
        
        const { id } = jwt.verify(refreshTokenCookies, process.env.JWT_REFRESH);
        const {token, expiresIn}= generateToken(id, res);
 
        return res.status(201).json({token, expiresIn});
    } catch (e) {
        return res
            .status(401)
            .json({ error: tokenVerificationErrors[e.message] });
    }
};