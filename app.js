require("dotenv").config();
const moviesRoutes = require("./routes/movies/moviesRoutes.js")
const ticket = require("./routes/ticket/ticket.js")
const express = require("express");        //require - import modules     //express library importing using require

const app = new express();                      //create an object for a class..The class present in app
const port = process.env.port || 8088;         //process is used for interact the environment with os

app.use("/movies",moviesRoutes);
app.use("/ticket",ticket);

app.listen(port, () => {                                        //listen is a function..we call the function..call back function.. To start the server we using app.listen
    console.log(`Express app listening at http://localhost:${port}`)
});