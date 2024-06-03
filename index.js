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





app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
