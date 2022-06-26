/** @format */

const router = require("express").Router();
const { default: mongoose } = require("mongoose");
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const security = req.body.security;
  const newUser = new User({
    name: name,
    bio: "",
    instagram: "",
    facebook: "",
    twitter: "",
    email: email,
    password: password,
    security: security,
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

router.patch("/profile/password/update/:userId", async (req, res) => {
  const uId = req.params.userId;
  const currentPassword = req.body.currentPassword;
  let user = "";
  try {
    user = await User.findById(mongoose.Types.ObjectId(uId));
  } catch (err) {
    res.status(404).json({ msg: err });
  }
  if (user.password !== currentPassword) {
    return res.send("current password does not match");
  }
  const password = req.body.newPassword;
  user = await User.findOneAndUpdate(
    { _id: mongoose.Types.ObjectId(uId) },
    { password },
  );
  return res.json(user);
});

router.patch("/profile/socials/update/:userId", async (req, res) => {
  const uId = req.params.userId;
  let user = "";
  try {
    user = await User.findById(mongoose.Types.ObjectId(uId));
  } catch (err) {
    res.status(404).json({ msg: err });
  }
  const instagram = req.body.instagram;
  const facebook = req.body.facebook;
  const twitter = req.body.twitter;
  user = await User.findOneAndUpdate(
    { _id: mongoose.Types.ObjectId(uId) },
    {
      instagram: instagram === null ? "" : instagram,
      facebook: facebook === null ? "" : facebook,
      twitter: twitter === null ? "" : twitter,
    },
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

router.get("/confirmemail", async (req, res) => {
  // const email = req.body.email;
  // let user = "";
  // try {
  //   console.log(email);
  //   user = await User.find({ email: email });
  //   if (!user) return res.send("email not registered");
  //   res.send("confirmation success");
  // } catch (err) {
  //   res.json({ msg: err });
  // }
  res.send("hello");
});

module.exports = router;
