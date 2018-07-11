console.log("server.js is running...");

const express = require("express");
const Pokemon = require("./models/pokemon");
const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
	res.send("Welcome to my pokemon app!");
});

app.get("/pokemon/", (req, res) => {
	res.render("index.ejs", {
		"pokemonIndex": Pokemon
	});
});

app.get("/pokemon/:id", (req, res) => {
	res.render("show.ejs", {
		"pokemon": Pokemon[req.params.id]
	});
});



app.listen(PORT, () => {
	console.log(`listening on port: ${PORT}`);
});


























