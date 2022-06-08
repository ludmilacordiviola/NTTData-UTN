import { generateToken } from "../utils/tokenManager";

export const refreshToken = (req, res) => {
    try {
        const { token, expiresIn } = generateToken(req.uid);
        return res.json({ token, expiresIn });
    } catch (error) {
        return res.status(500).json({ error: "error de server" });
    }
};