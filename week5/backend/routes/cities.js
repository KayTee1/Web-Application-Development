// Require express
const express = require("express");
const {
  createCity,
  deleteCity,
  getCities,
  getCityById,
  updateCity,
} = require("../controllers/cities");

// Create a router object
const router = express.Router();

// Add the routes and the controller function that should handle the request
router.get("/", getCities);
router.get("/:id", getCityById);
router.post("/", createCity);
router.put("/", updateCity);
router.delete("/:id", deleteCity);

module.exports = router;
