/** @format */
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Profile.css";
export const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  useEffect(() => {
    const id = localStorage.getItem("userId");
    axios
      .get("http://localhost:5000/user/" + id)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
        setEmail(res.data.email);
        setBio(res.data.bio);
      })
      .catch((err) => console.log(err));
  }, []);
  const logoutHandler = (e) => {
    localStorage.clear();
  };
  const bioChangeHandler = (e) => {
    setIsUpdated(true);
    setBio(e.target.value);
  };
  const bioUpdateHandler = (e) => {
    axios
      .patch(
        "http://localhost:5000/user/profile/bio/update/" +
          localStorage.getItem("userId"),
        { bio },
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Navbar />
      <table className='profile-table'>
        <tr>
          <td className='table-row-left'>
            <label>Username: </label>
          </td>
          <td className='table-row-right'>{name}</td>
        </tr>
        <tr>
          <td className='table-row-left'>
            <label>Email: </label>
          </td>
          <td className='table-row-right'>{email}</td>
        </tr>
        <tr>
          <td className='table-row-left'>
            <label>Bio: </label>
          </td>
          <td className='table-row-right'>
            <Form.Control
              as='textarea'
              rows={3}
              onChange={bioChangeHandler}
              value={bio}
              placeholder='Tell us something about yourself...'
            />
          </td>
        </tr>
        {isUpdated === true ? (
          <tr>
            <td className='table-row-btn'>
              <Button
                className='btn-primary bio-update-btn'
                onClick={bioUpdateHandler}>
                Update
              </Button>
            </td>
          </tr>
        ) : (
          ""
        )}
      </table>
      <br />
      <hr />
      <h3 className='socials-heading'>Socials 📢:</h3>
      <table className='socials-table'>
        <tr>
          <td className='table-row-left'>Instagram</td>
          <td className='table-row-right'>
            <Form.Control type='text' placeholder='instagram username' />
          </td>
        </tr>
        <tr>
          <td className='table-row-left'>Facebook</td>
          <td className='table-row-right'>
            <Form.Control type='text' placeholder='facebook username' />
          </td>
        </tr>
        <tr>
          <td className='table-row-left'>Twitter</td>
          <td className='table-row-right'>
            <Form.Control type='text' placeholder='twitter username' />
          </td>
        </tr>
      </table>
      <br />
      <hr />
      <h3 className='password-update-heading'>Update Password:</h3>
      <table className='password-update-table'>
        <tr>
          <td className='table-row-left'>Current password:</td>
          <td className='table-row-right'>
            <Form.Control type='password' />
          </td>
        </tr>
        <tr>
          <td className='table-row-left'>New password:</td>
          <td className='table-row-right'>
            <Form.Control type='password' />
          </td>
        </tr>
        <tr>
          <td className='table-row-left'>Retype new password: </td>
          <td className='table-row-right'>
            <Form.Control type='password' />
          </td>
        </tr>
        <tr>
          <td className='table-row-btn'>
            <Button className='btn-primary'>Update</Button>
          </td>
        </tr>
      </table>
      {/* <NavLink className='logout-nav' to='/' onClick={logoutHandler}>
        Logout
      </NavLink> */}
      <br />
      <hr />
    </div>
  );
};
