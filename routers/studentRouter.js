const express = require("express");
const router = express.Router();
const data = require('../db.json');


const studentList =(req,res)=>{

    //when use promise resolve, access data by then
    data.getStudent()
    .then(data=>{
        res.send(data);
    })
  
}


const studentInformation = (req,res)=>{
    const id = parseInt (req.params.id);
    data.getStudent()
    .then(students=>{
        const student = students.find(s=>s.id === id);
        student? res.send(student) : res.status(404).send("Not found by this id");
    })
}


const addStudent = (req, res)=>{
 
        const student = req.body;
        data.getStudent()
        .then(students=>{
            
            students.push(student)
            // all students rewrite here.
            data.insertStudent(students)
            .then(newStudent =>{
                //newStudent is the response of resolve
                res.send(students)
            })
        })
       
    }

const editStudent = (req,res)=>{
    const id = parseInt(req.params.id)
    const updateStudent = req.body;
    data.getStudent()
    .then(students=>{
      const student = students.find(s=>s.id === id);
      if(!student) res.status(404).send("Not found with this id")
      else{
          const i = students.findIndex(s=> s.id ===id);
          students[i] = updateStudent;
          data.insertStudent(students)
          .then(msg=> res.send(updateStudent));
      }
    })

}

const deleteStudent = (req, res) =>{
    const id = parseInt(req.params.id);
    data.getStudent()
    .then(students=>{
        const student = students.find(s=>s.id === id);
        if(!student) res.status(404).send("not found by this is")
        else{
            const allStudents = students.filter(s => s.id !== id);
            data.insertStudent(allStudents)
            .then(msg=>res.send(students));
        }
    })
}


router.route('/').get(studentList).post(addStudent);
router.route('/:id').get(editStudent).put(editStudent).delete(deleteStudent);

module.exports = router;



