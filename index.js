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


// Testing Some res methods

app.get("/test", (req, res) => {
    res.json({ name: "John", age: 30, city: "Bangalore" });
}
);

app.get("/vturesults", (req, res) => {
    res.redirect("https://youtu.be/dQw4w9WgXcQ?si=L9AB4fN3xC4voyUQ");
}
);

app.get("/rcbcup", (req, res) => {
    return res.status(501).send("Not Implemented");
    
}
);







app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
