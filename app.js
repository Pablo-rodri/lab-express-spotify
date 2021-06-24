require('dotenv').config();

const { Router } = require('express');
const express = require('express');
const hbs = require('hbs');

// require spotify-web-api-node package here:


const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// setting the spotify-api goes here:



// Our routes go here:
const index = require("./routes/index")
app.use("/", index)


//const SpotifyWebApi = require('spotify-web-api-node');



app.listen(3000, () => console.log('My Spotify project running on port 3000 🎧 🥁 🎸 🔊'));
