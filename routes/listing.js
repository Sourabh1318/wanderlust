const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validatelisting } = require("../middleware.js");
const wrapAsync = require("../utils/wrapAsync.js");
const listingController = require("../controllers/listings.js");
const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// Index and Create Route (GET and POST)
router
  .route("/")
  .get(wrapAsync(listingController.index)) // Displays all listings
  .post(
    isLoggedIn, // Ensure the user is logged in
    upload.single("listing[image]"), // Handle image upload
    validatelisting, // Validate the listing data
    wrapAsync(listingController.createListing) // Handle the creation of the listing
  );

// New Route (GET)
router.get("/new", isLoggedIn, listingController.renderNewForm); // Renders the form to create a new listing

// Show, Update, Delete Route (GET, PUT, DELETE)
router
  .route("/:id")
  .get(wrapAsync(listingController.showListing)) // Displays a single listing
  .put(
    isLoggedIn, // Ensure the user is logged in
    isOwner, // Ensure the user is the owner of the listing
    upload.single("listing[image]"),
    validatelisting, // Validate the listing data
    wrapAsync(listingController.updateListing) // Handle the update logic
  )
  .delete(
    isLoggedIn, // Ensure the user is logged in
    isOwner, // Ensure the user is the owner of the listing
    wrapAsync(listingController.destroyListing) // Handle the deletion logic
  );

// Edit Route (GET)
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm)); // Renders the edit form for the listing

module.exports = router;
