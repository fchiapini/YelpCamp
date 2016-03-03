var express    = require("express"),
    Campground = require("../models/campground"),
    router     = express.Router()

router.get("/", function(req, res) {
	Campground.find({}, function(err, campgrounds) {
		if(err) {
			console.log(err);
		} else {
		    res.render("campgrounds/index", {campgrounds: campgrounds});
		}
	});
});

router.post("/", function(req, res) {
	var name          = req.body.name;
	var image         = req.body.image;
	var desc          = req.body.description;
	var newCampground = {name: name, image: image, description: desc};

	Campground.create(newCampground, function(err, newlyCreated) {
		if(err) {
			console.log(err);
		} else {
			res.redirect("/campgrounds");
		}
	});
});

router.get("/new", function(req, res) {
	res.render("campgrounds/new");
});

router.get("/:id", function(req, res) {
	Campground.findById({_id: req.params.id}).populate("comments").exec(function(err, foundCampground) {
		if(err) {
			console.log(err);
		}	else {
				res.render("campgrounds/show", {campground: foundCampground});
		}
	});
});

module.exports = router;