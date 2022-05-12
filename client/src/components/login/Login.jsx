/** @format */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const buttonClickHandler = (e) => {
    axios
      .post("http://localhost:5000/user/login", { email, password })
      .then((res) => {
        console.log(res.data[0]._id);
        localStorage.setItem("userId", res.data[0]._id);
      })
      .then(() => {
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        alert("incorrect credentials");
      });
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <label>Email:</label>
      <input type='email' onChange={emailChangeHandler} value={email} />
      <br />
      <label>Password:</label>
      <input
        type='password'
        onChange={passwordChangeHandler}
        value={password}
      />
      <br />
      <button onClick={buttonClickHandler}>Login</button>
    </>
  );
};
