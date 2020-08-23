const mongoose = require("mongoose");

const postSchema = {
  title: String,
  content: String
}

const Post = new mongoose.model("Post", postSchema);

module.exports = Post;
