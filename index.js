// Importing the required modules
const express = require('express');
const app = express();
const port = 3000;


// Middleware to parse the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('static'));


// Serving the static files post.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/post.html");
});



// Playing with POST request

app.post("/post", (req, res) => { 
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const color = req.body.color;
    // MAke red page and send data as LIST 
    res.send(` <body bgcolor=${color}><h1> Name: ${name} </h1><h1> Email: ${email} </h1></body>`);
}
);



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
