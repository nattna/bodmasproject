/*import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
  host: /*'127.0.0.1'*//*process.env.MYSQL_HOST,
  user: /*'root'*//*process.env.MYSQL_USER,
  password:/*""*//*process.env.MYSQL_PASSWORD,
  database: /*'leaderBoard'*//*process.env.MYSQL_DATABASE
})

export async function getPlayers() {
  const [rows] = await pool.query("SELECT * FROM players").promise()
  return rows
}

export async function getPlayer(playerID) {
  const [rows] = await pool.query(`
    SELECT *
    FROM players
    WHERE playerID = ?
    `, [playerID])
    return rows
}

export async function createPlayer(username, user_password) {
  const [result] = await pool.query(`
    INSERT INTO players (username, user_password)
    VALUES ( ?, ?)
    `, [username, user_password])
    const id = result.insertId
    return getPlayer()
}
const result = createPlayer('test', 'test')
console.log(result)

const player = getPlayer(1)
console.log(player)*/

/*import mysql from 'mysql2';

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "zaqwsxcde127",
  database: "leaderBoard"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE playTime (playTime_id INT AUTO_INCREMENT PRIMARY KEY, playerid INT, score INT NOT NULL, game_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (playerid) REFERENCES players(playerid) ON DELETE CASCADE)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE leader_board (leaderboard_id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(20) NOT NULL, score INT NOT NULL, playTime INT, FOREIGN KEY (playTime_id) REFERENCES play_time(playTime_id), FOREIGN KEY (playerid) REFERENCES players(playerid) ON DELETE CASCADE)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});


module.exports = connection;*/

const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const http = require('http');
var parseUrl = require('body-parser');
const path = require('path'); // Added for handling file paths

const app = express();
var mysql = require('mysql2');

let encodeUrl = parseUrl.urlencoded({ extended: false });

app.use(sessions({
    secret: "thisismysecrctekey",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, 
    resave: false
}));

app.use(cookieParser());
app.use(bodyParser.json());

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "zaqwsxcde127",
    database: "leaderBoard"
});


app.post('/saveGame', (req, res) => {
    if (!req.session.user) {
        return res.status(401).send("Unauthorized");
    }

    
    var playerId = req.session.user.playerid; 
    var score = req.body.score;

    if (!score || !playerId) {
        return res.status(400).send("Score and player ID are required.");
    }

    // Insert data into playTime table
    const sql = "INSERT INTO playTime (playerid, score) VALUES (?, ?)";
    con.query(sql, [playerId, score], (err, result) => {
        if (err) {
            console.log(err);
        }

        // Send a response or redirect after saving
        res.redirect('/competitiveGame_page1.html'); // Redirect to the next page
    });
});


app.listen(5500, () => {
    console.log("Server running on port 5500");
});
