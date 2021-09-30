const express = require("express");
const router = express.Router();
const {Student} = require('../models/Students');
const authorized = require('../middlewires/authorized');
const checkAdmin = require("../middlewires/checkAdmin");


const studentList = async(req,res)=>{
   try {
       const students = await Student.find().sort({name: 1});
       res.send(students);

   } catch (error) {
       console.log(error);
       const errMsg = [];
       for(fields in error.errors)
       {
           const result = errMsg.push(error.errors[fields].message);
       }
       res.status(404).send(errMsg);
   }
  
}

// throw new error
// dynamic message

const studentInformation = async(req,res)=>{
    const id = req.params.id;
    try {
        const student = await Student.findById(id);
        if(!student){
            throw new Error("please correct your id");
        }
        res.send(student);
      

    } catch (error) {
        console.log(error);
        error.name === "Error"?  res.status(404).send(error.message) :  res.status(404).send("id not found");
       
        
    }
  
}


const addStudent = async (req, res)=>{
     const student = new Student (req.body);
    try {
       const result = await student.save();
       res.send(result);
        
    } catch (error) {
        // console.log(error.errors);
        const errMsg = [];
        for(field in error.errors){
            errMsg.push(error.errors[field].message)
        }
        res.status(404).send(errMsg);
    }
    
}

const editStudent = async(req,res)=>{
    const id = req.params.id
    const updateStudent = req.body;
    try {
        const student = await Student.findByIdAndUpdate(id,updateStudent,{new: true});
        if(!student) res.status.send("not found")
        res.send(student);
    } catch (error) {
        res.status(404).send("update failed");
    }
  

}

//new object returns update value

const deleteStudent = async (req, res) =>{
    const id = req.params.id;
    try {
        const student = await Student.findByIdAndDelete(id,{new: true});
        if(!student) res.status.send("not found")
        res.send(student);
    } catch (error) {
        console.log(error);
        res.status(404).send("update failed");
    }
   
}

//authorized private route->token generated login time-> match-> data access   

router.route('/').get(authorized,studentList).post(addStudent);
router.route('/:id').get([authorized,checkAdmin],studentInformation).put(editStudent).delete([authorized,checkAdmin],deleteStudent);

module.exports = router;



