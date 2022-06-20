const Post = require("../models/postModel");

//@desc add a new post
//@path POST/api/post
//@access PRIVATE-admin
exports.addPost = async (req, res) => {
  try {
    const newPost = await Post.create({ ...req.body });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};

// @desc get a post (Find all in Database(Find))
// @path GET/api/post
// @access PUBLIC
exports.getPost = async (req, res) => {
  try {
    const Products = await Post.find();
    res.status(201).json(Products);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};

// @desc get a post by ID 
// @path GET/api/post
// @access PRIVATE-admin
exports.getPostById = async (req, res) => {
  try {
    const product = await Post.findById(req.params.postId);
    res.json(product);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};

//@desc update a post by ID
//@path PUT /api/post/:postId
//@access PRIVATE-admin
exports.updatePost = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(
      req.params.PostId,
      { ...req.body },
      { new: true }
    );
    res.status(200).json({ msg: "Post updated" });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};

//@desc delete a post by ID
//@path DELETE/api/post/:postId
//@access PRIVATE-admin
exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.PostId);
    res.status(200).json({ msg: "Post deleted" });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};
