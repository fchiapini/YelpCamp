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

router.post("/", isLoggedIn, function(req, res) {
	var name          = req.body.name;
	var image         = req.body.image;
	var desc          = req.body.description;
	var author        = { 
    id: req.user._id,
    username: req.user.username
	}
	var newCampground = {name: name, image: image, description: desc, author: author};

	Campground.create(newCampground, function(err, newlyCreated) {
		if(err) {
			console.log(err);
		} else {
			res.redirect("/campgrounds");
		}
	});
});

router.get("/new", isLoggedIn, function(req, res) {
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

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}
	res.redirect("/login");
};

module.exports = router;