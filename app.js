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

app.get("/addpost1", (req, res) => {
  let post = { title: "postone", body: "this is post number one" };
  let sql = "INSERT INTO posts SET ?";
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send("dode!!!!!!!!!!!!!!!!");
    console.log(result);
  });
});

app.get("/addpost2", (req, res) => {
  let post = { title: "2", body: "this is post number one" };
  let sql = "INSERT INTO posts SET ?";
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send("dode2");
    console.log(result);
  });
});

app.get("/getpost/:id", (req, res) => {
  let post = { title: "2", body: "this is post number one" };
  let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send("post feched!!!");
    console.log(result);
  });
});

app.get("/updatepost/:id", (req, res) => {
  let newTitle = "updated title";
  let post = { title: "2", body: "this is post number one" };
  let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send("post updated!!!");
    console.log(result);
  });
});

app.listen("3000", () => {
  console.log("server started");
});
