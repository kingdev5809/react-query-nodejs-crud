const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  text: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Post", postSchema);
