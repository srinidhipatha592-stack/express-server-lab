
const express = require("express");
const app = express();

// 1. Home route
app.get("/", (request, response) => {
    response.send("Welcome to the Node.js and Express server!");
});

// 2. About route
app.get("/about", (request, response) => {
    response.json({
        name: "Srinidhi",
        section: "CSE - Generative AI"
    });
});

// 3. Today's date
app.get("/date", (request, response) => {
    let date = new Date();
    response.send(`Today's date is ${date}`);
});

// 4. Current date and time
app.get("/time", (request, response) => {
    let date = new Date();
    response.send(`Current date and time is ${date}`);
});

// 5. Send HTML file
app.get("/page", (request, response) => {
    response.sendFile("./page.html", {
        root: __dirname
    });
});

// 6. Handle unknown routes
app.use((request, response) => {
    response.status(404).send("404 - Page Not Found");
});

// 7. Start the server
app.listen(3000);
