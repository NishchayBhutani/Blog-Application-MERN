/** @format */

const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://Nishchay:Nishchay123@cluster0.riinp.mongodb.net/blogApplication",
  )
  .then(() => console.log("successfully connected to database"))
  .catch((err) => console.log(err));

PORT = process.env.PORT || 5000;

app.use("/user", userRoutes);
app.use("/post", postRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
