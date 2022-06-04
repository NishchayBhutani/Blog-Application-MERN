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
    <>
      <Navbar />
      <div className='cards-container center'>
        {posts.map((post) => {
          return (
            <Card title={post.title} body={post.body} user={post.user.name} />
          );
        })}
      </div>
    </>
  );
};
