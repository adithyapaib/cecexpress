// Importing the required modules
const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;


// Store the database in /static/database.json
let db = fs.readFileSync(__dirname + "/static/database.json");
db = JSON.parse(db);





// Middleware to parse the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('static'));




// Database to store the shortid and the url


//  Rendering the index.html file
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/index.html");
});


// Displaying the data in the database
app.get("/log", (req, res) => {
    db = fs.readFileSync(__dirname + "/static/database.json");
    db = JSON.parse(db);
    res.json(db);
});

// Saving the data in the database
app.post("/savedata", (req, res) => {
    const { shortid, url } = req.body;
    if (db[shortid]) {
        return res.send(`<body bgcolor=red> Data Already Exists </body> <script>setTimeout(() => {window.location.href = "/";}, 2000);</script>`);
    }
    if (!shortid || !url) {
        return res.send(`<body bgcolor=red> Data Not Entered </body> <script>setTimeout(() => {window.location.href = "/";}, 2000);</script>`);
    }
    
    if (!/^[a-zA-Z0-9]+$/.test(shortid)) {
        return res.send(`<body bgcolor=red> Shortid should be alphanumeric </body> <script>setTimeout(() => {window.location.href = "/";}, 2000);</script>`);
    }

    db[shortid] = url;
    fs.writeFileSync(__dirname + "/static/database.json", JSON.stringify(db));
    res.send(`<body bgcolor=green> Data Entered SuccessFully </body> <script>setTimeout(() => {window.location.href = "/";}, 2000);</script>`)
});

// Redirecting to the 404 page
app.get("/404", (req, res) => { res.send(`<img src="https://c.tenor.com/q2eL6vNVKf4AAAAC/tenor.gif">`); });


// Redirecting to the original url
app.get("/:shortid", (req, res) => {
    const shortid = req.params.shortid;
    const url = db[shortid];
    if (url) {
        res.redirect(url);
    }
    else {
        res.redirect("http://localhost:3000/404");
    }
});




// Listening to the port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});