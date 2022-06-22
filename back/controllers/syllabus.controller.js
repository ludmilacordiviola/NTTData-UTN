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

export const syllabusHead = async (req, res) => {
    try {
        const response = await Syllabus.find({"status": true}, {"_id":1, "title":1, "description":1});
        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json({ error: "Falla la aplicacion en el register de syllabus Head" });
    }
}

export const syllabusQuestionnarie = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Syllabus.findById({"_id": id, "status": true}, {"questionnarie":1});
        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json({ error: "Falla la aplicacion en el register de syllabus Questionnarie" });
    }
}