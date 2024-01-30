const mysql = require("mysql2/promise");

async function queryDatabase() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "cities_password",
    database: "cities_db",
  });

  try {
    const [results] = await connection.query("SELECT * FROM cities");
    console.log(results);
  } catch (error) {
    console.log(error);
  }

  // Using placeholders
  try {
    const [results, fields] = await connection.query(
      "SELECT * FROM `cities` WHERE `capital` = ?",
      ["Pretoria"]
    );
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  } catch (err) {
    console.log(err);
  }

  connection.end();
}

queryDatabase();
