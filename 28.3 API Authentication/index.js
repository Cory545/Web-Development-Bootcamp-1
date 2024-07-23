import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const apiUrl = 'https://secrets-api.appbrewery.com/secrets/1'; // Replace with your actual API URL
const bearerToken = 'cf5eb31a-2062-4254-ab19-1a0a8c5b94e9'; // Replace with your actual Bearer token

//TODO 1: Fill in your values for the 3 types of auth. COMPLETED
const yourUsername = "Cory";
const yourPassword = "Burton";
const yourAPIKey = "de42b962-2cce-4340-82c7-d752d3689f8e";
const yourBearerToken = "f5357a04-f196-4d6f-a43b-a9649e16ab29";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  axios.get('https://secrets-api.appbrewery.com/random')
  .then(response => {
   let jsonResponse = JSON.stringify(response.data);
      console.log(response.data);
      res.render("index.ejs", { content: jsonResponse });
       // Display fetched data
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    res.render("index.ejs", { content: "Error fetching data." });
  });
});

app.get("/basicAuth", (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
    const auth = {
      username: "Cory",
      password: "Burton"
    };

    axios.get(`https://secrets-api.appbrewery.com/all?page=2`, {
      auth: auth
    })

    .then(response => {
      const jsonResponse = JSON.stringify(response.data);
      console.log(jsonResponse);
      res.render("index.ejs", { content: jsonResponse });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      res.render("index.ejs", { content: "Error fetching data." });
    });

});

app.get("/apiKey", (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  const auth = {
    username: "Cory",
    password: "Burton"
  };

  axios.get(`https://secrets-api.appbrewery.com/filter`, {
    params: {
      apiKey: 'de42b962-2cce-4340-82c7-d752d3689f8e',
      emScore: 5
    },
    auth: auth
  })

  .then(response => {
    const jsonResponse = JSON.stringify(response.data)
    console.log(jsonResponse);
    res.render("index.ejs", { content: jsonResponse });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    res.render("index.ejs", { content: "Error fetching data." });
  });
});

app.get("/bearerToken", (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
    axios.get(apiUrl, {
      headers: { 
        Authorization: `Bearer ${bearerToken}` 
      }
    })
    .then(response => {
      console.log(response.data);
      res.render('index.ejs', { content: JSON.stringify(response.data) });
    })
    .catch(error => {
      console.error('Error fetching data:', error.message);
      res.render('index.ejs', { content: 'Error fetching data.' });
    });
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
