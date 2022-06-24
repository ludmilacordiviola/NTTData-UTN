import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

//revisar schema
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
    status: {
        type: Boolean,
        default: true
    },
    syllabus:[{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Syllabus",
                required: false,
                trim: true
    }]
})

userSchema.pre("save", async function (next){
    const user = this;

    if (!user.isModified("password")) return next();

    try{
        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash(user.password, salt);
        next();
    }catch(e){
        console.error(e.name + ': ' + e.message);
        throw new Error("Fallo el hash de contraseña");
    }
});

userSchema.pre("findOneAndUpdate", async function (next){
    const user = this.getUpdate();

    try{
        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash(user.password, salt);
        console.log(22)
        next();
    }catch(e){
        console.error(e.name + ': ' + e.message);
        throw new Error("Fallo el hash de contraseña");
    }
});

userSchema.methods.comparePassword = async function (canditatePassword) {
    return await bcryptjs.compare(canditatePassword, this.password);
};

export const User = mongoose.model("User", userSchema);