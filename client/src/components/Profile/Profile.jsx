/** @format */
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import "./Profile.css";
export const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
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
            <textarea
              placeholder={bio || "Tell us something about yourself..."}
            />
          </td>
        </tr>
      </table>
      <br/>
      <hr />
      <h3 className="password-update-heading">Update Password:</h3>
      <table className='password-update-table'>
        <tr>
          <td className='table-row-left'>
            Current password: 
          </td>
          <td className='table-row-right'>
            <input type="password"/>
          </td>
        </tr>
        <tr>
          <td className='table-row-left'>
            New password: 
          </td>
          <td className='table-row-right'>
            <input type="password" />
          </td>
        </tr>
        <tr>
          <td className='table-row-left'>Retype new password: </td>
          <td className='table-row-right'><input type="password" /></td>
        </tr>
        <tr>
          <td className="table-row-btn">
          <Button className="btn-primary">Update</Button>
          </td>
        </tr>
      </table>
    </div>
  );
};
