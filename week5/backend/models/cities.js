const pool = require("../db/pool");
const cities = {
  findCities: async () => {
    try {
      const connection = await pool.getConnection();
      const [results] = await connection.query("SELECT * FROM `cities`");
      connection.release();
      return results;
    } catch (error) {
      throw new Error(error);
    }
  },
  findCityById: async (id) => {
    const selectQuery = "SELECT * FROM cities WHERE id=?;";
    try {
      const connection = await pool.getConnection();
      const [results] = await connection.query(selectQuery, [id]);
      connection.release();
      return results[0];
    } catch (error) {
      throw new Error(error);
    }
  },
  createNewCity: async (city) => {
    const insertQuery = "INSERT INTO `cities` SET ?";
    try {
      const connection = await pool.getConnection();
      const [results] = await connection.query(insertQuery, [city]);
      connection.release();
      console.log(results);
      return results;
    } catch (error) {
      throw new Error(error);
    }
  },
  updateCityById: async (city) => {
    const updateQuery =
      "UPDATE `cities` SET `capital` = ?, `country` = ? WHERE `id` = ?";
    try {
      const connection = await pool.getConnection();
      const [results] = await connection.query(updateQuery, [
        city.capital,
        city.country,
        city.id,
      ]);
      connection.release();
      console.log(results);
      return results;
    } catch (error) {
      throw new Error(error);
    }
  },
  deleteCityById: async (id) => {
    const deleteQuery = "DELETE FROM `cities` WHERE `id` = ?";
    try {
      const connection = await pool.getConnection();
      const [results] = await connection.query(deleteQuery, [id]);
      connection.release();
      console.log(results);
      return results;
    } catch (error) {
      throw new Error(error);
    }
  },
};
module.exports = cities;
