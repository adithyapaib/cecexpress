// Importing the required modules
const express = require('express');
const app = express();
const port = 3000;



// Middleware to parse the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('static'));




// Database to store the shortid and the url
const db = {
    'yt': "https://www.youtube.com/"
}


//  Rendering the index.html file
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/index.html");
});


// Displaying the data in the database
app.get("/log", (req, res) => {
    res.json(db);
});

// Saving the data in the database
app.post("/savedata", (req, res) => {
    const { shortid, url } = req.body;
    db[shortid] = url;
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
