const readline = require("readline")
const r1 = readline.createInterface(process.stdin,process.stdout)
r1.question("Please Enter your name : ",(ans)=>{
    console.log("Hello " + ans + " !");
    r1.close()
})