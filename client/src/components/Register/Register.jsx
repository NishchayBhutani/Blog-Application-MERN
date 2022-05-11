/** @format */
import { useState } from "react";
import axios from "axios";
import "./Register.css";
export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const buttonClickHandler = (e) => {
    axios
      .post("http://localhost:5000/user/register", { name, email, password })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <label>Name:</label>
      <input onChange={nameChangeHandler} value={name} />
      <br />
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
      <button onClick={buttonClickHandler}>register</button>
    </>
  );
};
