import mongoose from "mongoose";

const EmploySchema = new mongoose.Schema({
    title: String ,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
});

export const Employ = mongoose.model('Employ', EmploySchema);