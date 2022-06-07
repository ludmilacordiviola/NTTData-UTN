import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    names: {
        type: String,
        required: [true, "Debe completar el campo nombre"],
        min: [3, "El nombre debe tener mas de 3 caracteres"],
        max: [40, "Su nombre supera el maximo de caracteres permitidos"],
        trim: true
    },
    surname: {
        type: String,
        required: [true, "Debe completar el campo apellido"],
        min: [3, "El apellido debe tener mas de 3 caracteres"],
        max: [40, "Su apellido supera el maximo de caracteres permitidos"],
        trim: true
    },
    birthDate: {
        type: Date,
        required: [true, "Debe completar su fecha de nacimiento"],
        validate: {
            validator: () => Promise.resolve(date => {
                date.toLocaleDateString() < new Date().toLocaleDateString();
            }),
            message: 'Fecha de nacimiento incorrecta'
        }
    },
    email: {
        type: String,
        required: [true, "Debe completar el campo email"],
        min: [8, "El email debe tener mas de 3 caracteres"],
        max: [320, "Su email supera el maximo de caracteres permitidos"],
        unique: [true, "Su email ya se encuentra registrado"],
        index: { unique: true },
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Debe completar el campo contraseña"]
    },
    dateCreated: {
        type: Date,
        default: new Date()
    },
    estate: {
        type: Boolean,
        default: true
    },
    Questionnaire: [
        {
            ID: {
                type: String,
                required: [true, "Falta el ID"],
                min: [20],
                max: [30],
                trim: true
            },
            TitleInglish: {
                type: String,
                required: [true, "Falta el Title"],
                min: [3],
                max: [40],
                trim: true
            }
        }
    ]
})

userSchema.pre("save", async function (next){
    const user = this;

    if (!user.isModified("password")) return next();

    try{
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        next();
    }catch(e){
        console.error(e.name + ': ' + e.message);
        throw new Error("Fallo el has de contraseña");
    }
});

export const User = mongoose.model("User", userSchema);