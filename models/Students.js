const mongoose = require('mongoose');


const studentSchema = mongoose.Schema({
    name: {type: String, required: [true, 'Name is required'], trim: true},
    age : {type: Number, required: [true, 'Age must be 18'], min:18 },
    courses : {
        type: Array,
        of: String,
        required: true,
        validate:{
            validator: (value)=> value.length > 0,
            message: "Select at least one course"

        }

    }
})

const Student = mongoose.model('Student', studentSchema);
exports.Student = Student;