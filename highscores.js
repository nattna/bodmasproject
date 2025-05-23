const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const http = require('http');
var parseUrl = require('body-parser');
const app = express();
const path = require('path');//allows a path so that foreign keys can be accessed

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
//gets the top 10 and their username and scores and ranks them from 1st to 10th
app.get('/leaderboard', (req, res) => {
    con.query('SELECT username, score FROM leader_board ORDER BY score DESC LIMIT 10', function(err, result) {
        res.json(result);
    });
});

app.post('/top10', encodeUrl, (req, res) => {
    const username = req.body.username;
//gets the users searched username from the database 
    con.query('SELECT score FROM leader_board WHERE username = ${username} ORDER BY score DESC', [username], function(err, result) {
        if (result.length === 0) {
            return res.send("this username isn't in the leaderboard");
        }

        const score = result[0].score;
//gets the searched users ranking from the database 
        con.query('SELECT COUNT(*) AS rank FROM leader_board WHERE score > ${score}', [score], function(err, topten)
        {
            const rank = rankResult[0].rank + 1; 
            res.send(`${rank}`);
        });
    });
});

app.get('/leaderboard', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/');
    }
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(5500, ()=>{
    console.log("Server running on port 5500");
});




