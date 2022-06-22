/*
Aqui deberian ir los controllers de usuario como registro, login, refresh y logout //ESTAN EN AUTH COMPLETOS!!
*/

import { Syllabus } from "../models/Syllabus.js";

export const register = async (req, res) => {
    try {

        const {title, description, questionnarie} = req.body;

        syllabus = new Syllabus({title, description, questionnarie});
/*         console.log(questionnarie);
 */
            await syllabus.save();
        

        return res.status(201).json({ok: true});

    } catch (error) {
        return res.status(500).json({ error: "Falla la aplicacion en el register de syllabus" });
    }
};