const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
const studentArray = require("./InitialData")
app.get("/api/student",(req,res)=>{
    res.json(studentArray)
})

app.get("/api/student/:id",(req,res)=>{
    const id = req.params.id
    const index = studentArray.findIndex(el => el.id == id);
    if(index>=1&& index<studentArray.length){
        res.json(studentArray[index])
    }
})
app.post("/api/student",(req,res)=>{
     req.body.id  = studentArray.length+1;
     studentArray.push(req.body); 
     res.json(studentArray)
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   