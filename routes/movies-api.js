const express = require("express");

const getMovies = require("../services/movie-service.js");
// const postMovies = require("../services/movie-service.js");

const movie_router = express.Router();

// let products = [{ id: 1, name: "iphone 15" }];

movie_router.get("/movies", async (req, res) => {
  console.log("request to get movies");
  const movies = await getMovies(10);
  // console.log(movies);
  res.status(200).json(movies);
});

// prod_router.post("/product", async (req, res) => {
//   const post = await postProducts(req.body.products);
// });

module.exports = movie_router;
