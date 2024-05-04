const express = require("express");
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "nodemysql",
});

db.connect((err) => {
  if (err) throw err;
  console.log("mysql conected");
});

const app = express();

app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE nodemysql";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("database created!!!!");
  });
});

app.get("/createpostable", (req, res) => {
  let sql =
    "CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("post created");
  });
});

app.get;

app.listen("3000", () => {
  console.log("server started");
});
