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


## 3. Playing with Response Headers

- [ ] Activity 1: Create a Route with your Name to redirect to your Instagram Profile

- in `index.js` file, add the following code:

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


```
