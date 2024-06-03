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


## 1. Playing with GET Requests

- [ ] Activity 1: Create a simple GET request that returns a message "Pong" when the user navigates to `http://localhost:3000/ping`.


## Files Changed
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

```

- static/get.html # Create this file in the static folder
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DEMO FOR POST</title>
</head>

<style>
    form {
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        margin: 0;
        background-color: #f4f4f6;
    }
</style>
<body>
   
    
    <form action="http://localhost:3000/get" method="get" >
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"> <br>
        <button type="submit">Submit</button>
    </form>
    
</body>
</html>

```











