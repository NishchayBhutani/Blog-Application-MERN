/** @format */
import { Navbar } from "../Navbar/Navbar";

export const Blog = () => {
  return (
    <>
      <Navbar />
      <div className='display-blog-container'>
        <h1>{localStorage.getItem("title")}</h1>
        <p>{localStorage.getItem("body")}</p>
        <div>{localStorage.getItem("user")}</div>
      </div>
    </>
  );
};
