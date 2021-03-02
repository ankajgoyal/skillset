const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  gravatar: {
    type: String,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
