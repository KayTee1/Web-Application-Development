const express = require("express");
const citiesRouter = require("./routes/cities");

const app = express();

app.use(express.json());
app.use("/api/cities", citiesRouter);

module.exports = app;
