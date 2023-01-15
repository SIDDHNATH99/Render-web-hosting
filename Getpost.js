const express = require("express");
const bodyParser = require("body-parser");

// New app using express module
const app = express();
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get("/", function (req, res) {

	res.sendFile(__dirname + "/Demo.html");
});

app.post("/", function (req, res) {

	console.log("in post", req.body);

	var num1 = Number(req.body.n1);
	var num2 = Number(req.body.n2);
	var num3 = String(req.body.n3);
	var num4 = String(req.body.n4);

	res.send("yay done")
});

app.listen(3000, function () {
	console.log("server is running on port 3000");
})
