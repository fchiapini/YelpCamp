var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
		{name: "Salmon Creek", image: "https://farm1.staticflickr.com/22/31733208_3190a1e982.jpg"},
		{name: "Granite Hill", image: "https://farm6.staticflickr.com/5098/5496185186_d7d7fed22a.jpg"},
		{name: "Mountain Goat's Rest", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
		{name: "Salmon Creek", image: "https://farm1.staticflickr.com/22/31733208_3190a1e982.jpg"},
		{name: "Granite Hill", image: "https://farm6.staticflickr.com/5098/5496185186_d7d7fed22a.jpg"},
		{name: "Mountain Goat's Rest", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
		{name: "Salmon Creek", image: "https://farm1.staticflickr.com/22/31733208_3190a1e982.jpg"},
		{name: "Granite Hill", image: "https://farm6.staticflickr.com/5098/5496185186_d7d7fed22a.jpg"},
		{name: "Mountain Goat's Rest", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
		{name: "Salmon Creek", image: "https://farm1.staticflickr.com/22/31733208_3190a1e982.jpg"},
		{name: "Granite Hill", image: "https://farm6.staticflickr.com/5098/5496185186_d7d7fed22a.jpg"},
		{name: "Mountain Goat's Rest", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"}
];

app.get("/", function(req,res) {
	res.render("landing");
});

app.get("/campgrounds", function(req, res) {
	res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};

	campgrounds.push(newCampground);

	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req,res) {
	res.render("new");
});

app.listen(3000, function() {
	console.log("The YelpCamp Server Has Started!");
});