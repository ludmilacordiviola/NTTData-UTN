import { Router } from "express";
import { register } from "../controllers/syllabus.controller.js";
import { bodySyllubus } from "../middlewares/validatorSyllabus.js";

const router = Router();

router.post("/register", bodySyllubus, register);
router.get("/logout");

export default router;