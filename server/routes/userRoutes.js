/** @format */

const router = require("express").Router();
const { default: mongoose } = require("mongoose");
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const newUser = new User({
    name: name,
    bio: "",
    instagram: "",
    facebook: "",
    twitter: "",
    email: email,
    password: password,
    projects: [],
  });
  try {
    await newUser.save();
    res.json(
      await User.findOne({
        name: name,
        bio: "",
        email: email,
        password: password,
        projects: [],
      }),
    );
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  let user;
  try {
    user = await User.find({ email, password });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
  if (!user) {
    return res.status(404).json({ msg: "authentication error" });
  }
  res.json(user);
});

router.get("/:uId", async (req, res) => {
  const userId = req.params.uId;
  try {
    const user = await User.findById(mongoose.Types.ObjectId(userId));
    res.json(user);
  } catch (err) {
    res.status(404).json({ msg: err });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find().populate("posts");
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

router.patch("/update:userId", async (req, res) => {
  const uId = req.params.userId;
  const projectId = mongoose.Types.ObjectId(req.body.postId);
  console.log(uId);
  try {
    const user = await User.findById(mongoose.Types.ObjectId(uId));
    user.posts.push(mongoose.Types.ObjectId(projectId));
    console.log(user);
    await User.findOneAndUpdate({ _id: mongoose.Types.ObjectId(uId) }, user);
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

router.patch("/profile/bio/update/:userId", async (req, res) => {
  const uId = req.params.userId;
  let user = "";
  try {
    user = await User.findById(mongoose.Types.ObjectId(uId));
  } catch (err) {
    res.status(404).json({ msg: err });
  }
  const bio = req.body.bio;
  user = await User.findOneAndUpdate(
    { _id: mongoose.Types.ObjectId(uId) },
    { bio },
  );
  return res.json(await User.findById(mongoose.Types.ObjectId(uId)));
});

router.patch("/profile/password/:userId", async (req, res) => {
  const uId = req.params.userId;
  let user = "";
  try {
    user = await User.findById(mongoose.Types.ObjectId(uId));
  } catch (err) {
    res.status(404).json({ msg: err });
  }
  const password = req.body.password;
  user = await User.findOneAndUpdate(
    { _id: mongoose.Types.ObjectId(uId) },
    { password },
  );
  return res.json(user);
});

router.delete("/delete:userId", async (req, res) => {
  const uId = req.params.userId;
  try {
    const user = await User.findOne({ _id: mongoose.Types.ObjectId(uId) });
    if (!user) return res.status(404).send("user not found");
    await User.deleteOne({ user });
    res.send("successful");
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

module.exports = router;
