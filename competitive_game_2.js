/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0..1",
  user: "natalialubaale",
  password: "zaqwsxcde127"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});var mysql = require('mysql');

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
});*/
/*import express from "express"

import { getPlayers, getPlayer, createPlayer } from './database.js'

const app = express()

app.use(express.json())

app.get("/players/", (req, res) => {
  const players = getPlayers()
  res.send(players)
})

app.get("/players/: playerID", (req, res) => {
  const playerID = req.params.playerID
  const player = getPlayer()
  res.send(player)
})

app.post("/players/", (req, res) => {
  const {username, user_password} = req.body
  const player = createPlayer(username, user_password)
  res.status(2010).send('player')
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(8080, () => {
  consolee.log('Server is running on port 8080 ')
})*/

const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const http = require('http');
var parseUrl = require('body-parser');
const app = express();
const path = require('path');

var mysql = require('mysql2');

let encodeUrl = parseUrl.urlencoded({ extended: false });

//session middleware
app.use(sessions({
    secret: "thisismysecrctekey",
    saveUninitialized:true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 24 hours
    resave: false
}));

app.use(cookieParser());
app.use(express.static('public'));

var con = mysql.createConnection({
    host: "localhost",
    user: "root", // my username
    password: "zaqwsxcde127", // my password
    database: "leaderBoard"
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/competitiveGame_page1.html');
})

app.post('/signup', encodeUrl, (req, res) => {
    var userName = req.body.username;
    var password = req.body.password;

    con.connect(function(err) {
        if (err){
            console.log(err);
        };
        // Checks whether the user has already registered for the game or not
        con.query(`SELECT * FROM players WHERE username = '${userName}' AND user_password  = '${password}'`, function(err, result){
            if(err){
                console.log(err);
            };
            if(Object.keys(result).length > 0){
                return res.redirect('/')
            }else{
                var sql = `INSERT INTO players (username, user_password) VALUES ('${userName}', '${password}')`;
                con.query(sql, function (err, result) {
                    if (err){
                        console.log(err);
                // We create a session for the dashboard (user page) page and save the user data to this session:
                req.session.user = {
                    username: userName,
                    user_password: password 
                };

                res.redirect('/competitiveGame_page2.html');
                
            }
                });

        }

        });
    });


});

app.get('/competitiveGame_page2', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/'); // Redirect to login if session doesn't exist
    }
    res.sendFile(path.join(__dirname, 'competitiveGame_page2.html'));
});

app.listen(5500, ()=>{
    console.log("Server running on port 5500");
});

