console.log("server.js is running...");

const express = require("express");
const Pokemon = require("./models/pokemon");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
	res.send("Welcome to my pokemon app!");
});

app.get("/pokemon/", (req, res) => {
	res.send(Pokemon);
});



app.listen(PORT, () => {
	console.log(`listening on port: ${PORT}`);
});


























