const express = require("express");
const router = express.Router();


const studentList =(req,res)=>{

   
  
}


const studentInformation = (req,res)=>{
    const id = parseInt (req.params.id);
  
}


const addStudent = (req, res)=>{
 
        const student = req.body;
    
    }

const editStudent = (req,res)=>{
    const id = parseInt(req.params.id)
    const updateStudent = req.body;
  

}

const deleteStudent = (req, res) =>{
    const id = parseInt(req.params.id);
   
}


router.route('/').get(studentList).post(addStudent);
router.route('/:id').get(editStudent).put(editStudent).delete(deleteStudent);

module.exports = router;



