const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  postId: {
    type: String,
    required: true,
  },

  user: {
    type: String,
    required: true,
  },

  text: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  "Comment",
  commentSchema
);