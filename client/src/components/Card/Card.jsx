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
    <div className='post-card-container' onClick={postCardClickHandler}>
      <div className='post-card-title'>
        <h1>{props.title}</h1>
      </div>
      <hr />
      <div className='post-card-body'>
        {isLarge ? props.body.substring(0, 200) + "..." : props.body}
      </div>
      <h3>By: {props.user}</h3>
    </div>
  );
};
