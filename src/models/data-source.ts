import mongoose from "mongoose";

export class DataBase {
    static async connectDB() {
        let DB_URL = 'mongodb://127.0.0.1:27017/student_manager'
        return await mongoose.connect(DB_URL)
    }
}