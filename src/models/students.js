const { Schema, model } = require("mongoose");

const AddStudentSchema = new Schema({
   name: String,
   albumNumerus: Number,
   gradus: String,
   group: String,
   age: Number,
   pass: String,
   assignedExercise: Boolean
})

module.exports = model('students', AddStudentSchema);

