import { User } from "../models/User.js";
import { generateRefreshToken, generateToken } from "../utils/tokenManager.js";

export const register = async (req, res) => {
    const {names, surname, birthDate, email, password} = req.body;
    try {
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
    const {email, password} = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: "Su email no se encuentra registrado" });
        const respondPassword = await User.comparePassword(password);
        if (!respondPassword) return res.status(400).json({ error: "Email o Contraseña incorrectos, intente nuevamente" });

        const {token, expiresIn}= generateToken(user.id, res);
        generateRefreshToken(user.id, res)
        return res.status(201).json({token, expiresIn});
    } catch (e) {
        return res.status(500).json({ error: "Falla de la aplicacion" });
    }
}