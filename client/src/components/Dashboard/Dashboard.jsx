/** @format */
import { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import axios from "axios";
import { Card } from "../Card/Card";
import "./Dashboard.css";
export const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/post")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />
      <div className='cards-container'>
        {posts.map((post) => {
          return (
            <Card title={post.title} body={post.body} user={post.user.name} />
          );
        })}
      </div>
    </>
  );
};
