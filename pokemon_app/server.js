console.log("server.js is running...");

const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
	res.send("Welcome to my pokemon app!");
});



app.listen(PORT, () => {
	console.log(`listening on port: ${PORT}`);
});


























