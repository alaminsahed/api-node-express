const fs = require('fs');

const getStudent = ()=>{
    return new Promise((resolve, reject)=>{
        fs.readFile('./db.json', 'utf-8',(err, data)=>{
            // console.log(data);
            //JSON.parse convert the string data to js obj 
            const student = JSON.parse(data);
            resolve(student);
        })
    })
    
}

const insertStudent = (students) =>{
    return new Promise((resolve,reject)=>{
             fs.writeFile('./db.json',JSON.stringify(students),(err)=>{
                resolve("ok");
             })
        })


}

module.exports.getStudent = getStudent;
module.exports.insertStudent = insertStudent;