import "dotenv/config";
import "./database/connection.js";
import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.route.js";
import linkRouter from "./routes/link.route.js";
import syllabus from "./routes/syllabus.route.js";
import redirectRouter from "./routes/redirect.route.js";

const app = express();
//estos origenes deberian tener el url del puerto ej: http://127.0.0.1:5000 para autorizar los cors
const whiteList = [process.env.ORIGIN1, process.env.ORIGIN2];//const para comparar los dominios que vamos a autorizar
//estos origenes luego seran nuestro front VUE o REACT o ambos

app.use(
    cors({
        origin: function (origin, callback) { //origin desde donde se hace la solicitud, el dominio
            if (!origin || whiteList.includes(origin)) {
                return callback(null, origin); //los call por sta<ndar pasan primero los errores, null
            }
            return callback(
                "Error de CORS origin: " + origin + " No autorizado!"
            );
        },
    })
);

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/links", linkRouter);
app.use("/api/v1/syllabus", syllabus);
// ejemplo back redirect (opcional)
app.use("/", redirectRouter);

app.use("*", (req, res)=>{
    return res.status(201).json({
        "ok": "convert readme a html con javascript"
    });
});
//PUERTO
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("http://localhost:" + PORT + "/api/v1/auth"));