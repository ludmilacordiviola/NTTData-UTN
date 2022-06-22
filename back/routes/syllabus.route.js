import { Router } from "express";
import { register, syllabusHead, syllabusQuestionnarie } from "../controllers/syllabus.controller.js";
import { bodySyllubus } from "../middlewares/validatorSyllabus.js";

const router = Router();

router.post("/", bodySyllubus, register);
router.get("/", syllabusHead);
router.get("/:id", syllabusQuestionnarie);

export default router;