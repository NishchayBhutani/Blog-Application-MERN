/** @format */

import axios from "axios";
import { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      
      <Navbar />
<div  class="border border-secondary "style={{width:"75%",marginLeft:"12.5%",marginTop:"5%"}}>
  <br/>
  <form>
  <div className="mb-3" style={{marginLeft:"1%",marginRight:"1%"}}>
    <label for="BlogTitle" className="form-label">Blog Title</label>
    <br/>
    <input placeholder='The Title Goes Here...' id="BlogTitle" className="form-control" onChange={titleChangeHandler} value={title} />
  </div>

  <div className="mb-3" style={{marginLeft:"1%",marginRight:"1%"}}>
    <label for="Blog" className="form-label">Your Blog Goes Here</label>
    <textarea placeholder='Start Typing Your Thoughts Here...' rows="6" id="Blog" className="form-control" onChange={bodyChangeHandler} value={body} />
  </div>
  
  <div className="mb-3" style={{marginLeft:"1%",marginRight:"1%"}}>
  <button onClick={buttonClickHandler} className=" btn btn-success form-control ">Add Blog</button>
  </div>
  
</form>
<br/>
</div>      
    
    </>
  );
};
