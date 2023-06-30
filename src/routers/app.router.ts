import {Router} from "express";
import {StudentControllers} from "../controllers/student.controller";

export const router = Router();
router.get("/", (req, res) => {
    res.redirect('/list')
});
router.get("/create",StudentControllers.getCreateNewStudentPage);
router.post("/create",StudentControllers.createNewStudent);
router.get("/list",StudentControllers.getListStudentsPage);
router.post("/list",StudentControllers.getListStudentsPage);
router.get("/update/:id",StudentControllers.getUpdateStudentPage);
router.post("/update/:id",StudentControllers.updateStudent);
router.get("/delete/:id",StudentControllers.deleteStudent);
