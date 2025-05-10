const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,  // Ensures that the listing has a title
  },
  description: String,

  // Image field
  image: {
    url: {
      type: String,  // URL of the image
      required: true,  // Ensure that each listing has an image URL
    },
    filename: {
      type: String,  // Filename of the image, for easier access
      required: true,  // Ensure that each listing has a filename
    },
  },

  price: {
    type: Number,
    required: true,  // Ensures that the listing has a price
    min: [0, "Price must be positive"],  // Optional validation for price
  },
  location: {
    type: String,
    required: true,  // Ensure that the listing has a location
  },
  country: {
    type: String,
    required: true,  // Ensure that the listing has a country
  },

  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",  // Reference to the Review model
    },
  ],

  // Owner field: assuming a reference to the user who created the listing
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",  // Reference to the User model (the creator of the listing)
    required: true,  // Ensure the listing has an owner
  },
});

// Middleware to delete associated reviews when a listing is deleted
listingSchema.post("findOneAndDelete", async function (listing) {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

// Model creation
const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
