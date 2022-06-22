import mongoose from "mongoose";

const syllabusSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Debe completar el tema en español"],
        min: [3, "El tema en español debe tener mas de 3 caracteres"],
        max: [50, "Su tema en español supera el maximo de caracteres permitidos"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Debe completar la descripcion en español"],
        min: [10, "La descripcion en español debe tener mas de 10 caracteres"],
        max: [120, "Su descripcion en español supera el maximo de caracteres permitidos"],
        trim: true
    },
    status: {
        type: Boolean,
        default: true
    },
    questionnarie : [
        {
            question: {
                type: String,
                required: [true, "Debe completar la pregunta en español"],
                min: [3, "La pregunta en español debe tener mas de 3 caracteres"],
                max: [60, "Su pregunta en español supera el maximo de caracteres permitidos"],
                trim: true
            },
            status: {
                type: Boolean,
                default: true
            }
        }
    ]
})

export const Syllabus = mongoose.model("Syllabus", syllabusSchema);