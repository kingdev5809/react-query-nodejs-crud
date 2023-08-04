const router = require("express").Router();
const {
  createPosts,
  getPosts,

  UpdatePost,
  DeletePost,
} = require("../controllers/postController");
router.post("/", createPosts);
router.post("/edit/:id", UpdatePost);
router.get("/", getPosts);
router.delete("/:id", DeletePost);
module.exports = router;
