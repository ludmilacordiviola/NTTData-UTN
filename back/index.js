import "dotenv/config";
import "./database/connection.js";
import express from "express";

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Bienvenido a la API");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("http://localhost:" + PORT));