const express = require("express");
const bodyParser = require("body-parser");

// New app using express module
const app = express();
app.use(bodyParser.urlencoded({
	extended: true
}));

// app.get("/", function (req, res) {

// 	res.sendFile(__dirname + "/Demo.html");
// });

app.get("/", function (req, res) {

	res.send({
		message : "yay done"
	})

});

app.listen(3000, function () {
	console.log("server is running on port 3000");
})
