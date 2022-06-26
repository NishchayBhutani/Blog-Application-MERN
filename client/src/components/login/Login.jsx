/** @format */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
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
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css'
      />
      <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>
      <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js'></script>

      <div class='split1'>
        <div>
          <img src='BlogSpot logo.jpeg' alt='BlogSpot' className='img1' />
        </div>
      </div>

      <div class='split2'>
        <div class='split2_login'>
          <h3 className='button1'>Welcome to BlogPost !</h3>
          <br />
          <label>Email:</label>
          <br />
          <input
            type='email'
            className='form-control input-sm'
            onChange={emailChangeHandler}
            value={email}
          />
          <br />
          <label>Password:</label>
          <br />
          <input
            type='password'
            className='form-control input-sm'
            onChange={passwordChangeHandler}
            value={password}
          />
          <br />
          <button
            type='button'
            className='btn btn-primary btn-block'
            onClick={buttonClickHandler}>
            Login
          </button>
          <br />
          <div className='login-links'>
            <a className='button1' href='http://localhost:3000/register'>
              <p>Don't have an account ? Sign Up</p>
            </a>
            <a
              className='forgot-pass-button'
              href='http://localhost:3000/forgotpass'>
              <p>Forgot Password</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
