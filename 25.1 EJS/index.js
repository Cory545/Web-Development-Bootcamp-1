
//importing needed modules
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
 
// declaring modules variables
const __dirname = dirname(fileURLToPath(import.meta.url));
const app =express();
const port =3000;

// Doing the days variables
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekday[d.getDay()];
console.log(day);

// Soon as it loads, sent straight to index.ejs, where it tells the ejs file what the day means, which
//is already declared
app.get("/", (req, res) =>{
    res.render(__dirname + "/views/index.ejs", { day: day });
    ;
});

//Just logging port to make sure
app.listen(port, () => {
    console.log(`Your server is running on port ${port}`);
})