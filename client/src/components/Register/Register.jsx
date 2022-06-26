/** @format */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";
export const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [security, setSecurity] = useState("");
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const securityChangeHandler = (e) => {
    setSecurity(e.target.value);
  };
  const buttonClickHandler = (e) => {
    if (emailValidation()) {
      axios
        .post("http://localhost:5000/user/register", { name, email, password })
        .then((res) => {
          localStorage.setItem("userId", res.data._id);
        })
        .then(() => navigate("/dashboard"))
        .catch((err) => {
          console.log(err);
          alert("email already in use");
        });
      setName("");
      setEmail("");
      setPassword("");
    } else alert("enter a valid email!");
  };
  const emailValidation = () => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email || regex.test(email) === false) return false;
    return true;
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
          <h3 className='button1'>Sign Up to BlogSpot !</h3>
          <br />
          <label>Name:</label>
          <input
            onChange={nameChangeHandler}
            className='form-control input-sm'
            value={name}
          />
          <br />
          <label>Email:</label>
          <input
            type='email'
            className='form-control input-sm'
            onChange={emailChangeHandler}
            value={email}
          />
          <br />
          <label>Password:</label>
          <input
            type='password'
            className='form-control input-sm'
            onChange={passwordChangeHandler}
            value={password}
          />
          <br />
          <label>Security Pin:</label>
          <input
            className='form-control input-sm input-security'
            onChange={securityChangeHandler}
            type='password'
            value={security}
            maxlength='4'
            placeholder='should be numeric'
          />
          <br />
          <button
            onClick={buttonClickHandler}
            className='btn btn-block btn-success'>
            Create Account
          </button>
          <br />

          <a className='button1' href='http://localhost:3000/'>
            <p>Already have an account ? Login</p>
          </a>
        </div>
      </div>
    </>
  );
};
