import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log(req.rawHeaders);

    res.send("<h1>Hello from Cory");
});

app.get("/contact", (req, res) => {
    console.log(req.rawHeaders);

    res.send("<h1>Hello from Contact Page</h1>");
});

app.get("/about", (req, res) => {
    console.log(req.rawHeaders);

    res.send("<h1>Hello from About Me</h1>");
});

app.listen(port, () => {
    console.log("Server running on port 3000.");
});