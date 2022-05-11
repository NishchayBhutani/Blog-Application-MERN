/** @format */

const router = require("express").Router();
const Post = require("../models/Post");
const mongoose = require("mongoose");

router.post("/create", async (req, res) => {
  const title = req.body.title;
  const body = req.body.body;
  const user = mongoose.Types.ObjectId(req.body.user);
  const likes = req.body.likes || 0;
  const post = await new Post({
    user: user,
    title: title,
    body: body,
    likes: likes,
  });
  try {
    await post.save();
    res.json(post);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("user");
    res.json(posts);
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
