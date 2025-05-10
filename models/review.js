const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment: {
        type: String,
        required: true,  // Ensures that every review has a comment
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true,  // Ensures that every review has a rating
    },
    createdAt: {
        type: Date,
        default: Date.now,  // Sets the current date as default for createdAt
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",  // Links to the User model
        required: true,  // Ensures that the review has an associated user (author)
    },
});

module.exports = mongoose.model("Review", reviewSchema);
