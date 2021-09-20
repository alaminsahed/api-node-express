const express = require("express");
const router = express.Router();
const data = require('./data');


const studentList =(req,res)=>{

    //when use promise resolve, access data by then
    data.getStudent()
    .then(data=>{
        res.send(data);
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




