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


## 2. Playing with POST Requests

### Post Request are used to send data to the server.


## Files Changed

- [ ] `index.js`
```javascript
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


```

- [ ] `static/post.html`
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
   

    <form action="http://localhost:3000/post" method="post" >
        <h1> Testing HTTP POST METHOD </h1>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"> <br>
        <label for class="color">Color</label>
        <input type="text" id="color" name="color"><br>
        <button type="submit">Submit</button>
    </form>
    
</body>
</html>
```