const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./config/mongoose-config.js");
const Movie = require("./model/Movie");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// setTimeout(() => {

// }, []);

db.once("open", () => {
  Movie.find({})
    .limit(1)
    .then((movies) => {
      console.log("Movies", movies);
    })
    .catch((err) => {
      console.log("Error getting", err);
    });
});

db.on("error", (error) => {
  console.log("error connecting", error);
});

app.listen(2030, () => {
  console.log("listening at 2030");
});
