// const express = require('express');
// const app = express();
// const PORT =3000;

// (query paramitter)

// app.get("/", (req,res)=>{
//     // const id = req.query.id;
//     // const name = req.query.name;
//     const { id, name } = req.query;
//     res.send(`<h1>Student name is : ${name}, id is : ${id}</h1>`);
// });


// (route paramitter)

// app.get("/userId/:id/userAge/:age",(req,res)=>{
//     const id = req.params.id;
//     const age = req.params.age;
//     res.send(`<h1>Student id is : ${id}, age is : ${age}</h1>`);

// })



// (Headers er maddome id,name kuja)

// app.get("/", (req,res) =>{
//       const id=req.header('id');
//       const name=req.header('name');
//     res.send(`<h1>Student id is : ${id}, name is : ${name}</h1>`);

// })



// (json/form theke data patanu)

const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

// app.post("/register", (req, res)=>{
//     const name = req.body.name;
//     const age = req.body.age;
//     res.send(`welcome ${name}. You are ${age}`);

// })


app.post("/register", (req, res) => {
    const fullName = req.body.fullName;
    const age = req.body.age;
    res.send(`<h1>Your name is ${fullName}, and age is ${age}</h1>`)

})

app.listen(PORT, () => {
    console.log(`server is runnning at http://localhost:${PORT}`);
});