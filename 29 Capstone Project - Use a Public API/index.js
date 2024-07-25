import axios from "axios";
import express from "express";

const app = express();
const port = 3000;

// Set the view engine to EJS
app.set("view engine", "ejs");
app.use('/public', express.static('public'));
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data


//Loading up the screen soon as you load.
app.get("/", async (req, res) => {
    try {
        res.render("index"); // Replace with actual data as needed
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
});
//Allows the characterCreation page to be loaded and directed to.
app.get("/characterCreation", async (req, res) => {
    try {
        res.render("characterCreation");
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
});
//Allows the Home page to be loaded and directed to.
app.get("/index", async (req, res) => {
    try {
        res.render("index");
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
});
//Allows the Lists page to be loaded and directed to.
app.get("/lists", async (req, res) => {
    try {
        res.render("lists");
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
});
//Allows the SpellsList page to be loaded and directed to.
app.get("/spellList", async (req, res) => {
  try {
      res.render("spellList");
  } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).send("Internal Server Error");
  }
});
//Allows the RaceList page to be loaded and directed to.
app.get("/raceList", async (req, res) => {
  try {
      res.render("raceList");
  } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).send("Internal Server Error");
  }
});
//Allows the TraitList page to be loaded and directed to.
app.get("/traitList", async (req, res) => {
  try {
      res.render("traitList");
  } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).send("Internal Server Error");
  }
});
//Allows the AlignmentList page to be loaded and directed to.
app.get("/alignmentsList", async (req, res) => {
  try {
      res.render("alignmentsList");
  } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).send("Internal Server Error");
  }
});

//Does the function for when the submist button is pressed.
app.post('/submit-list', async (req, res) => {
    //The body of the value sent.
    const selectedOption = req.body.list;
    //If no option is selected or not properly selected, fails.
    if (!selectedOption) {
        console.log('Please choose a valid option.');
        res.redirect('/lists'); // Redirect to avoid rendering without data
        //Now basically a bunch of ifs and elses. I'll explain it for spells, and its essenntially copied and pasted for the rest.
    } else if (selectedOption === 'Spells') {
        try {
            //Now if the value is equal to "Spells", this one runs.
            //Calls to the API endpoint of dnd5api
            const response = await axios.get('https://www.dnd5eapi.co/api/spells');
            //Assigns the data gained as a variable.
            const apiResponse = response.data.results;
            //Now we assign the "url" from within the data gained as the variable url
            const urls = apiResponse.map(item => item.url);
            //Now we assign the "name" from within the data gained as the variable name
            const names = apiResponse.map(item => item.name);

            //Now we need to dig a little deeper into the data gained. There's a url inside the data we need to call into (and promise all means it will wait until its all called to show)
            const descriptions = await Promise.all(
                //Calls to th eurl, and goes inside to assign the data.desc (the desc being the bit we need) and assigning it to the variable descriptions by returning it
                urls.map(async url => {
                    try {
                        const detailResponse = await axios.get(`https://www.dnd5eapi.co${url}`);
                        return detailResponse.data.desc;
                    } catch (error) {
                        //Handling errors
                        console.error("Failed to fetch description", error);
                        return 'No description available'; // Fallback
                    }
                })
            );
            //Now if successful with all this, it will render the page "spellList"
            res.render('spellList', { names, descriptions });
        } catch (error) {
            console.error("Failed to fetch initial data", error);
            res.status(500).send("Internal Server Error");
        }
    } else if (selectedOption === 'Races') {
      try {
        const response = await axios.get('https://www.dnd5eapi.co/api/races');
        const apiResponse = response.data.results;
        const urls = apiResponse.map(item => item.url);
        const names = apiResponse.map(item => item.name);

        const descriptions = await Promise.all(
            urls.map(async url => {
                try {
                    const detailResponse = await axios.get(`https://www.dnd5eapi.co${url}`);
                    return detailResponse.data.alignment;
                } catch (error) {
                    console.error("Failed to fetch description", error);
                    return 'No description available'; // Fallback
                }
            })
        );
        res.render('raceList', { names, descriptions });
    } catch (error) {
        console.error("Failed to fetch initial data", error);
        res.status(500).send("Internal Server Error");
    }
    } else if (selectedOption === 'Traits') {
      try {
        const response = await axios.get('https://www.dnd5eapi.co/api/traits');
        const apiResponse = response.data.results;
        const urls = apiResponse.map(item => item.url);
        const names = apiResponse.map(item => item.name);

        const descriptions = await Promise.all(
            urls.map(async url => {
                try {
                    const detailResponse = await axios.get(`https://www.dnd5eapi.co${url}`);
                    return detailResponse.data.desc;
                } catch (error) {
                    console.error("Failed to fetch description", error);
                    return 'No description available'; // Fallback
                }
            })
        );
        res.render('traitList', { names, descriptions });
    } catch (error) {
        console.error("Failed to fetch initial data", error);
        res.status(500).send("Internal Server Error");
    }
    } else if (selectedOption === 'Classes') { // Fixed typo
      try {
        const response = await axios.get('https://www.dnd5eapi.co/api/classes');
        const apiResponse = response.data.results;
        const urls = apiResponse.map(item => item.url);
        const names = apiResponse.map(item => item.name);

        const descriptions = await Promise.all(
            urls.map(async url => {
                try {
                    const detailResponse = await axios.get(`https://www.dnd5eapi.co${url}`);
                    return detailResponse.data.desc;
                } catch (error) {
                    console.error("Failed to fetch description", error);
                    return 'No description available'; // Fallback
                }
            })
        );
        res.render('classesList', { names});
    } catch (error) {
        console.error("Failed to fetch initial data", error);
        res.status(500).send("Internal Server Error");
    }
    } else if (selectedOption === 'Alignment') { // Fixed typo
      try {
        const response = await axios.get('https://www.dnd5eapi.co/api/alignments');
        const apiResponse = response.data.results;
        const urls = apiResponse.map(item => item.url);
        const names = apiResponse.map(item => item.name);

        const descriptions = await Promise.all(
            urls.map(async url => {
                try {
                    const detailResponse = await axios.get(`https://www.dnd5eapi.co${url}`);
                    return detailResponse.data.desc;
                } catch (error) {
                    console.error("Failed to fetch description", error);
                    return 'No description available'; // Fallback
                }
            })
        );
        res.render('spellList', { names, descriptions });
    } catch (error) {
        console.error("Failed to fetch initial data", error);
        res.status(500).send("Internal Server Error");
    }
    } else {
        console.log('Unrecognized option');
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
