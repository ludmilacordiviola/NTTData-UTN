import { Syllabus } from "../models/Syllabus.js";

export const register = async (req, res) => {
    try {
        const syllabus = new Syllabus(req.body);
            await syllabus.save();

        return res.status(201).json({ok: true});

    } catch (error) {
        return res.status(500).json({ error: "Falla la aplicacion en el register de syllabus" });
    }
};