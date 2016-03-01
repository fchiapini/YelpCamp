var mongoose   = require("mongoose"),
		Campground = require("./models/campground"),
		Comment    = require("./models/comment")

var data = [
	{
	  name:        "Cloud's Rest",
	  image:       "https://farm9.staticflickr.com/8002/7299820870_e78782c078.jpg",
	  description: "blah blah blah"
	},
	{
	  name:        "Desert Mesa",
	  image:       "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
	  description: "blah blah blah"
	},
	{
	  name:        "Canyon Floor",
	  image:       "https://farm4.staticflickr.com/3498/3905765143_446dcd0e2c.jpg",
	  description: "blah blah blah"
	}
]

function seedDB() {
	Campground.remove({}, function(err) {
		if(err) {
			console.log(err);
		}
		console.log("removed campgrounds!");
		data.forEach(function(seed) {
  	  Campground.create(seed, function(err, campground) {
  	    if(err) {
  	      console.log(err);
  	    } else {
  	   	    console.log("Added a campground");
  	   	    Comment.create(
  	   	      {
  	   	        text: "This place is grate, but I wish there was internet",
  	   	        author: "Homer"
  	   	  	  }, function(err, comment) {
  	   	  	  	   if(err) {
  	   	  	  	     console.log(err);	
  	   	  	  	   } else {
                       campground.comments.push(comment);
                       campground.save();
                       console.log("Created new comment");
  	   	  	  	   } 
  	   	  	  });
  	    }
  	  });
    });
  });
}

module.exports = seedDB;