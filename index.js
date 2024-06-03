// Importing the required modules
const express = require('express');
const app = express();
const port = 3000;


// Middleware to parse the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('static'));


app.get("/", (req, res) => {
    res.send("Hello World");
});

// Write your code Here for Ping Pong API




// Playing with QUERY PARAMS
// http://localhost:3000/get?name=John&email=john@gmail

app.get("/get", (req, res) => {
    let name = req.query.name;
    let email = req.query.email;
    res.send(`Name: ${name}, Email: ${email}`);
    console.log(req.query);
}
);

// Playing with PATH PARAMS
// http://localhost:3000/get/John/john@gmail
app.get("/get/:name/:email", (req, res) => {
    let name = req.params.name;
    let email = req.params.email;
    res.send(`Name: ${name}, Email: ${email}`);
    console.log(req.params);
}
);

// Route to handle all the requests that are not handled by the above routes
app.get("/*", (req, res) => { res.send(`<img src="https://c.tenor.com/q2eL6vNVKf4AAAAC/tenor.gif">`); });






app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
