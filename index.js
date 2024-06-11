// Importing the required modules
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;


// MongoDB connection
mongoose.connect('mongodb://localhost:27017/urlshortener');

// Create a schema

const urlSchema = new mongoose.Schema({
    shortid: String,
    url: String
});

// Create a model
const Model = mongoose.model('Url', urlSchema);


// Middleware to parse the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//  Rendering the index.html file
app.get("/", (req, res) => res.sendFile(__dirname + "/static/index.html"));


// Displaying the data in the database
app.get("/log", (req, res) => Model.find({}).then((data) => res.json(data)));


// Saving the data in the database
app.post("/savedata", async (req, res) => {
    const { shortid, url } = req.body;
    let shortIdExists = false;
    await Model.find({ shortid }).then((data) => {
        if (data.length > 0) {
            res.send(`<body bgcolor=red> Shortid already exists </body> <script>setTimeout(() => {window.location.href = "/";}, 2000);</script>`);
            shortIdExists = true;
            return;
        }

    });
    if (shortIdExists)
        return;

    if (!shortid || !url) {
        return res.send(`<body bgcolor=red> Data Not Entered </body> <script>setTimeout(() => {window.location.href = "/";}, 2000);</script>`);
    }

    if (!/^[a-zA-Z0-9]+$/.test(shortid)) {
        return res.send(`<body bgcolor=red> Shortid should be alphanumeric </body> <script>setTimeout(() => {window.location.href = "/";}, 2000);</script>`);
    }

    // Inserting the data into the database
    Model.create({ shortid, url }).then(() => { console.log("Data Entered Successfully"); });
    res.send(`<body bgcolor=green> Data Entered SuccessFully </body> <script>setTimeout(() => {window.location.href = "/";}, 2000);</script>`)
});

// Redirecting to the 404 page
app.get("/404", (req, res) => { res.send(`<img src="https://c.tenor.com/q2eL6vNVKf4AAAAC/tenor.gif">`); });


// Redirecting to the original url
app.get("/:shortid", async(req, res) => await Model.findOne({ shortid: req.params.shortid }).then((data) => res.redirect(data != null? data.url : "/404")));


// Listening to the port
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));