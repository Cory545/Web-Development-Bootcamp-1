import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

let posts = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static('public'));
app.use('/images', express.static('images'));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Route to render the homepage
app.get("/", (req, res) => {
    res.render("index", { posts: posts });
});

// Route to handle form submissions
app.post("/submit", (req, res) => {
    const newPostTitle = req.body.title;
    const newPostContent = req.body.description;

    const blogObj = {
        title: newPostTitle,
        content: newPostContent
    };

    posts.push(blogObj);

    // Redirect back to the homepage after submitting the form
    res.redirect("/");
});

// Route to handle delete requests
app.delete("/delete/:index", (req, res) => {
    const index = parseInt(req.params.index, 10);
    if (index >= 0 && index < posts.length) {
        posts.splice(index, 1);
        res.status(200).send();
    } else {
        res.status(404).send();
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
