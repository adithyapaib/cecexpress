# A Workshop on Express JS

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

Learn Express JS and build a simple REST API



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the workshop, follow these steps:

1. Clone this repository to your local machine. Open your terminal and run the following command:

    - Link to Donload Git: [Git](https://git-scm.com/downloads)

    ```bash
    git clone https://github.com/adithyapaib/expresstut
    ```
    - Configure the git user name and email using the following commands:
    ```bash
    git config --global user.name "Your Name"
    git config --global user.email "adithy@email.com"
    ```
2. Install the Following extensions 
    - Live Server
    [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
    - REST Client
    [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)


2. Navigate to the project directory:

    ```bash
    cd expresstut
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

4. Install Nodemon globally:

    ```bash
    npm install -g nodemon
    ```
4. Start the application:

    ```bash
   nodemon index.js
    ```
5. Open your browser and navigate to `http://localhost:3000/` to see the application in action.


## 5. Improving the application

    - Add more error handling to the application
    - Add more tests to the application
    - Add Validation to the application
    - Store the data in a database locally


- Files Changed 
- index.js
```javascript 
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

```

