/** @format */
import { Navbar } from "../Navbar/Navbar";

export const Blog = () => {
  return (
    <>
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      <Navbar />
      <div className='display-blog-container'>
        <h1 style={{textAlign:"center",marginTop:"2rem"}}>{localStorage.getItem("title")}</h1>
        <p style={{textAlign:"center",marginLeft:"4rem",marginRight:"4rem",marginTop:"2rem"}}>{localStorage.getItem("body")}</p>
        <div style={{textAlign:"center",fontWeight:"bold",fontSize:"21px"}}>{localStorage.getItem("user")}</div>
      </div>
    </>
  );
};
