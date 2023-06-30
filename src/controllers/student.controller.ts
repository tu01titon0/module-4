import {studentModel} from "../models/schemas/student.model";
import {classroomModel} from "../models/schemas/classroom.model"

export class StudentControllers {
    static async newStudent(req: any, res: any) {
        const classrooms = await classroomModel.find()
        res.render("create",{classrooms: classrooms, student: {}});
    }
    static async createStudent (req:any, res:any){
        try{
        const newStudent = new studentModel(req.body)
            if(newStudent){
                await newStudent.save();
                res.redirect("/list")
            } else res.render("notfound")
        } catch (error){
            res.render("notfound")
        }
    }
    static async listStudent (req:any, res:any){
        try{
            let query = {};
            if(req.body.classroom){
                query = {classroom: req.body.classroom}
            }
            let classrooms = await classroomModel.find();
            const students = await studentModel.find(query).populate({
                path: "classroom",
                select: "name",
            }).sort({pointTheoretical: 1}); //sort: sắp xếp theo điểm tăng dần
            res.render('list',{students:students, classrooms: classrooms})
        } catch (error){
            res.render("notfound")
        }
    }
    static async getUpdateStudent(req:any, res:any){
        try{
            const classrooms = await classroomModel.find();
            const studentNeedToUpdate = await studentModel.findOne ({_id: req.params.id}).populate({
                path:"classroom",
                select: "name",
            })
            if(studentNeedToUpdate){
                res.render("update",{student:studentNeedToUpdate, classrooms:classrooms})
            } else res.render("notfound")
        } catch (error){
            res.render("notfound")
        }
    }
    static async updateStudent (req:any, res:any){
        try{
            const {name, classroom, pointTheoretical, pointPractice, description, evaluated} = req.body;
            const studentNeedToUpdate = await studentModel.findOne ({_id: req.params.id});
            studentNeedToUpdate.name = name;
            studentNeedToUpdate.classroom = classroom;
            studentNeedToUpdate.pointTheoretical = pointTheoretical;
            studentNeedToUpdate.pointPractice = pointPractice;
            studentNeedToUpdate.description = description;
            studentNeedToUpdate.evaluated = evaluated;
            studentNeedToUpdate.save();
            res.redirect("/list")
        } catch (error){
            res.render("notfound")
        }
    }
    static async deleteStudent (req:any, res:any){
        await studentModel.deleteOne({_id:req.params.id})
        res.redirect("/list")
    }
}