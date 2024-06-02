const express = require("express");
const app = express();
const puert = 2006;
const cors = require("cors");

const {getComicMarvel, getComicMarvelById} = require ("./controllers/marvel.controllers");

app.use(cors())

app.get("/", getComicMarvel);

app.get("/", getComicMarvelById);






app.listen(puert, ()=>{
    console.log(`servidor ok ${puert}`)
})
