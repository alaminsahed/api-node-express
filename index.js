const express = require("express");
const app = express();
const data = require('./data');

app.use(express.json())

app.get("/", (req,res)=>{
    res.send('hello world')
})

app.get("/api/student",(req,res)=>{

    //when use promise resolve, access data by then
    data.getStudent()
    .then(data=>{
        res.send(data);
    })
  
})

app.post('/api/student',(req, res)=>{
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
   
})


app.put('/api/student/:id',(req,res)=>{
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

})


const port = 3000;

app.listen(port, ()=>{
   console.log(`listing port no ${port}`) 
});
