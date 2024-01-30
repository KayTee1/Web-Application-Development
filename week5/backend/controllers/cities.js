// require the model
const cities = require("../models/cities");
const getCities = async (req, res) => {
  const response = await cities.findCities();
  if (response) {
    res.json(response);
  }
};

const getCityById = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const response = await cities.findCityById(id);
  if (response) {
    res.send(response);
  }
};

const createCity = async (req, res) => {
  const city = {
    capital: req.body.capital,
    country: req.body.country,
  };
  const response = await cities.createNewCity(city);
  if (response) {
    city.id = response.insertId;
    res.json(city);
  }
};

const updateCity = async (req, res) => {
  const city = {
    id: req.body.id,
    capital: req.body.capital,
    country: req.body.country,
  };
  const response = await cities.updateCityById(city);
  if (response) {
    res.json(city);
  }
};

const deleteCity = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const response = await cities.deleteCityById(id);
  if (response) {
    res.json({ message: "City deleted" });
  }
};

// export named functions
module.exports = {
  createCity,
  deleteCity,
  getCities,
  getCityById,
  updateCity,
};
