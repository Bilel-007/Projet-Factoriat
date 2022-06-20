const express = require("express");
const {
  addPost,
  getPost,
  updatePost,
  deletePost,
  getPostById,
} = require("../controllers/postControllers");
const router = express.Router();

router.post("/", addPost);
router.get("/", getPost);
router.get("/:postId", getPostById);
router.put("/:PostId", updatePost);
router.delete("/:PostId", deletePost);

module.exports = router;
