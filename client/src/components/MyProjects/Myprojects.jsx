/** @format */
import { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import "./Myprojects.css";
import axios from "axios";
import { Card } from "../Card/Card";
export const Myprojects = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/post/" + localStorage.getItem("userId"))
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      <Navbar />
      <div className='cards-container center'>
        {posts.map((post) => {
          return <Card title={post.title} body={post.body} user={post.user.name} />;
        })}
      </div>
    </>
  );
};
