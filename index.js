const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/",(req,res)=>{
    res.write("Hello World!");
    res.end()
})

app.post("/add",(req,res)=>{
    console.log(req.body)
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if(isNaN(num1) || isNaN(num2)){
        res.json({
            status : "Error",
            message : "Inputs must be numeric"
        })
    }else{
        res.json({
            status : "sucess",
            message : "The sum of given two numbers",
            sum:num1+num2 
        })
    }
})

app.post("/sub",(req,res)=>{
    console.log(req.body);
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if(isNaN(num1)|| isNaN(num2)){
        res.json({
            status  : "Error",
            message : "Inputs must be numneric"
        })
    }else{
        res.json({
            status:"success",
            message: 'the difference of given two numbers', 
            difference: num1-num2 
        })
    }
})

app.post("/multiply",(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if(isNaN(num1)|| isNaN(num2)){
        res.json({
            status  : "Error",
            message : "Inputs must be numneric"
        })
    }else{
        res.json({
            status:"success",
            message: 'the difference of given two numbers', 
            product: num1*num2 
        })
    }
})

app.post("/divide",(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if(isNaN(num1)|| isNaN(num2)){
        res.json({
            status  : "Error",
            message : "Inputs must be numneric"
        })
    }else if(num2==0){
        res.json({
            message: 'cannot divide by zero', 
        })
    }
    
    else{
        res.json({
            status:"success",
            message: 'the difference of given two numbers', 
            Division: num1/num2 
        })
    }
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;