
 ![Internet](https://img.icons8.com/fluency/48/000000/internet.png) 
 

# SUS (SMOL URL SHORTENER)[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)




## Description
SUS is a simple URL shortener that allows users to shorten long URLs. The application is built using Node.js, Express, and MongoDB. The application provides a simple user interface where users can enter a long URL and get a shortened version of the URL. The shortened URL can be used to redirect to the original URL. The application also provides a list of all the shortened URLs created by the user. The application uses a unique ID to generate the shortened URL and stores the original URL and the shortened URL in a MongoDB database. The application also provides a simple analytics dashboard that shows the number of times the shortened URL has been used.


## Features
- Shorten long URLs
- Redirect to original URL using shortened URL
- View list of shortened URLs


## Technologies
- Node.js
- Express
- MongoDB
- Mongoose



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
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


## Usage

To use the application, follow these steps:

1. Open your browser and navigate to `http://localhost:3000/`.

2. Enter a long URL in the input field and click the `Shorten` button to generate a shortened URL.

3. Copy the shortened URL and use it to redirect to the original URL.


## API Endpoints

The application provides the following API endpoints:

1. `GET /log`:  Get all the shortened URLs created by the user.
2. `GET / `:  Front end of the application
3. `POST /savedata`:  Save the shortened URL in the database.
4. `GET /:id`:  Redirect to the original URL using the shortened URL.
5. `GET /*`:  Get the analytics data for the shortened URL.


## License

This project is licensed under the MIT license. For more information, see the [LICENSE](LICENSE) file.






