/** @format */

import axios from "axios";
import { useState } from "react";
import "./Create.css";

export const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const userId = localStorage.userId;
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const bodyChangeHandler = (e) => {
    setBody(e.target.value);
  };
  const buttonClickHandler = (e) => {
    axios
      .post("http://localhost:5000/post/create", {
        title: title,
        body: body,
        user: userId,
      })
      .then((res) => {
        console.log(res.data._id);
        const postId = res.data._id;
        axios.patch("http://localhost:5000/user/update" + localStorage.userId, {
          postId,
        });
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setTitle("");
    setBody("");
    alert("blog posted!");
  };
  return (
    <>
      <input placeholder='Title' onChange={titleChangeHandler} value={title} />
      <br />
      <textarea placeholder='Body' onChange={bodyChangeHandler} value={body} />
      <br />
      <button onClick={buttonClickHandler}>Create</button>
    </>
  );
};
