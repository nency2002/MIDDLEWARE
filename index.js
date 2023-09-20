const express = require("express");
const check = require("./middle");
const app = express();
app.use(express.json());

app.use(express.urlencoded({extended: true }));

let student =[{name:"nency",grid:2751,course:"full stack"}]

// get

app.get("/student", (req, res) => {
    res.status(200).send(student)
});

app.get("/index.html", (req, res) => {
    res.sendfile(__dirname + "/index.html")
});

console.log(__dirname + "/index.html")
// post

app.post("/student",check,(req, res) => {
    let datas = {
        name: req.body.name,
        grid: req.body.grid,
        course: req.body.course,
        id: student.length + 1
    }
    student.push(datas);
    // console.log(datas);
    res.status(200).send(datas);
});

const port= 8070;
app.listen(port, ()=>{
    console.log(`Server is listening on port http://localhost:${port}`);
})

