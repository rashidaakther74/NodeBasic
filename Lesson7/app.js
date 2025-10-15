const express = require('express');
const app = express();
const userRouter = require("./routes/users.route")

app.use("/api/user", userRouter);

app.use("/register", (req,res)=>{
 res.statusCode = 200;
 res.sendFile(__dirname+"/views/register.html")
})
app.use("/login", (req,res)=>{
    //  res.cookie("name", "Rashida");
    //  res.cookie("age", "19");
    res.clearCookie("name");
    res.append("id", "130000");
     res.end();

})

app.use("/", (req,res)=>{
    res.statusCode = 200;
 res.sendFile(__dirname+"/views/index.html")
    
});


app.use((req,res)=>{
    res.send("<h1>404 !!! Not a valid url </h1>")
})



module.exports = app;