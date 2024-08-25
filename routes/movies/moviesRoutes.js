const express = require('express');
const router = express.Router();
const Movie = require("../../db/schemas/movieSchema");

router.get("/", async(req,res) => {
    const movies = await Movie.find();
    res.json(movies);
    }
);

router.post("/",async(req,res)=>
    {
        try{
        console.log(req.body);
        const moviesData = req.body;
        const newMovie = new Movie(moviesData);
        await newMovie.save();
        res.json({
            message: "Movie added successfully",
        });
    } catch(err){
        console.log(err);
        res.status(500).json({
            message: "server is not stopped",
        });
    }
    });
    
module.exports = router;
