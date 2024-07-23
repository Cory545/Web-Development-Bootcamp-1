// Importing for node
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
// starting express and logging which port I'm on.
const app = express();
const port = 3000;
// Enabling express, body parser
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

//a get request
app.get("/", async (req, res) => {
  try {
    // response is = to axios.get - and grabs from /random
    //await is waiting for promise to become fulfilled - either successful or failed
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    //if it works, then data has a result and theres no error
    res.render("index", { data: result, error: null });
  } catch (error) {
    //error was caught, console logs failed to make request. data has null and error has error.message
    console.error("Failed to make request:", error.message);
    res.render("index", { data: null, error: error.message });
  }
});

app.post("/", async (req, res) => {
  const { type, participants } = req.body;

  try {
    const response = await axios.get("https://bored-api.appbrewery.com/filter", {
      params: { type, participants }
    });

    if (response.data.length === 0) {
      throw new Error("No activities that match your criteria.");
    }

    const result = response.data[0]; // Assuming you want a single random activity from the filtered results
    res.render("index", { data: result, error: null });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index", { data: null, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
