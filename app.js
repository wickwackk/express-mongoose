const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;

const cloud = require("./config/cloudinary-config.js");
const db = require("./config/mongoose-config.js");
const Movie = require("./model/Movie");
const movie_router = require("./routes/movies-api.js");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(movie_router);

// setTimeout(() => {

// }, []);

// db.once("open", () => {
//   Movie.find({})
//     .limit(1)
//     .then((movies) => {
//       console.log("Movies", movies);
//     })
//     .catch((err) => {
//       console.log("Error getting", err);
//     });
// });

// db.on("error", (error) => {
//   console.log("error connecting", error);
// });

const res = cloudinary.uploader.upload("/Users/morning/Downloads/andy.jpeg", {
  public_id: "hey2",
  folder: "Andy bagsh",
  use_filename: true,
});

res
  .then((data) => {
    console.log(data);
    console.log(data.secure_url);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(2030, () => {
  console.log("listening at 2030");
});
