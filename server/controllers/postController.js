const Post = require("../models/postModel");

module.exports.createPosts = async (req, res, next) => {
  console.log(req);
  try {
    const { image, title, text } = req.body;
    const post = await Post.create({
      image,
      title,
      text,
    });
    return res.json(post);
  } catch (err) {
    next(err);
  }
};

module.exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({ _id: { $ne: req.params.id } }).select([
      "title",
      "image",
      "text",
    ]);
    return res.json(posts);
  } catch (error) {
    next(error);
  }
};

module.exports.UpdatePost = async (req, res) => {
  try {
    const { images, title, text, _id } = req.body;
    console.log(_id);
    const posts = await Post.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { images, title, text } }
    );
    return res.json("Post updated successfully");
  } catch (err) {
    return res.json(err);
  }
};

module.exports.DeletePost = async (req, res) => {
  try {
    const { images, title, text } = req.body;
    const posts = await Post.findByIdAndRemove({ _id: req.params.id });
    return res.json("Post Deleted successfully");
  } catch (err) {
    return res.json(err);
  }
};
