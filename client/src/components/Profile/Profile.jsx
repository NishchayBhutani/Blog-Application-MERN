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
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [isUpdated_bio, setisUpdated_bio] = useState(false);
  const [isUpdated_socials, setisUpdated_socials] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [rNewPassword, setRNewPassword] = useState("");
  useEffect(() => {
    const id = localStorage.getItem("userId");
    axios
      .get("http://localhost:5000/user/" + id)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
        setEmail(res.data.email);
        setBio(res.data.bio);
        setInstagram(res.data.instagram);
        setFacebook(res.data.facebook);
        setTwitter(res.data.twitter);
      })
      .catch((err) => console.log(err));
  }, []);

  const logoutHandler = (e) => {
    localStorage.clear();
  };
  const bioChangeHandler = (e) => {
    setisUpdated_bio(true);
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
  const instaChangeHandler = (e) => {
    setisUpdated_socials(true);
    setInstagram(e.target.value);
  };
  const facebookChangeHandler = (e) => {
    setisUpdated_socials(true);
    setFacebook(e.target.value);
  };
  const twitterChangeHandler = (e) => {
    setisUpdated_socials(true);
    setTwitter(e.target.value);
  };
  const socialsUpdateHandler = () => {
    axios
      .patch(
        "http://localhost:5000/user/profile/socials/update/" +
          localStorage.getItem("userId"),
        { instagram, facebook, twitter },
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  const passwordUpdateHandler = () => {
    axios
      .patch(
        "http://localhost:5000/user/profile/password/update/" +
          localStorage.getItem("userId"),
        { currentPassword, newPassword },
      )
      .then((res) => {
        if (res.data === "current password does not match")
          alert("current password does not match!");
        if (newPassword !== rNewPassword) alert("passwords do not match!");
      })
      .catch((err) => console.log(err));
    setCurrentPassword("");
    setNewPassword("");
    setRNewPassword("");
  };
  const currentPasswordChangeHandler = (e) => {
    setCurrentPassword(e.target.value);
  };
  const newPasswordChangeHandler = (e) => {
    setNewPassword(e.target.value);
  };
  const rNewPasswordChangeHandler = (e) => {
    setRNewPassword(e.target.value);
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
              placeholder='Tell us more about yourself...'
            />
          </td>
        </tr>
        {isUpdated_bio === true ? (
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
            <Form.Control
              type='text'
              placeholder='instagram username'
              value={instagram}
              onChange={instaChangeHandler}
            />
          </td>
        </tr>
        <tr>
          <td className='table-row-left'>Facebook</td>
          <td className='table-row-right'>
            <Form.Control
              type='text'
              placeholder='facebook username'
              value={facebook}
              onChange={facebookChangeHandler}
            />
          </td>
        </tr>
        <tr>
          <td className='table-row-left'>Twitter</td>
          <td className='table-row-right'>
            <Form.Control
              type='text'
              placeholder='twitter username'
              value={twitter}
              onChange={twitterChangeHandler}
            />
          </td>
        </tr>
        {isUpdated_socials === true ? (
          <tr>
            <td className='table-row-btn'>
              <Button
                className='btn-primary bio-update-btn'
                onClick={socialsUpdateHandler}>
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
      <h3 className='password-update-heading'>Update Password:</h3>
      <table className='password-update-table'>
        <tr>
          <td className='table-row-left'>Current password:</td>
          <td className='table-row-right'>
            <Form.Control
              type='password'
              value={currentPassword}
              onChange={currentPasswordChangeHandler}
            />
          </td>
        </tr>
        <tr>
          <td className='table-row-left'>New password:</td>
          <td className='table-row-right'>
            <Form.Control
              type='password'
              value={newPassword}
              onChange={newPasswordChangeHandler}
            />
          </td>
        </tr>
        <tr>
          <td className='table-row-left'>Retype new password: </td>
          <td className='table-row-right'>
            <Form.Control
              type='password'
              value={rNewPassword}
              onChange={rNewPasswordChangeHandler}
            />
          </td>
        </tr>
        <tr>
          <td className='table-row-btn'>
            <Button className='btn-primary' onClick={passwordUpdateHandler}>
              Update
            </Button>
          </td>
        </tr>
      </table>
      <hr />
      <NavLink className='logout-nav' to='/' onClick={logoutHandler}>
        Logout
      </NavLink>
      <br />
      <br />
    </div>
  );
};
