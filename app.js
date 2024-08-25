require("dotenv").config();
const moviesRoutes = require("./routes/movies/moviesRoutes.js")
const express = require("express"); 
const db = require("./db/index.js");       //require - import modules     //express library importing using require

const app = new express();                      //create an object for a class..The class present in app
const port = process.env.port || 8088;         //process is used for interact the environment with os
db();
app.use(express.json());
app.use("/movies",moviesRoutes);

app.listen(port, () => {                                        //listen is a function..we call the function..call back function.. To start the server we using app.listen
    console.log(`Express app listening at http://localhost:${port}`)
});