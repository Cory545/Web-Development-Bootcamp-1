import express from "express";

const app = express();
const port = 3000;

app.use(logger);

function logger(req, res, next){
  console.log("Request Method: " + req.url);
  console.log("Request Method: " + req.method);
  next();
};




app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
