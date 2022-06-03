/** @format */
import "./Card.css";
import { useNavigate } from "react-router-dom";
export const Card = (props) => {
  const navigate = useNavigate();
  const isLarge = props.body.length > 200 ? true : false;
  const postCardClickHandler = (e) => {
    localStorage.setItem("title", props.title);
    localStorage.setItem("body", props.body);
    localStorage.setItem("user", props.user);
    navigate("/blog");
  };
  return (
    <>
      <link
        href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
        rel='stylesheet'
        integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
        crossorigin='anonymous'></link>
      <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>
      <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js'></script>
      <div
        className='card text-black border border-secondary mb-4 post-card-container'
        onClick={postCardClickHandler}
        style={{ width: "55rem", marginLeft: "5rem", marginTop: "5rem" }}>
        <div className='card-title'>
          <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
            {props.title}
          </h1>
        </div>
        <br />
        <div
          className='card-text'
          style={{
            textAlign: "center",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}>
          {isLarge ? props.body.substring(0, 1000) + "..." : props.body}
        </div>
        <br />
        <h3
          style={{
            textAlign: "center",
            color: "#313538",
            marginBottom: "2rem",
          }}>
          {" "}
          - {props.user}
        </h3>
      </div>
    </>
  );
};
