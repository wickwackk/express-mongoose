const db = require("../config/mongoose-config.js");
const Movie = require("../model/Movie.js");

module.exports = async function getMovies(limit) {
  return await Movie.find({})
    .limit(limit)
    .then((movies) => {
      return movies;
    })
    .catch((err) => {
      console.log("Error getting", err);
    });
};

// export async function postProducts(prods) {
//   const [row] = await pool.query("select * from category");
//   await prods.map((prod) =>
//     row.find(
//       (category) =>
//         category.name === prod.category &&
//         pool.query(
//           `INSERT INTO product (name, description, image, price, stock, sale, created_date,category_id) VALUES("${
//             prod.name
//           }", "${prod.description}", "${prod.image}", ${Number(
//             prod.price
//           )}, ${Number(prod.stock)}, "${prod.sale}", "2022-01-13",${
//             category.id
//           })`
//         )
//     )
//   );

//   return row;
// }
