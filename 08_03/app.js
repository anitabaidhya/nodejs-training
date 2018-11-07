var express = require("express");
var cors = require("cors");
var app = express();
var skierTerms=[
	{
		term: "LOL",
		defined: "Laugh out loud"
	},
	{
		term: "RIP",
		defined: "Rest In Peace"
	},
	{
		term: "FYI",
		defined: "For your Information"
	}
];

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}'`);
	next();
});

app.use(express.static("./public"));
app.use(cors());
app.get("/dictionary-api", function(req, res){
	res.json(skierTerms);
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;