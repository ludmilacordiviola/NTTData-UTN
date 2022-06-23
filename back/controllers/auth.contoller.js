import { User } from "../models/User.js";
import { Syllabus } from "../models/Syllabus.js";
import { generateRefreshToken, generateToken } from "../utils/tokenManager.js";

export const register = async (req, res) => {
    try {
        const {names, surname, birthDate, email, password} = req.body;
        //alternativa buscando por email
        let user = await User.findOne({ email });
            if (user) return res.status(400).json({ error: "Su email ya se encuentra registrado" });

        user = new User({names, surname, birthDate, email, password});
            await user.save();
        //generar token JWT
        const {token, expiresIn}= generateToken(user.id);
        generateRefreshToken(user.id, res)
        
        return res.status(201).json({token, expiresIn});

    } catch (error) {
        //alternativa por defecto mongoose
        if (error.code === 11000) {
            return res.status(400).json({ error: "Ya existe este usuario" });
        }
        return res.status(500).json({ error: "Falla la aplicacion en el register" });
    }
};

export const login = async (req, res) =>{
    try {
        const {email, password} = req.body;

        const user = await User.findOne({ email, "status": true });
            if (!user) 
            return res.status(400).json({ error: "Su email no se encuentra registrado" });
        
        const respondPassword = await user.comparePassword(password);
            if (!respondPassword) 
            return res.status(400).json({ error: "Email o Contraseña incorrectos, intente nuevamente" });
            
        //generar token JWT
        const {token, expiresIn}= generateToken(user.id, res);
        generateRefreshToken(user.id, res)
        
        return res.status(201).json({token, expiresIn});
    } catch (error) {
        return res.status(500).json({ error: "Falla de la aplicacion en el login" });
    }
}

export const getdataUser = async (req, res) =>{
    try {
        const user = await User.findById({"_id": req.id, "status": true}, {"names":1, "surname":1, "birthDate": 1, "syllabus": 1});
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({ error: "Falla la aplicacion en el register de get Data User" });
    }
}

export const setdataUser = async (req, res, next) =>{
    try {
        const { names,  surname, birthDate} = req.body;
        console.log(req.id)
        const user = await User.updateOne({_id: req.id}, 
            {names: names, surname: surname, birthDate: birthDate});
        return res.status(201).json({ numberModified : user.modifiedCount});
    } catch (error) {
        return res.status(500).json({ error: "Falla la aplicacion en set Data User" });
    }
}

export const setUserSyllabus = async (req, res) =>{
    try {
        const { id, syllabus} = req.body;

        const sallybus = await Syllabus.findOne({_id: syllabus})
        if (!sallybus) 
            return res.status(400).json({ error: "Su temario no se encuentra registrado" });

        const user = await User.updateOne({_id: id}, 
                {$push: { 'syllabus': syllabus }});

        return res.status(201).json({ numberModified : user.modifiedCount});
    } catch (error) {
        return res.status(500).json({ error: "Falla la aplicacion en Set User Sallybus" });
    }
}

export const refreshToken = (req, res) => {
    try {
        const {token, expiresIn} = generateToken(req.id);
        return res.status(201).json({token, expiresIn});
    } catch (error) {
        return res.status(500).json({ error: "Falla de la aplicacion en el refres token" });
    }
};

export const logout = (req, res) => {
    res.clearCookie("refreshToken");
    res.json({ ok: true });
};