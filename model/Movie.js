const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    genres: [String],
    year: Number,
  },
  {
    collection: "movies",
  }
);

const Movie = mongoose.model("Movie", MovieSchema, "movies");

module.exports = Movie;
