const { Schema, model } = require("mongoose");

const AddExercisesSchema = new Schema({
    number: Number,
    exercise: String,
    result: String,
    instruction: String,
    help: String,
    status: Boolean,
    is_good: Boolean,
    
    
})

module.exports = model('exercises', AddExercisesSchema);
