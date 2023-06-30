import {Router} from "express";
import {StudentControllers} from "../controllers/student.controller";

export const router = Router();
router.get("/", (req, res) => {
    res.redirect('/list')
});
router.get("/create",StudentControllers.newStudent);
router.post("/create",StudentControllers.createStudent);
router.get("/list",StudentControllers.listStudent);
router.post("/list",StudentControllers.listStudent);
router.get("/update/:id",StudentControllers.getUpdateStudent);
router.post("/update/:id",StudentControllers.updateStudent);
router.get("/delete/:id",StudentControllers.deleteStudent);
