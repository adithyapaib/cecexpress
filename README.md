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


## 4. Building the URL Shortener
In this section, we will build a simple URL shortener using Express JS. 

### 4.1 Routes 
- GET `/` - This route will render the `index.html` file.
- GET `/log` - This route will display the data in the database.
- POST `/savedata` - This route will save the data in the database.
- GET `/:shortid` - This route will redirect to the original URL.
- GET `/404` - This route will redirect to the 404 page.

### 4.2 Database
We will use a simple object to store the shortid and the URL. 

```javascript
const db = {
    'yt': "https://www.youtube.com/",
    'fb': "https://www.facebook.com/"
}
```

### Files Changed


- index.js 
```javascript 
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
```

# Activity 1

- Can you add a route to delete the data from the database?
- Can you add drawback of the current implementation?

